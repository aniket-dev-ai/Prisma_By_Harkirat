import { PrismaClient } from "../src/generated/prisma";

const client = new PrismaClient();


async function createUser(){
  const userr = await  client.user.findFirst({
    where:{
        id:"6823a468da2f53ec55c98b24"
    },
    select:{
        username:true
    }
  })
  console.log(userr)
}

createUser();