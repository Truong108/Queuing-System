import loginImg from '../assets/Group.png';
import Group from '../assets/group2.png';
import React, {  } from 'react';
import '../css/style.css'
import { Button, Space } from 'antd';

const LoginForm: React.FC = () => {

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
              <h3 className="fw-normal mb-3 pb-3">Đặt lại mật khẩu</h3>
              <div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="email">
                   Vui lòng nhập email để đặt lại mật khẩu của bạn *
                  </label>
                  <input
                    type="email"
                    id="form2Example18"
                    className="form-control form-control-lg"
                  />
                </div>
              </div>
                <p className="small mb-5 pb-lg-2">
                  <a className="text-muted" href="#!"
                  style={{ textDecoration: 'none' }}>
                    Quên mật khẩu?
                  </a>
                </p>
               <div className='logincontainer'>
               <div className="buttonlogin">
                <Space wrap>
                  <Button className='dangnhap'>Đăng nhập</Button>
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
