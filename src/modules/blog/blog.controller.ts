import { JwtPayload } from 'jsonwebtoken';
import { catchAsync } from '../../app/helper/catchAsync';
import { sendResponse } from '../../app/shared/sendResponse';
import httpStatus from 'http-status';
import { BlogService } from './blog.service';
import { Request, Response } from 'express';

const CreateBlog = catchAsync(async (req, res, next) => {
  const result = await BlogService.CreateBlogInDb(req);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Blog Create Successfully',
    data:result
  });
});
const GetAllBlog = catchAsync(async (req, res, next) => {
  const result = await BlogService.GetAllBlogFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Blog retrived Successfully',
    data:result
  });
});
const DeleteBlog = catchAsync(async (req:Request, res:Response) => {
const {id} = req.params;
  const result = await BlogService.DeleteBlogFromDb(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Blog Delete Successfully',
    data:result
  });
});


export const BlogController = {
  CreateBlog,
GetAllBlog,
DeleteBlog
};
