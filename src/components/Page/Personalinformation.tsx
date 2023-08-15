import Personal from "./Personal";
import Info from '../../assets/thongtincanhan.png';
import '../../css/dashboard.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
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
    <form className="container">
    <div className="row">
        <div className="col-md-4">
            <label htmlFor="inputEmail1" className="form-info">Tên người dùng</label>
            <input 
            type="email" 
            className="form-control" 
            style={{
              marginLeft: '89px',
              width: '350px',
              height: '45px',
              marginTop: '10px'
          }}
            id="inputEmail1"
            placeholder="Lê Quỳnh Ái Vân"
            />
        </div>
        <div className="col-md-4">
            <label htmlFor="inputPassword1" className="form-info">Tên đăng nhập</label>
            <input 
            type="password" 
            className="form-control" 
            style={{
              marginLeft: '89px',
              width: '350px',
              height: '45px',
              marginTop: '10px'
          }}
            id="inputPassword1"
            placeholder="lequynhaivan01"
            />
        </div>
        <div className="col-md-4">
            <label htmlFor="inputEmail2" className="form-info">Số điện thoại</label>
            <input 
            type="email" 
            className="form-control" 
            style={{
              marginLeft: '89px',
              width: '350px',
              height: '45px',
              marginTop: '10px'
          }}
            id="inputEmail2"
            placeholder="0767375921"
            />
        </div>
    </div> 

    <div className="row"> 
        <div className="col-md-4">
            <label htmlFor="inputPassword2" className="form-info">Mật khẩu</label>
            <input 
            type="password" 
            className="form-control" 
            style={{
              marginLeft: '89px',
              width: '350px',
              height: '45px',
              marginTop: '10px'
          }}
            id="inputPassword2"
            placeholder="311940211"
            />
        </div>
        <div className="col-md-4">
            <label htmlFor="inputEmail3" className="form-info">Email</label>
            <input 
            type="email" 
            className="form-control" 
            style={{
              marginLeft: '89px',
              width: '350px',
              height: '45px',
              marginTop: '10px'
          }}
            id="inputEmail3"
            placeholder="adminSSO1@domain.com"
            />
        </div>
        <div className="col-md-4">
            <label htmlFor="inputPassword3" className="form-info">Vai trò</label>
            <input 
            type="text" 
            className="form-control" 
            style={{
              marginLeft: '89px',
              width: '350px',
              height: '45px',
              marginTop: '10px'
          }}
            id="inputPassword3"
            placeholder="Kế toán"
            />
        </div>
    </div>
</form>


      </div>
      </div>
    </div>
    </> 
    );
}
 
export default Dashboard;