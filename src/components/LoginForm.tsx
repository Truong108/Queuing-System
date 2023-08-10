import loginImg from '../assets/Group.png';
import Group from '../assets/group2.png';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import '../css/style.css'
import { Button, Space, notification } from 'antd';
import { NotificationPlacement } from 'antd/es/notification/interface';

const LoginForm: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: `Lỗi Đăng nhập`,
      description:
        'Lỗi sai tên tài khoản mật khẩu!',
      placement,
    });
  };
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
 
  const [tendangnhap, setTendangnhap] = useState<string>('');
  const [password, setPassword] = useState<string>('');
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
              <form style={{ width: '25rem' }}>
              <div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="email">
                    Tên đăng nhập *
                  </label>
                  <input
                    type="email"
                    id="form2Example18"
                    className="form-control form-control-lg"
                    value={tendangnhap}
                    onChange={(e) => setTendangnhap(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="password">
                    Mật khẩu *
                  </label>
                  <div className={`input-group ${showPassword ? 'show-password' : ''}`}>
                    <div className="input-container">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        className={`form-control form-control-lg ${showPassword ? 'show-password' : ''}`}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        className={`btn btn custom-button ${showPassword ? 'show-password' : ''}`}
                        type="button"
                        onClick={toggleShowPassword}
                      >
                        {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
                <p className="small mb-5 pb-lg-2">
                  <a className="text-muted" href="#!"
                  style={{ textDecoration: 'none' }}>
                    Quên mật khẩu?
                  </a>
                </p>
                {contextHolder}
               <div className='logincontainer'>
               <div className="buttonlogin">
                <Space wrap>
                  <Button
                  onClick={() => openNotification('top')}
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
