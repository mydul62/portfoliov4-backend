import express from 'express';
import { AuthRoutes } from '../../modules/auth/auth.routes';
import { AdminRoutes } from '../../modules/admin/admin.routes';
import { BlogRouter } from '../../modules/blog/blog.route';
import { ProjectRoute } from '../../modules/projects/project.route';


const router = express.Router();

const moduleRoutes = [
    {
        path:'/auth',
        route:AuthRoutes
    },
    {
        path:'/admin',
        route:AdminRoutes
    },
    {
        path:'/blog',
        route:BlogRouter
    },
    {
        path:'/project',
        route:ProjectRoute
    }
]



moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
