import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const main = async () => {
const createMany=await prisma.post.createMany({
    data:[
        {
            content:'this is content of 23',
            title:"this is title of 23",
            authorName:"this is author name 23",
            published:true
        },
        {
            content:'this is content of 22',
            title:"this is title of 23",
            authorName:"this is author name 23",
            published:false
        },
        {
            content:'this is content of 22',
            title:"this is title of 23",
            authorName:"this is author name 23",
            published:true
        }
    ]
})
};
main();
