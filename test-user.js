import { PrismaClient } from './src/generated/prisma/index.js';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function createTestUser() {
  try {
    // Créer l'organisation
    const org = await prisma.organization.create({
      data: {
        name: 'Test Collectivité',
        email: 'test@collectivite.fr',
        plan: 'FREE'
      }
    });

    // Créer l'utilisateur
    const passwordHash = await bcrypt.hash('test123', 10);
    const user = await prisma.user.create({
      data: {
        email: 'test@collectivite.fr',
        passwordHash,
        firstName: 'Admin',
        lastName: 'Test',
        role: 'COLLECTIVITE',
        organizationId: org.id
      }
    });

    console.log('✅ Utilisateur créé avec succès !');
    console.log('Email:', user.email);
    console.log('Mot de passe: test123');
    console.log('Rôle:', user.role);
  } catch (error) {
    console.error('❌ Erreur:', error);
  } finally {
    await prisma.$disconnect();
  }
}

createTestUser();