import Personal from "./Personal";
import '../../css/dashboard.css';
import { CaretRightOutlined } from "@ant-design/icons";
const SystemInstallation = () => {
    return ( <>
     <div className="navtop">
        <div className="textnavtop">
          <span>Cài đặt hệ thống</span>
          <CaretRightOutlined style={{marginLeft: '1px'}}/>
          <span style={{marginLeft: '20px'}}
          >Quản lý vai trò</span>
        </div>
       <Personal/>
      </div>
    </> );
}
 
export default SystemInstallation;