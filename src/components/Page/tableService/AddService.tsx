import { CaretRightOutlined } from "@ant-design/icons";
import Personal from "../Personal";
import { Link } from "react-router-dom";
import '../../../css/Device/danhsachtb.css';
import { Button, Input, InputNumber, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import '../../../css/Service/addService.css';

const AddService = () => {
    return ( <>
    <div className="themdevice">
     <div className="navtopp">
      <div className="textnavtop">
       <span>Dịch vụ</span>
    <CaretRightOutlined  style={{marginLeft: '1px'}}/>
    <Link to="/service" style={{textDecoration: 'none'}}>
    <span style={{marginLeft: '20px', color: '#7E7D88'}}
     >Danh sách dịch vụ</span>
    </Link>
     <CaretRightOutlined  style={{marginLeft: '1px'}}/>
    <span style={{marginLeft: '20px'}}
     >Thêm dịch vụ</span>
    </div>
      <Personal/>
    </div>
   </div>
   <div className="totaladdtb">
   <h2 className="tieudetb">Quản lý dịch vụ</h2>
   <table className="bangthongtin">
    <h4 className="thongtintb">Thông tin dịch vụ</h4>
  <div className="containerThemtb">
   <div className="row">
    <div className="col-md-6">
      <label htmlFor="inputEmail4" className="text-matb">Mã dịch vụ:*</label>
      <Input 
        placeholder="201"
        className="form-matb"
      />
    </div>
    <div className="col-md-6">
      <label htmlFor="inputEmail4" className="text-matb">Tên dịch vụ:*</label>
      <Input 
        placeholder="Khám tim mạch"
        className="form-matb"
      />
    </div>
  </div>
  <div className="row">
  <div className="col-md-6 input-container">
      <label htmlFor="inputEmail4" className="text-matb">Mô tả:</label>
      <TextArea
      className="textinput"
        placeholder="Mô tả dịch vụ"
        autoSize={{ minRows: 5}}
        style={{ width: '190%', maxWidth: '600px' }}
      />
    </div>
  </div>
   </div>
   <h4 className="thongtintb">Quy tắc cấp số</h4>
   <div className="checkbox">
        <Space>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Tăng tự động từ:
          </label>
        </div>
          <Space>
            <InputNumber min={0} defaultValue={0} />
            <span>Đến</span>
          <InputNumber max={9999} defaultValue={9999} />
          </Space>
        </Space>
      </div>
      <div className="checkbox">
        <Space>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Prefix:
          </label>
        </div>
      <InputNumber className="inputadd" min={0} defaultValue={0} />
        </Space>
      </div>
      <div className="checkbox">
        <Space>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Surfix:
          </label>
        </div>
        <InputNumber className="inputadd" min={0} defaultValue={0} />
        </Space>
      </div>
      <div className="checkbox">
        <Space>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Reset mỗi ngày
          </label>
        </div>
        </Space>
      </div>
    <p className="thongtinbb">* Là trường thông tin bắt buộc</p>
   </table>
   <Space wrap 
   style={{ 
    marginTop: '30px', 
    marginLeft: '530px'
    }}>
   <Link to="/service">
   <Button danger className="huybo">Hủy bỏ</Button>
   </Link>
    <Button danger className="nutaddtb"
    style={{color: '#FFF', marginLeft: '25px'}}
    >Thêm dịch vụ</Button>
    </Space>
   </div>
    </> 
  );
}
 
export default AddService;