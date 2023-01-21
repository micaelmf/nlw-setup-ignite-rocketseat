import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    // log: ['query'] // mostra, no console, as queries que rodaram no banco
});