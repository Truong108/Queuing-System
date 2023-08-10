import loginImg from '../assets/Group.png';
import Group from '../assets/group2.png';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import '../css/style.css'

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
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
              <form style={{ width: '28rem' }}>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form2Example18">
                    Tên đăng nhập *
                  </label>
                  <input type="email" id="form2Example18" className="form-control form-control-lg" />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form2Example28">
                    Mật khẩu *
                  </label>
                  <div className={`input-group ${showPassword ? 'show-password' : ''}`}>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="form2Example28"
                      className={`form-control form-control-lg ${showPassword ? 'show-password' : ''}`}
                    />
                  <button
                  className={`btn btn-secondary custom-button ${showPassword ? 'show-password' : ''} ${showPassword ? 'white-background' : ''}`}
                  type="button"
                  onClick={toggleShowPassword}
                  >
                    {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                  </button>
                  </div>
                </div>
                <p className="small mb-5 pb-lg-2">
                  <a className="text-muted" href="#!"
                  style={{ textDecoration: 'none' }}>
                    Quên mật khẩu?
                  </a>
                </p>
                <div className="pt-1 mb-4 buttonlogin">
                  <button className="maubtlogin" type="button">
                    Đăng nhập
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
          <div style={{width: '848px', textAlign: 'center', paddingTop: '200px'}}>
          <h1>Hệ thống</h1>
          <img src={Group} alt="login"/>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
