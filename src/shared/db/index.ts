import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";

// Cliente Prisma único. Em desenvolvimento, reaproveita a instância entre
// recarregamentos (HMR) para não esgotar conexões.
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function criarClient() {
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
  return new PrismaClient({ adapter });
}

export const db = globalForPrisma.prisma ?? criarClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
