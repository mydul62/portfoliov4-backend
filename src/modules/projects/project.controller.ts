import { JwtPayload } from 'jsonwebtoken';
import { catchAsync } from '../../app/helper/catchAsync';
import { sendResponse } from '../../app/shared/sendResponse';
import httpStatus from 'http-status';
import { ProjectService } from './proejct.service';

const CreateProject = catchAsync(async (req, res, next) => {
  const result = await ProjectService.CreateProjectInDb(req);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Project Create Successfully',
    data:result
  });
});
const GetAllProject = catchAsync(async (req, res, next) => {
  const result = await ProjectService.GetAllProjectsFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Project retrived Successfully',
    data:result
  });
});
const DeleteProject = catchAsync(async (req, res, next) => {
const {id} = req.params
  const result = await ProjectService.DeletelProjectsFromDB(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Project Delete Successfully',
    data:result
  });
});


export const ProjectController = {
  CreateProject,
GetAllProject,
DeleteProject
};
