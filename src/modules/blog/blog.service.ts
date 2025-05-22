
import { multerUpload } from "../../app/config/multer-config"
import prisma from "../../app/shared/prisma"

const CreateBlogInDb = async (req:any)=>{
const file = req.file
 if(file){
 
 req.body.image = file.path;
 }
  console.log(req.body)
  const result =await prisma.blogPost.create({
  data:req?.body
  })
return result;
}
const GetAllBlogFromDB = async ()=>{
  const result =await prisma.blogPost.findMany()
return result;
}
const DeleteBlogFromDb = async (id:string)=>{
  const result =await prisma.blogPost.delete({
  where:{
  id
  }
  })
return result;
}

export const   BlogService  ={
CreateBlogInDb,
GetAllBlogFromDB,
DeleteBlogFromDb
}