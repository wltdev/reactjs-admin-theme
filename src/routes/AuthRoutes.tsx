import { AuthLayout } from '@/Layouts/AuthLayout';
import { Login } from '@/pages/Auth/Login';

export const AuthRoutes = {
    path: '/',
    element: <AuthLayout />,
    children: [
        {
            path: '/login',
            element: <Login />
        }
    ]
};
