import Personal from "./Personal";
import '../../css/dashboard.css';
import { CaretRightOutlined } from "@ant-design/icons";
const LevelNo = () => {
    return ( <>
     <div className="navtop">
        <div className="textnavtop">
          <span>Cấp số</span>
          <CaretRightOutlined style={{marginLeft: '1px'}}/>
          <span style={{marginLeft: '20px'}}
          >Danh sách cấp số</span>
        </div>
       <Personal/>
      </div>
    </> );
}
 
export default LevelNo;