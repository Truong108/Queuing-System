import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import Notification from "../../assets/notification.png";
import '../../css/info.css';
const Personal = () => {
 return ( 
   <div className="cssthongtin">
    <img src={Notification} className="anhthongtin" alt="" />
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
      Lê Thị Quỳnh Vân
      </span>
     </div>
   </div>
   </Link>
   </div>
   );
}
 
export default Personal;