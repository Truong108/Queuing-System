import Personal from "./Personal";
import '../../css/dashboard.css';
import { CaretRightOutlined } from "@ant-design/icons";
const Service = () => {
    return ( <>
     <div className="navtop">
        <div className="textnavtop">
          <span>Dịch vụ</span>
          <CaretRightOutlined style={{marginLeft: '1px'}}/>
          <span style={{marginLeft: '20px'}}
          >Danh sách Dịch vụ</span>
        </div>
       <Personal/>
      </div>
    </> );
}
 
export default Service;