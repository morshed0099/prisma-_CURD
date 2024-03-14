import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQuires = async() => {
    const result =await prisma.user.findUnique({
        where:{
            id:1
        }
    })
  console.log(result);
};
relationalQuires();
