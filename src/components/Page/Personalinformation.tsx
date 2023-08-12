import Personal from "./Personal";
import Info from '../../assets/thongtincanhan.png';
import '../../css/dashboard.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Input } from "antd";
const Dashboard = () => {
    return ( <>
    <div className="infocanhan">
    <div className="navtoppp">
        <div className="textnavtop">
          <span>Thông tin cá nhân</span>
        </div>
        <Personal/>
      </div>
      <div className="totalform">
      <div className="formthongtin">
      <div className="avatars-container">
      <div className="avatars">
        <div className="avatar-image">
            <img src={Info} alt="Avatar" />
            <div className="camera-icon">
            <i className="bi bi-camera"></i>
            </div>
        </div>
       </div>
       <p className="ten">Lê Quỳnh Ái Vân</p>
    </div>
      <form className="row g-3">
        <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-labell">Tên người dùng</label>
            <Input 
            type="email" 
            className="form-control" 
            id="inputEmail4"
            style={{
              width: '70%',
              marginLeft: '90px'
            }}
            />
        </div>
        <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-labell">Tên đăng nhập</label>
            <Input 
            type="password" 
            className="form-control" 
            id="inputPassword4"
            style={{
                width: '70%',
                marginLeft: '90px'
              }}
            />
        </div>
        <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-labell">Số điện thoại</label>
            <Input 
            type="email" 
            className="form-control" 
            id="inputEmail4"
            style={{
                width: '70%',
                marginLeft: '90px'
              }}
            />
        </div>
        <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-labell">Mật khẩu</label>
            <Input 
            type="password" 
            className="form-control" 
            id="inputPassword4"
            style={{
                width: '70%',
                marginLeft: '90px'
              }}
            />
        </div>
        <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-labell">Email</label>
            <Input 
            type="email" 
            className="form-control" 
            id="inputEmail4"
            style={{
                width: '70%',
                marginLeft: '90px'
              }}
            />
        </div>
        <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-labell">Vai trò</label>
            <Input 
            type="password" 
            className="form-control" 
            id="inputPassword4"
            style={{
                width: '70%',
                marginLeft: '90px'
              }}
            />
        </div>
        </form>
      </div>
      </div>
    </div>
    </> 
    );
}
 
export default Dashboard;