import ForgotPassword from "../components/LayoutLogin/ForgotPassword";
import LoginForm from "../components/LayoutLogin/LoginForm";
import SignupForm from "../components/LayoutLogin/SignupForm";
import Dashboard from "../components/Page/Dashboard";
import Device from "../components/Page/Device";
import LevelNo from "../components/Page/LevelNo";
import Report from "../components/Page/Report";
import Service from "../components/Page/Service";
import SystemInstallation from "../components/Page/SystemInstallation";

export const RouteLogin = [
    {path: '/', element: <LoginForm/>},
    {path: '/forgotpassword', element: <ForgotPassword/>},
    {path: '/signupForm', element: <SignupForm/>},
];
export const RouteHome = [
    {path: '/dashboard', element: <Dashboard/>},
    {path: '/device', element: <Device/>},
    {path: '/service', element: <Service/>},
    {path: '/levelNo', element: <LevelNo/>},
    {path: '/report', element: <Report/>},
    {path: '/systemInstallation', element: <SystemInstallation/>},
];
