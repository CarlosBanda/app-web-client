import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "../pages/";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage></HomePage>
    },
    {
        path: "/login-clients",
        element: <LoginPage></LoginPage>
    },
    {
        path: "/register-clients",
        element: <RegisterPage></RegisterPage>
    },
    // {
    //     path: "/",
    //     element: <HeroesRoutes></HeroesRoutes>,
    //     children: childHeroesRoutes
    // }    
]);
export const AppRouter = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}
