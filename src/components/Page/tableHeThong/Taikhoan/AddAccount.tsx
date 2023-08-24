import { CaretRightOutlined, EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Space } from "antd";
import Personal from "../../Personal";
import '../../../../css/SettingHeThong/uptaikhoan.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addAccount } from "../../../../redux/SettingTaikhoan/accountSlice";
import { addNhatky } from "../../../../redux/SettingNhatky/nhatkySlice";

const AddAccount = () => {
  const user = localStorage.getItem("user")
  const time = new Date()
  if(user){
    var account = JSON.parse(user)
  }
    const dispatch = useDispatch()
    const [dataAdd, setDataAdd]= useState({
        tendn: "",
        mk: "",
        ht: "",
        sodt: "",
        mail: "",
        tthd: "",
        vt: "",
        capnhat: "",
    })
    const nhatKi = ({
      ipthuchien:"192.168.3.1",
      tendn: account.ht,
      tgtacdong: time.toLocaleString(),
      thaotacth: `Thêm tài khoản ${dataAdd.tendn}`
    })
    const navigate = useNavigate()
    const handleAdd = async () =>{
        await dispatch(addAccount(dataAdd) as any)
        await dispatch(addNhatky(nhatKi) as any)
        navigate("/quanlytaikhoan")
    }
    return ( <>
    <div className="themdevice">
     <div className="navtopp">
      <div className="textnavtop">
       <span>Cài đặt hệ thống</span>
    <CaretRightOutlined  style={{marginLeft: '1px'}}/>
    <Link to="/quanlytaikhoan" style={{textDecoration: 'none'}}>
    <span style={{marginLeft: '20px', color: '#7E7D88'}}
     >Quản lý tài khoản</span>
    </Link>
     <CaretRightOutlined  style={{marginLeft: '1px'}}/>
    <span style={{marginLeft: '20px'}}
     >Thêm tài khoản</span>
    </div>
      <Personal/>
    </div>
   </div>
   <div className="totaladdtaikhoan">
   <h2 className="tieudetk">Quản lý tài khoản</h2>
   <table className="bangaddtaikhoan">
    <h4 className="thongtintk">Thông tin tài khoản</h4>
  <div className="containerThemtb">
  <div className="row">
    <div className="col-md-3">
        <label htmlFor="inputEmail4" className="text-chitiet">Họ tên:*</label>
        <Input 
            placeholder="Họ và Tên"
            className="form-tb"
            onChange={(e) => setDataAdd((prev)=>({...prev, ht:e.target.value}))}
        />
    </div>
    <div className="col-md-3">
        <label htmlFor="inputEmail4" className="text-chitiet">Số điện thoại:*</label>
        <Input 
            placeholder="Số điện thoại"
            className="form-tb"
            onChange={(e) => setDataAdd((prev)=>({...prev, sodt:e.target.value}))}
        />
    </div>
    <div className="col-md-3">
        <label htmlFor="inputEmail4" className="text-chitiet">Email:*</label>
        <Input 
            placeholder="Email"
            className="form-tb"
            onChange={(e) => setDataAdd((prev)=>({...prev, mail:e.target.value}))}
        />
    </div>
    <div className="col-md-3">
    <div className="col-md-3">
        <label className="text-chitiet">Vai trò:*</label>
        <select 
            className="form-select" 
            aria-label="Default select example" 
            style={{ width: '1608%' }}
            onChange={(e) => setDataAdd((prev)=>({...prev, vt:e.target.value}))}
        >
          <option value="" disabled selected hidden>Tất cả</option>
          <option value="Kế toán">Kế toán</option>
          <option value="Bác sĩ">Bác sĩ</option>
          <option value="Lễ tân">Lễ tân</option>
          <option value="Quản lý">Quản lý</option>
          <option value="Admin">Admin</option>
          <option value="Superadmin">Superadmin</option>
        </select>
    </div>
    </div>
  </div>
  <div className="row">
  <div className="col-md-3">
    <label htmlFor="inputPassword4" className="text-chitiet">Tên đăng nhập:*</label>
      <Input 
        placeholder="Tên đăng nhập"
        className="form-tb"
        onChange={(e) => setDataAdd((prev)=>({...prev, tendn:e.target.value}))}
        />
    </div>
    <div className="col-md-3"
     style={{marginLeft: '30px', marginTop: '20px'}}
    >
    <div className="form-outline mb-4">
    <label
        style={{
        fontWeight: 'bold'
        }}
        className="form-label"
        htmlFor="password">
        Mật khẩu *
    </label>
    <div className="input-group"  style={{ width: '400%' }}>
        <Input.Password
        size="large"
        placeholder="Mật khẩu"
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
      </div>
     </div>
    </div>
    <div className="col-md-3"
     style={{marginLeft: '30px', marginTop: '5px'}}
    >
    <div className="form-outline mb-4">
    <label
        style={{
        fontWeight: 'bold'
        }}
    className="form-label"
        htmlFor="password">
        Nhập lại mật khẩu *
    </label>
    <div className="input-group"  style={{ width: '400%' }}>
        <Input.Password
        size="large"
        placeholder="Nhập lại mật khẩu"
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        onChange={(e) => setDataAdd((prev)=>({...prev, mk:e.target.value}))}
      />
      </div>
     </div>
    </div>
    <div className="col-md-3" style={{marginTop: '-20px'}}>
    <label className="text-chitiet">Tình trạng:*</label>
      <select 
        className="form-select" 
        aria-label="Default select example" 
        style={{ width: '400%' }}
        onChange={(e) => setDataAdd((prev)=>({...prev, tthd:e.target.value}))}
        >
          <option value="" disabled selected hidden>Tất cả</option>
          <option value="Tất cả">Tất cả</option>
          <option value="Ngưng hoạt động">Ngưng hoạt động</option>
          <option value="Hoạt động">Hoạt động</option>
        </select>
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
   <Link to="/quanlytaikhoan">
   <Button danger className="huybo">Hủy bỏ</Button>
   </Link>
    <Button danger className="nutaddtb"
    style={{color: '#FFF', marginLeft: '25px'}}
    onClick={handleAdd}
    >Thêm</Button>
    </Space>
   </div>
    </> 
  );
}
 
export default AddAccount;