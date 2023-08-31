import ForgotPassword from "../components/LayoutLogin/ForgotPassword";
import LoginForm from "../components/LayoutLogin/LoginForm";
import SignupForm from "../components/LayoutLogin/SignupForm";
import Account from "../components/Page/Account";
import Dashboard from "../components/Page/Dashboard";
import Device from "../components/Page/Device";
import Diary from "../components/Page/Diary";
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
import AddAccount from "../components/Page/tableHeThong/Taikhoan/AddAccount";
import UpdateAccount from "../components/Page/tableHeThong/Taikhoan/UpdateAccount";
import Addvaitro from "../components/Page/tableHeThong/Vaitro/Addvaitro";
import Capnhatvaitro from "../components/Page/tableHeThong/Vaitro/Upvaitro";
import AddService from "../components/Page/tableService/AddService";
import DetailService from "../components/Page/tableService/DetailService";
import UpdateService from "../components/Page/tableService/UpdateService";

export const RouteLogin = [
    {path: '/', element: <LoginForm/>},
    {path: '/forgotpassword', element: <ForgotPassword/>},
    {path: '/signupForm/:id', element: <SignupForm/>},
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
    {path: '/chitietdevice/:id', element: <ChitietDevice/>},
    {path: '/updevice/:id', element: <UpdateDevice/>},
    {path: '/addservice', element: <AddService/>},
    {path: '/chitietservice/:id', element: <DetailService/>},
    {path: '/capnhatservice/:id', element: <UpdateService/>},
    {path: '/capsonew', element: <Capsonew/>},
    {path: '/chitietcapso/:id', element: <ChitietCapso/>},
    {path: '/themvaitro', element: <Addvaitro/>},
    {path: '/upvaitro/:id', element: <Capnhatvaitro/>},
    {path: '/quanlytaikhoan', element: <Account/>},
    {path: '/uptaikhoan/:id', element: <UpdateAccount/>},
    {path: '/addtaikhoan', element: <AddAccount/>},
    {path: '/nhatky', element: <Diary/>},
];
