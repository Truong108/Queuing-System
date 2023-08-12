import Personal from "./Personal";
import '../../css/dashboard.css';
import '../../css/device.css';
import { CaretRightOutlined } from "@ant-design/icons";
const Device = () => {
  return ( 
  <div className="thietbi">
    <div className="navtop">
    <div className="textnavtop">
     <span>Thiết bị</span>
     <CaretRightOutlined  style={{marginLeft: '1px'}}/>
    <span style={{marginLeft: '20px'}}
    >Danh sách thiết bị</span>
    </div>
     <Personal/>
    </div>
    <h2 className="subheading">Danh sách thiết bị</h2>
  </div> 
  );
}
 
export default Device;