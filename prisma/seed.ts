import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

// Seed mínimo e idempotente. Roda com: npm run db:seed
// Obs.: o usuário admin será criado na Sessão 3 (depende do hash de senha).
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const db = new PrismaClient({ adapter });

const tiposConsulta = [
  { nome: "Avaliação", duracaoMinutos: 40 },
  { nome: "Retorno", duracaoMinutos: 20 },
];

const configuracoes = [
  { chave: "horario_funcionamento", valor: '{"inicio":"08:00","fim":"18:00"}' },
  { chave: "duracao_padrao_minutos", valor: "40" },
];

async function main() {
  for (const tipo of tiposConsulta) {
    const existente = await db.tipoConsulta.findFirst({
      where: { nome: tipo.nome },
    });
    if (!existente) {
      await db.tipoConsulta.create({ data: tipo });
    }
  }

  for (const config of configuracoes) {
    await db.configuracao.upsert({
      where: { chave: config.chave },
      update: {},
      create: config,
    });
  }

  console.log("Seed concluído.");
}

main()
  .catch((erro) => {
    console.error(erro);
    process.exit(1);
  })
  .finally(() => db.$disconnect());
