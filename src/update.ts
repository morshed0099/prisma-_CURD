import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient()

const update=async()=>{

    const singleUpdate=await prisma.post.update({
        where:{
            id:36
        },
        data:{
            title:"this is a title 36",
            content:"this is a content 36"
        }
    })

}
update()
