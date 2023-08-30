import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import Notification from "../../assets/notification.png";
import '../../css/info.css';
import { useState } from "react";
import { Modal } from "antd";
const Personal = () => {
   const user = localStorage.getItem("user")
   if(user){
      var account = JSON.parse(user)
   }
   const [modal1Open, setModal1Open] = useState(false);
 return ( 
   <div className="cssthongtin">
    <img 
    src={Notification} 
    className="anhthongtin" 
    alt="" 
    onClick={() => setModal1Open(true)}
    />
    <Link to="/personalinformation" className="link-style">
    <div className="thongtin">
    <div className="avatar">
        <img src={avatar} alt="" />
     </div>
    <div className="textthongtin">
      <span>Xin chào</span>
      <span 
      style={{
         display: 'block',
         fontSize: '16px',
         fontWeight: '700',
         lineHeight: '24px'
      }}
      >
      {account.ht}
      </span>
     </div>
   </div>
   </Link>
   <Modal
        title="20px to Top"
        style={{ top: 20 }}
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
   </div>
   );
}
 
export default Personal;