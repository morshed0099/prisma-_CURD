import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();
const main = async () => {
  //   const createUser = await prisma.user.create({
  //     data: {
  //       userName: "user2",
  //       email: "user2@email.com",
  //       role: UserRole.user,
  //     },
  //   });
  // const createProfile=await prisma.profile.create({
  //     data:{
  //         bio:"this is for user1 bio",
  //         userId:1
  //     }
  // })

  // const createCategory=await prisma.category.create({
  //     data:{
  //         name:"Software engineering",
  //     }
  // })

  //   const createPost = await prisma.post.create({
  //     data: {
  //       title: "this is post 1",
  //       content: "this is content 1",
  //       authorId: 1,
  //       postCategory: {
  //         create: {
  //             categoryId:3
  //         //   category: {
  //         //     connect: {
  //         //       id: 1,
  //         //     },
  //         //   },
  //         },
  //       },
  //     },
  //     include: {
  //       postCategory: true,
  //     },
  //   });

  const createPost = await prisma.post.create({
    data: {
      title: "this is post 1",
      content: "this is content 1",
      authorId: 1,
      postCategory: {
        create: [
          {
            categoryId: 1,
          },
          {
            categoryId: 2,
          },
          {
            categoryId: 4,
          },
        ],
      },
    },
    include: {
      postCategory: true,
    },
  });
  console.log(createPost);
};
// main();
