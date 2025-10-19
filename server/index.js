import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { PrismaClient, Role } from '../src/generated/prisma/index.js';

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';
const COOKIE_NAME = 'camplyze_token';

// Configuration multer pour upload d'images
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'));
    }
  }
});

app.use(express.json());
app.use(cookieParser());

// Configuration CORS pour développement et production
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000', 
  'https://camply-production.up.railway.app',
  'https://camply-ooin.vercel.app',
  'https://camply-eosin.vercel.app',
  'https://camply-gr0dxtgaw-edouards-projects-876bd8d1.vercel.app',
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({ 
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Check if origin is in allowed list
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    
    // Allow all Vercel preview deployments for your project
    if (origin.includes('vercel.app') && origin.includes('edouard')) {
      return callback(null, true);
    }
    
    // Reject other origins
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true 
}));

app.use('/uploads', express.static(uploadsDir));

function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

function authMiddleware(req, res, next) {
  // Try Authorization header first (for cross-domain), then cookies (for same-domain)
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith('Bearer ') ? authHeader.substring(7) : req.cookies[COOKIE_NAME];
  
  if (!token) return res.status(401).json({ error: 'Unauthenticated' });
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

function requireCollectivite(req, res, next) {
  if (req.user?.role !== 'COLLECTIVITE') return res.status(403).json({ error: 'Forbidden' });
  next();
}

function requireEquipe(req, res, next) {
  if (!['DIRECTEUR', 'ANIMATEUR'].includes(req.user?.role)) return res.status(403).json({ error: 'Forbidden' });
  next();
}

// Health check endpoints pour Railway
app.get('/', (_, res) => res.json({ status: 'ok', service: 'camplyze-api' }));
app.get('/health', (_, res) => res.json({ ok: true }));
app.get('/api/health', (_, res) => res.json({ ok: true }));

// Database connection test endpoint
app.get('/api/test-db', async (req, res) => {
  try {
    console.log('Testing database connection...');
    console.log('DATABASE_URL defined:', !!process.env.DATABASE_URL);
    
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    const userCount = await prisma.user.count();
    const orgCount = await prisma.organization.count();
    
    res.json({ 
      success: true,
      dbTest: result,
      users: userCount,
      organizations: orgCount,
      env: {
        databaseUrlDefined: !!process.env.DATABASE_URL,
        nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT
      }
    });
  } catch (error) {
    console.error('Database test error:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message,
      code: error.code,
      env: {
        databaseUrlDefined: !!process.env.DATABASE_URL,
        nodeEnv: process.env.NODE_ENV,
        port: process.env.PORT
      }
    });
  }
});

app.post('/api/auth/register-collectivite', async (req, res) => {
  try {
    const { organizationName, email, password, firstName, lastName } = req.body;
    if (!organizationName || !email || !password || !firstName || !lastName) {
      return res.status(400).json({ error: 'Missing fields' });
    }
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return res.status(409).json({ error: 'Email already in use' });
    const passwordHash = await bcrypt.hash(password, 10);
    const org = await prisma.organization.create({
      data: { name: organizationName, email, plan: 'FREE' },
    });
    const user = await prisma.user.create({
      data: {
        email,
        passwordHash,
        firstName,
        lastName,
        role: Role.COLLECTIVITE,
        organizationId: org.id,
      },
    });
    const token = signToken({ id: user.id, orgId: org.id, role: 'COLLECTIVITE' });
    res.cookie(COOKIE_NAME, token, { httpOnly: true, sameSite: 'lax' });
    return res.json({ 
      user: { id: user.id, email: user.email, role: user.role, organizationId: user.organizationId },
      token: token // Send token in response for cross-domain auth
    });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/auth/login-collectivite', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Missing email or password' });
    }
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || user.role !== 'COLLECTIVITE') return res.status(401).json({ error: 'Invalid credentials' });
    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ error: 'Invalid credentials' });
    const token = signToken({ id: user.id, orgId: user.organizationId, role: user.role });
    res.cookie(COOKIE_NAME, token, { httpOnly: true, sameSite: 'lax' });
    res.json({ 
      user: { id: user.id, email: user.email, role: user.role, organizationId: user.organizationId },
      token: token // Send token in response for cross-domain auth
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/auth/login-equipe', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Missing email or password' });
    }
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !['DIRECTEUR', 'ANIMATEUR'].includes(user.role)) return res.status(401).json({ error: 'Invalid credentials' });
    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ error: 'Invalid credentials' });
    const token = signToken({ id: user.id, orgId: user.organizationId, role: user.role });
    res.cookie(COOKIE_NAME, token, { httpOnly: true, sameSite: 'lax' });
    res.json({ user: { id: user.id, email: user.email, role: user.role, organizationId: user.organizationId } });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/auth/me', authMiddleware, async (req, res) => {
  const user = await prisma.user.findUnique({ 
    where: { id: req.user.id },
    include: { organization: true }
  });
  if (!user) return res.status(404).json({ error: 'Not found' });
  res.json({ 
    user: { 
      id: user.id, 
      email: user.email, 
      role: user.role, 
      organizationId: user.organizationId, 
      firstName: user.firstName, 
      lastName: user.lastName, 
      avatar: user.avatar,
      organization: {
        id: user.organization.id,
        name: user.organization.name,
        email: user.organization.email
      }
    } 
  });
});

app.post('/api/auth/logout', (req, res) => {
  res.clearCookie(COOKIE_NAME);
  res.json({ ok: true });
});

// Directors CRUD (collectivite only)
app.get('/api/users/directors', authMiddleware, requireCollectivite, async (req, res) => {
  const directors = await prisma.user.findMany({ where: { organizationId: req.user.orgId, role: Role.DIRECTEUR } });
  res.json({ directors });
});

app.post('/api/users/directors', authMiddleware, requireCollectivite, async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  if (!email || !password || !firstName || !lastName) return res.status(400).json({ error: 'Missing fields' });
  const exists = await prisma.user.findUnique({ where: { email } });
  if (exists) return res.status(409).json({ error: 'Email already used' });
  const passwordHash = await bcrypt.hash(password, 10);
  const director = await prisma.user.create({
    data: {
      email,
      passwordHash,
      firstName,
      lastName,
      role: Role.DIRECTEUR,
      organizationId: req.user.orgId,
    },
  });
  res.json({ director });
});

app.put('/api/users/directors/:id', authMiddleware, requireCollectivite, async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName } = req.body;
  const director = await prisma.user.update({ where: { id }, data: { firstName, lastName } });
  res.json({ director });
});

app.delete('/api/users/directors/:id', authMiddleware, requireCollectivite, async (req, res) => {
  const { id } = req.params;
  await prisma.user.delete({ where: { id } });
  res.json({ ok: true });
});

// Avatar upload
app.post('/api/auth/avatar', authMiddleware, upload.single('avatar'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  
  const avatarUrl = `/uploads/${req.file.filename}`;
  const user = await prisma.user.update({ 
    where: { id: req.user.id }, 
    data: { avatar: avatarUrl } 
  });
  
  res.json({ avatar: user.avatar });
});

// Update user profile
app.put('/api/auth/profile', authMiddleware, async (req, res) => {
  const { firstName, lastName } = req.body;
  const user = await prisma.user.update({
    where: { id: req.user.id },
    data: { firstName, lastName }
  });
  res.json({ user: { id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, role: user.role, avatar: user.avatar } });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`API listening on http://0.0.0.0:${PORT}`);
});
