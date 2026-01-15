const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Export the PrismaClient instance directly so callers using `require('../../db')`
// receive the client and can call methods like `prisma.category.findMany()`.
module.exports = prisma;