import { CaretRightOutlined } from "@ant-design/icons";
import Personal from "../Personal";
import { Link, useNavigate } from "react-router-dom";
import '../../../css/Device/danhsachtb.css';
import { Button, Input, Space } from "antd";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addDevice } from "../../../redux/Device/deviceSlice";

const AddDevice = () => {
    const dispatch = useDispatch()
    const [dataInfo, setDataInfo]= useState({
        matb: "",
        tentb: "",
        dcip: "",
        trangthai: "",
        trangthaikn: "",
        dichvu: "",
        chitiet: "",
        capnhat: "",
    })
    const navigate = useNavigate()
    const handleAdd = async () =>{
        await dispatch(addDevice(dataInfo) as any)
        navigate("/device")
    }
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
   <h2 className="tieudetb">Quản lý thiết bị</h2>
   <table className="bangthongtin">
    <h4 className="thongtintb">Thông tin thiết bị</h4>
  <div className="containerThemtb">
  <div className="row">
    <div className="col-md-4">
        <label htmlFor="inputEmail4" className="text-chitiet">Mã thiết bị:*</label>
        <Input 
            placeholder="Nhập mã thiết bị"
            className="form-tb"
            onChange={(e) => setDataInfo((prev)=>({...prev, matb:e.target.value}))}
        />
    </div>
    <div className="col-md-4">
        <label htmlFor="inputEmail4" className="text-chitiet">Tên thiết bị:*</label>
        <Input 
            placeholder="Nhập tên thiết bị"
            className="form-tb"
            onChange={(e) => setDataInfo((prev)=>({...prev, tentb:e.target.value}))}
        />
    </div>
    <div className="col-md-4">
        <label htmlFor="inputEmail4" className="text-chitiet">Địa chỉ IP:*</label>
        <Input 
            placeholder="Nhập địa chỉ IP"
            className="form-tb"
            onChange={(e) => setDataInfo((prev)=>({...prev, dcip:e.target.value}))}
        />
    </div>
  </div>
  <div className="row">
  <div className="col-md-4">
        <label className="text-chitiet">Loại thiết bị:*</label>
        <select 
            className="form-select" 
            aria-label="Default select example" 
            style={{ width: '288%' }}
        >
            <option value="" disabled selected hidden>Chọn thiết bị</option>
            <option value="1">Kiosk</option>
            <option value="2">Display counter</option>
        </select>
    </div>
    <div className="col-md-4">
        <label htmlFor="inputPassword4" className="text-chitiet">Tên đăng nhập:*</label>
        <Input 
            placeholder="Nhập tài khoản"
            className="form-tb"
        />
    </div>
    <div className="col-md-4">
        <label htmlFor="inputPassword4" className="text-chitiet">Mật khẩu:*</label>
        <Input 
            placeholder="Nhập mật khẩu"
            className="form-tb"
        />
    </div>
  </div>
   <div className="row">
    <div className="col-md-6">
      <label htmlFor="inputPassword4" className="text-add">Dịch vụ sử dụng:*</label>
      <Input 
        placeholder="Nhập dịch vụ sử dụng"
        className="form-inputt"
        onChange={(e) => setDataInfo((prev)=>({...prev, dichvu:e.target.value}))}
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
    <Button danger className="nutaddtb" onClick={handleAdd}
    style={{color: '#FFF', marginLeft: '25px'}}
    >Thêm thiết bị</Button>
    </Space>
   </div>
    </> 
  );
}
 
export default AddDevice;