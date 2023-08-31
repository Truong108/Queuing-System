import { useNavigate, useParams } from 'react-router-dom';
import loginImg from '../../assets/Group.png';
import Matkhau from '../../assets/datlaimk.png';
import '../../css/signup.css';
import { Button, Input, Space, Spin, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { fetchAccount } from '../../redux/SettingTaikhoan/accountReducer';
import { Account } from '../../Interface/Taikhoan';
import { updateAccount } from '../../redux/SettingTaikhoan/accountSlice';

const SignupForm = () => {
  const [dataInfo, setDataInfo] = useState<Account>({
    mk: "",
  })
  const [matkhau, setMatkhau] = useState<string>("");
  const [nhapLaiMatKhau, setNhapLaiMatKhau] = useState("");
  const {id} = useParams()
  const dispatch = useDispatch();
  const forgotLogin = useSelector((state: RootState) => state.account.account);
  const [spiner, setSpinner] = useState<boolean>(false);
  const navigate = useNavigate()
  const handleForgot = async () => {
    if (matkhau !== nhapLaiMatKhau) {
      message.error("Mật khẩu không khớp vui lòng nhập lại!");
      return;
    }
    const updatedData = { ...dataInfo, mk: matkhau };
    await dispatch(updateAccount(updatedData) as any);
    message.success(`Đổi mật khẩu thành công tài khoản ${dataInfo.mail}`);
    setSpinner(true);
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };
  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    const data = forgotLogin.find((item) => item.mail === id)
    setDataInfo(data!)
    dispatch(fetchAccount() as any);
  }, [dispatch, forgotLogin, id]);
    return ( <>
     <section className="vh-100">
      <link rel="icon" href="img/mdb-favicon.ico" type="image/x-icon" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black formdn">
            <div className="px-5 ms-xl-4" style={{ textAlign: 'center', marginTop: '150px' }}>
            <img src={loginImg} alt="login"/>
            </div>
            <Spin tip="Đang đổi mật khẩu..." spinning={spiner}>
            <div className='formdangky'>
            <h2 className='signupform'>
              Đặt lại mật khẩu mới
            </h2>
              <form style={{ width: '33rem' }}>
              <div>
              <div className="form-outline mb-4">
                  <label 
                  style={{
                  fontWeight: 'bold'
                  }}  
                  className="form-label" 
                  htmlFor="password">
                    Mật khẩu *
                  </label>
                  <div className="input-group">
                  <Input.Password
                    size="large"
                    placeholder="Mật khẩu"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    onChange={(e)=> setMatkhau(e.target.value)}
                  />
                  </div>
                </div>
                <div className="form-outline mb-4">
                  <label 
                   style={{
                    fontWeight: 'bold'
                    }}
                  className="form-label" 
                  htmlFor="password">
                   Nhập lại mật khẩu *
                  </label>
                  <div className="input-group">
                  <Input.Password
                    size="large"
                    placeholder="Nhập lại mật khẩu"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    onChange={(e) => setNhapLaiMatKhau(e.target.value)}
                  />
                  </div>
                </div>
              </div>
              <div>
              <div className="button-group">
                <Space style={{
                  width: '162px',
                  height: '40px',
                }}>
                  <Button className='xacnhan'
                  onClick={handleForgot}
                  >Xác nhận</Button>
                </Space>
              </div>
            </div>
              </form>
            </div>
            </Spin>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block signfrom">
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
    </> );
}
 
export default SignupForm;