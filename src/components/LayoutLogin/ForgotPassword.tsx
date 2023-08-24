import loginImg from '../../assets/Group.png';
import Matkhau from '../../assets/datlaimk.png';
import React, { useState } from 'react';
import '../../css/style.css'
import { Button, Space, Spin, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate(); 
  const [userEmail, setUseremail] = useState<string>("");
  const [spiner, setSpinner] = useState<boolean>(false)
  const OnchaneHandleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUseremail(e.target.value);
  };
  const dataForgot = useSelector((state: RootState) => state.account.account);
  const onchangeForgot = () => {
    let validCredentials = false;

    dataForgot.forEach((item) => {
      if (userEmail === item.mail) {
        validCredentials = true;
      }
    });
    if (validCredentials) {
      setSpinner(true);
      setTimeout(() => {
        navigate('/signupForm');
      }, 3000);  
    } else {
      message.error('Email không đúng vui lòng nhập lại!');
    }
  };
  return (
    <section className="vh-100">
      <link rel="icon" href="img/mdb-favicon.ico" type="image/x-icon" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" />
      <Spin tip="Đang kiểm tra email..." spinning={spiner}>
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
                    onChange={OnchaneHandleEmail}
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
                  <Button className='tieptuc'
                  onClick={onchangeForgot}
                  >Tiếp tục</Button>
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
      </Spin>
    </section>
  );
};

export default ForgotPassword;
