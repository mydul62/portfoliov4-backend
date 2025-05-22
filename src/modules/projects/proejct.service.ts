
import prisma from "../../app/shared/prisma"

const CreateProjectInDb = async (req:any)=>{
const file = req.file
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

export const   ProjectService  ={
CreateProjectInDb,
GetAllProjectsFromDB
}