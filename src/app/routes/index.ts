import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { sessionRoutes } from "../modules/sessions/session.route";

interface IRoute {
    path: string;
    route: Router;
}

const router = Router();

const moduleRoutes: IRoute[] = [
    {
        path: "/user",
        route: UserRoutes
    },
    {
        path: "/auth",
        route: AuthRoutes
    },
    {
        path: "/session",
        route: sessionRoutes
    }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export const AppRoutes = router;