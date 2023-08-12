import Personal from "./Personal";
import '../../css/dashboard.css';
import { CaretRightOutlined } from "@ant-design/icons";
const Report = () => {
    return ( <>
      <div className="navtop">
        <div className="textnavtop">
          <span>Báo cáo</span>
          <CaretRightOutlined style={{marginLeft: '1px'}}/>
          <span style={{marginLeft: '20px'}}
          >Lập báo cáo</span>
        </div>
        <Personal/>
      </div>
    </> );
}
 
export default Report;