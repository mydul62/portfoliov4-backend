
import prisma from "../../app/shared/prisma"

const CreateProjectInDb = async (req:any)=>{
const file = req.file
console.log(file)
 if(file){
 req.body.frontImage =file.path;
 }

  const result =await prisma.project.create({
  data:req?.body
  })
return result;
}



const GetAllProjectsFromDB = async ()=>{
  const result =await prisma.project.findMany()
return result;
}

const DeletelProjectsFromDB = async (id:string)=>{
  const result =await prisma.project.delete({
  where:{
    id
  }
  })
return result;
}

export const   ProjectService  ={
CreateProjectInDb,
GetAllProjectsFromDB,
DeletelProjectsFromDB
}