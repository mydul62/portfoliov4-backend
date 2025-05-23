import express, { NextFunction, Request, Response } from 'express';
import { ProjectController } from './project.controller';
import { BlogValidation } from '../blog/blog.validation';
import { ProjectValidation } from './project.validation';
import { multerUpload } from '../../app/config/multer-config';

const router = express.Router();


router.post(
  '/',multerUpload.single('file'),
  (req:Request,res:Response,next:NextFunction)=>{
  req.body =ProjectValidation.projectSchema.parse(JSON.parse(req.body.data))
    ProjectController.CreateProject(req,res,next)
  }

)
router.get(
  '/',
  ProjectController.GetAllProject
)
router.delete(
  '/:id',
  ProjectController.DeleteProject
)
export const ProjectRoute = router;
