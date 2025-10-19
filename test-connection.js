import { PrismaClient } from './src/generated/prisma/index.js';

const prisma = new PrismaClient();

async function testConnection() {
  try {
    console.log('🔗 Test de connexion à la base de données...');
    console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Définie' : 'Non définie');
    
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log('✅ Connexion réussie !', result);
    
    const userCount = await prisma.user.count();
    console.log('👥 Nombre d\'utilisateurs:', userCount);
    
    const orgCount = await prisma.organization.count();
    console.log('🏢 Nombre d\'organisations:', orgCount);
    
  } catch (error) {
    console.error('❌ Erreur de connexion:', error.message);
    console.error('Code d\'erreur:', error.code);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();