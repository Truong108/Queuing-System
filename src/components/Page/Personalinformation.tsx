import Personal from "./Personal";
import Info from '../../assets/thongtincanhan.png';
import '../../css/dashboard.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
const Dashboard = () => {

  const user = localStorage.getItem("user")
  if(user){
    var account = JSON.parse(user)
  }
    return ( 
    <>
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
       <p className="ten"></p>
    </div>
    <form className="container">
    <div className="row">
        <div className="col-md-4">
            <label htmlFor="inputEmail1" className="form-info">Tên người dùng</label>
            <input 
            value={account.ht}
            type="email" 
            className="form-control" 
            style={{
              marginLeft: '89px',
              width: '350px',
              height: '45px',
              marginTop: '10px'
          }}
            id="inputEmail1"
            
            readOnly
            />
        </div>
        <div className="col-md-4">
            <label htmlFor="inputPassword1" className="form-info">Tên đăng nhập</label>
            <input 
            value={account.tendn}
            type="email" 
            className="form-control" 
            style={{
              marginLeft: '89px',
              width: '350px',
              height: '45px',
              marginTop: '10px'
          }}
              id="inputEmail1"
              readOnly
            />
        </div>
        <div className="col-md-4">
            <label htmlFor="inputEmail2" className="form-info">Số điện thoại</label>
            <input 
            value={account.sodt}
            type="email" 
            className="form-control" 
            style={{
              marginLeft: '89px',
              width: '350px',
              height: '45px',
              marginTop: '10px'
          }}
            id="inputEmail2"
        
            readOnly
            />
        </div>
    </div> 

    <div className="row"> 
        <div className="col-md-4">
            <label htmlFor="inputPassword2" className="form-info">Mật khẩu</label>
            <input 
            value={account.mk}
            type="email" 
            className="form-control" 
            style={{
              marginLeft: '89px',
              width: '350px',
              height: '45px',
              marginTop: '10px'
          }}
            id="inputEmail2"
            readOnly
            />
        </div>
        <div className="col-md-4">
            <label htmlFor="inputEmail3" className="form-info">Email</label>
            <input 
            value={account.mail}
            type="email" 
            className="form-control" 
            style={{
              marginLeft: '89px',
              width: '350px',
              height: '45px',
              marginTop: '10px'
          }}
            id="inputEmail3"
           
            readOnly 
            />
        </div>
        <div className="col-md-4">
            <label htmlFor="inputPassword3" className="form-info">Vai trò</label>
            <input 
            value={account.vt}
            type="text" 
            className="form-control" 
            style={{
              marginLeft: '89px',
              width: '350px',
              height: '45px',
              marginTop: '10px'
          }}
            id="inputPassword3"
           
            readOnly
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