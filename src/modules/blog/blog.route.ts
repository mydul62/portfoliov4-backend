import express, { NextFunction, Request, Response } from 'express';
import { validateRequest } from '../../app/middleWares/validationRequest';
import { BlogController } from './blog.controller';
import { BlogValidation } from './blog.validation';
import { multerUpload } from '../../app/config/multer-config';

const router = express.Router();
router.post(
  '/',multerUpload.single('file'),
  (req:Request,res:Response,next:NextFunction)=>{
  req.body = BlogValidation.blogPostBodySchema.parse(JSON.parse(req.body.data))
    BlogController.CreateBlog(req,res,next)
  }

)
router.get(
  '/',
  BlogController.GetAllBlog
)
router.delete(
  '/:id',
  BlogController.DeleteBlog
)

export const BlogRouter = router;
