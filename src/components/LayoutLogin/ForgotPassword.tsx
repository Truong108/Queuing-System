import loginImg from '../../assets/Group.png';
import Matkhau from '../../assets/datlaimk.png';
import React, {  } from 'react';
import '../../css/style.css'
import { Button, Space } from 'antd';
import { Link } from 'react-router-dom';

const ForgotPassword: React.FC = () => {

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
            <div className='formdangky'>
            <h2 className='forgottieude'>
              Đặt lại mật khẩu
            </h2>
              <form style={{ width: '33rem' }}>
              <div>
                <div className="form-outline mb-4">
                  <label 
                  className="form-label forgot" 
                  htmlFor="email">
                   Vui lòng nhập email để đặt lại mật khẩu của bạn *
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                  />
                </div>
              </div>
              <div>
              <div className="button-group">
                <Space style={{
                  marginLeft: '40px',
                  width: '162px',
                  height: '40px',
                  marginRight: '80px'
                }}>
                  <Link to="/">
                  <Button className='huy' danger>Hủy</Button>
                  </Link>
                </Space>
                <Space style={{
                  width: '162px',
                  height: '40px',
                }}>
                <Link to="/signupForm">
                  <Button className='tieptuc'>Tiếp tục</Button>
                </Link>
                </Space>
              </div>
            </div>
              </form>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block imgforgot">
          <div className="header-container"
          style={{
            width: '820px', 
            textAlign: 'center', 
            paddingTop: '200px'
            }}>
          <div className="container">
            <img src={Matkhau} alt="forgot"/>
          </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
