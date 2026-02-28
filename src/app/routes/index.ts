import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { sessionRoutes } from "../modules/sessions/session.route";
import { SkillsRoutes } from "../modules/skills/skills.route";


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
    },
    {
        path: "/skills",
        route: SkillsRoutes
    }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export const AppRoutes = router;