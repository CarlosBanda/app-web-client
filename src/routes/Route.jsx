import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DevicePage, HomePage, LoginPage, NavbarPage, RegisterPage } from "../pages/";

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
    {
        path: "/panel",
        element: <NavbarPage></NavbarPage>
    }    
    // {
    //     path: "/panel",
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
