import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const main = async () => {
  const result =await prisma.post.create({
    data: {
      title: "post 1",
      content: "this is content post 1",
      published: true,
    },
  });
  console.log(result)
};
main();
