import { CaretRightOutlined } from "@ant-design/icons";
import Personal from "../Personal";
import { Link } from "react-router-dom";
import '../../../css/danhsachtb.css';
import { Button, Input, Space } from "antd";

const AddDevice = () => {
    return ( <>
    <div className="themdevice">
     <div className="navtopp">
      <div className="textnavtop">
       <span>Thiết bị</span>
    <CaretRightOutlined  style={{marginLeft: '1px'}}/>
    <Link to="/device" style={{textDecoration: 'none'}}>
    <span style={{marginLeft: '20px', color: '#7E7D88'}}
     >Danh sách thiết bị</span>
    </Link>
     <CaretRightOutlined  style={{marginLeft: '1px'}}/>
    <span style={{marginLeft: '20px'}}
     >Thêm thiết bị</span>
    </div>
      <Personal/>
    </div>
   </div>
   <div className="totaladdtb">
   <h2 className="tieudetb">Quản lí thiết bị</h2>
   <table className="bangthongtin">
    <h4 className="thongtintb">Thông tin thiết bị</h4>
  <div className="containerThemtb">
   <div className="row">
    <div className="col-md-6">
      <label htmlFor="inputEmail4" className="text-label">Mã thiết bị:*</label>
      <Input 
        placeholder="Nhập mã thiết bị"
        className="form-input"
      />
    </div>
    <div className="col-md-6">
      <label className="text-label"
      style={{display: 'block'}}
      >Loại thiết bị:*</label>
     <select 
     className="form-select" 
     aria-label="Default select example" 
     style={{ width: '600px' }}>
     <option value="" disabled selected hidden>Chọn thiết bị</option>
     <option value="1">Kiosk</option>
     <option value="2">Display counter</option>
     </select>
    </div>
  </div>
   <div className="row">
   <div className="col-md-6">
      <label htmlFor="inputEmail4" className="text-label">Tên thiết bị:*</label>
      <Input 
        placeholder="Nhập tên thiết bị"
        className="form-input"
      />
    </div>
    <div className="col-md-6">
      <label htmlFor="inputPassword4" className="text-label">Tên đăng nhập:*</label>
      <Input 
        placeholder="Nhập tài khoản"
        className="form-input"
      />
    </div>
   </div>
   <div className="row">
    <div className="col-md-6">
      <label htmlFor="inputEmail4" className="text-label">Địa chỉ IP:*</label>
      <Input 
        placeholder="Nhập địa chỉ IP"
        className="form-input"
      />
    </div>
    <div className="col-md-6">
      <label htmlFor="inputPassword4" className="text-label">Mật khẩu:*</label>
      <Input 
        placeholder="Nhập mật khẩu"
        className="form-input"
      />
    </div>
   </div>
   <div className="row">
    <div className="col-md-6">
      <label htmlFor="inputPassword4" className="text-label">Dịch vụ sử dụng:*</label>
      <Input 
        placeholder="Nhập dịch vụ sử dụng"
        className="form-inputt"
      />
     </div>
    </div>
   </div>
    <p className="thongtinbb">* Là trường thông tin bắt buộc</p>
   </table>
   <Space wrap 
   style={{ 
    marginTop: '30px', 
    marginLeft: '530px'
    }}>
   <Link to="/device">
   <Button danger className="huybo">Hủy bỏ</Button>
   </Link>
    <Button danger className="nutaddtb"
    style={{color: '#FFF', marginLeft: '25px'}}
    >Thêm thiết bị</Button>
    </Space>
   </div>
    </> 
  );
}
 
export default AddDevice;