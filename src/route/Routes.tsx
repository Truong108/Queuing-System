import ForgotPassword from "../components/LayoutLogin/ForgotPassword";
import LoginForm from "../components/LayoutLogin/LoginForm";
import SignupForm from "../components/LayoutLogin/SignupForm";
import Dashboard from "../components/Page/Dashboard";
import Device from "../components/Page/Device";
import GrantNumber from "../components/Page/GrantNumber";
import Personalinformation from "../components/Page/Personalinformation";
import Report from "../components/Page/Report";
import Service from "../components/Page/Service";
import SystemInstallation from "../components/Page/SystemInstallation";
import AddDevice from "../components/Page/tableDevice/AddDevice";
import ChitietDevice from "../components/Page/tableDevice/ChitietDevice";
import UpdateDevice from "../components/Page/tableDevice/UpdateDevice";
import Capsonew from "../components/Page/tableGrantNumber/Capsonew";
import ChitietCapso from "../components/Page/tableGrantNumber/ChitietCapso";
import AddService from "../components/Page/tableService/AddService";
import DetailService from "../components/Page/tableService/DetailService";
import UpdateService from "../components/Page/tableService/UpdateService";

export const RouteLogin = [
    {path: '/', element: <LoginForm/>},
    {path: '/forgotpassword', element: <ForgotPassword/>},
    {path: '/signupForm', element: <SignupForm/>},
];
export const RouteHome = [
    {path: '/dashboard', element: <Dashboard/>},
    {path: '/device', element: <Device/>},
    {path: '/service', element: <Service/>},
    {path: '/grantNumber', element: <GrantNumber/>},
    {path: '/report', element: <Report/>},
    {path: '/systemInstallation', element: <SystemInstallation/>},
    {path: '/personalinformation', element: <Personalinformation/>},
    {path: '/adddevice', element: <AddDevice/>},
    {path: '/chitietdevice', element: <ChitietDevice/>},
    {path: '/updevice', element: <UpdateDevice/>},
    {path: '/addservice', element: <AddService/>},
    {path: '/chitietservice', element: <DetailService/>},
    {path: '/capnhatservice', element: <UpdateService/>},
    {path: '/capsonew', element: <Capsonew/>},
    {path: '/chitietcapso', element: <ChitietCapso/>},
];
