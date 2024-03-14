import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const main = async () => {
  const result =await prisma.post.create({
    data: {
      title: "post 3",
      content: "this is content post 3",
      published:false,
      authorName:"abdullah"
    },
  });
  console.log(result)
};
main();
