import Personal from "./Personal";
import { CaretRightOutlined } from "@ant-design/icons";
import Danhsach from "./tableReport/Danhsach";
import { DatePicker, DatePickerProps, Space } from "antd";
import '../../css/Report/danhsachreport.css';
const Report = () => {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };
    return ( <>
    <div className="report">
      <div className="navtop">
        <div className="textnavtop">
          <span>Báo cáo</span>
          <CaretRightOutlined style={{marginLeft: '1px'}}/>
          <span style={{marginLeft: '20px'}}
          >Lập báo cáo</span>
        </div>
       <Personal/>
      </div>
    <div className="container">
      <div className="chontgbaocao">
        <p>Chọn thời gian</p>
        <Space direction="vertical">
          <DatePicker onChange={onChange} />
        </Space>
        <CaretRightOutlined />
        <Space direction="vertical">
          <DatePicker onChange={onChange} />
        </Space>
      </div>
    </div>
    <Danhsach/>
    </div>
    </> );
}
 
export default Report;