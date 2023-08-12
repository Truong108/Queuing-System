import loginImg from '../../assets/Group.png';
import Group from '../../assets/group2.png';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import '../../css/style.css';
import { Button, Input, Space, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { fetchData } from '../../redux/authSlice';

const LoginForm: React.FC = () => {
  const [loginAttempted, setLoginAttempted] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); 
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate(); 
  const [userName, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dataLogin = useSelector(
    (state: RootState) => state.auth.dataLogin
  );
  const OnchaneHandleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    setLoginError(false); // Reset lỗi khi thay đổi tên đăng nhập
  };
  const OnchaneHandlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setLoginError(false); // Reset lỗi khi thay đổi mật khẩu
  };
  const onchangeLogin = () => {
    if (!loginAttempted) {
      setLoginAttempted(true);
      const matchingUser = dataLogin.map(
        (item: { tendn: string; mk: string }) =>
          userName === item.tendn && password === item.mk
      );
      if (matchingUser) {
        if (!loggedIn) {
          message.success('Đăng nhập thành công');
          setLoggedIn(true);
        }
        navigate("/dashboard"); // Chuyển trang ngay sau khi đăng nhập thành công
      } else {
        message.error("Tên đăng nhập hoặc mật khẩu không đúng");
        setLoginError(true);
      }
    } else {
      message.error("Tên đăng nhập hoặc mật khẩu không đúng");
      setLoginError(true);
    }
  };
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  console.log(dataLogin);
  return (
    <section className="vh-100">
      <link rel="icon" href="img/mdb-favicon.ico" type="image/x-icon" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black formdn">
            <div className="px-5 ms-xl-4" style={{ textAlign: 'center', marginTop: '150px' }}>
            <img src={loginImg} alt="login"/>
            </div>
            <div className='formdangnhap'>
              <form style={{ width: '30rem' }}>
              <div>
                <div className="form-outline mb-4">
                  <label 
                  style={{float: 'left'}}
                  className="form-label" 
                  htmlFor="email">
                    Tên đăng nhập *
                  </label>
                  <Input
                    onChange={OnchaneHandleUserName}
                    size="large"
                    className={loginError ? 'error-input' : ''}
                    placeholder="Tên đăng nhập"
                  />
                </div>
                <div className="form-outline mb-4">
                  <label 
                  className="form-label" 
                  htmlFor="password">
                    Mật khẩu *
                  </label>
                  <div className="input-group">
                  <Input.Password
                    className={loginError ? 'error-input' : ''}
                    onChange={OnchaneHandlePassword}
                    size="large"
                    placeholder="Mật khẩu đăng nhập"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  />
                  </div>
                </div>
              </div>
                <p className="small mb-5 pb-lg-2">
                <Link 
                to="/forgotPassword" 
                className="text-muted"
                style={{ 
                textDecoration: 'none' 
                }}>
                Quên mật khẩu?
                </Link>
                </p>
               <div className='logincontainer'>
               <div className="buttonlogin">
                <Space wrap>
                <Button 
                 onClick={onchangeLogin}
                className='dangnhap'>Đăng nhập</Button>
                </Space>
                </div>
               </div>
              </form>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
          <div className="header-container"
          style={{
            width: '820px', 
            textAlign: 'center', 
            paddingTop: '200px'
            }}>
          <div className="container">
            <h3>Hệ Thống</h3>
            <h1>Quản lý xếp hàng</h1>
            <img src={Group} alt="login"/>
          </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;