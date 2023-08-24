import { CaretRightOutlined } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Link, useNavigate } from "react-router-dom";
import Personal from "../../Personal";
import '../../../../css/SettingHeThong/vaitro.css';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addVaitro } from "../../../../redux/SettingVaitro/vaitroSlice";
import { addNhatky } from "../../../../redux/SettingNhatky/nhatkySlice";
const Themvaitro = () => {
  const user = localStorage.getItem("user")
  const time = new Date()
  if(user){
    var account = JSON.parse(user)
  }
  const dispatch = useDispatch()
  const [dataInfo, setDataInfo]= useState({
      tenvt: "",
      sond: "5",
      mota: "",
      cn: "",
  })
  const nhatKi = ({
    ipthuchien:"192.168.3.1",
    tendn: account.ht,
    tgtacdong: time.toLocaleString(),
    thaotacth: `Thêm vai trò ${dataInfo.tenvt}`
  })
  const navigate = useNavigate()
  const handleAdd = async () =>{
      await dispatch(addVaitro(dataInfo) as any)
      await dispatch(addNhatky(nhatKi) as any)
      navigate("/systemInstallation")
  }
    return ( <>
    <div className="themdevice">
     <div className="navtopp">
      <div className="textnavtop">
       <span>Cài đặt hệ thống</span>
    <CaretRightOutlined  style={{marginLeft: '1px'}}/>
    <Link to="/systemInstallation" style={{textDecoration: 'none'}}>
    <span style={{marginLeft: '20px', color: '#7E7D88'}}
     >Quản lý vai trò</span>
    </Link>
     <CaretRightOutlined  style={{marginLeft: '1px'}}/>
    <span style={{marginLeft: '20px'}}
     >Thêm vai trò</span>
    </div>
      <Personal/>
    </div>
   </div>
   <div className="totaladdvaitro">
   <h2 className="dsvaitro">Danh sách vai trò</h2>
   <table className="bangvaitro">
  <div className="containerThemvaitro">
   <div style={{marginTop: '20px'}}
   className="row">
     <h4 className="thongtintb">Thông tin vai trò</h4>
    <div className="col-md-6">
      <label htmlFor="inputEmail4" className="tenvaitro">Tên vai trò*</label>
      <Input 
        placeholder="Nhập tên vai trò"
        className="form-matb"
        onChange={(e) => setDataInfo((prev)=>({...prev, tenvt:e.target.value}))}
      />
    </div>
    <div className="col-md-6 input-container">
      <label htmlFor="inputEmail4" className="motavaitro">Mô tả:</label>
      <TextArea
      className="textinput"
        placeholder="Nhập mô tả"
        autoSize={{ minRows: 5}}
        style={{ width: '190%', maxWidth: '600px' }}
        onChange={(e) => setDataInfo((prev)=>({...prev, mota:e.target.value}))}
      />
    </div>
    <p className="thongtinbb">* Là trường thông tin bắt buộc</p>
  </div>
   <div style={{marginTop: '60px'}}
   className="row">
   <h4 className="phanquyen">Phần quyền chức năng
   <span
   style={{ 
    color: '#FF4747', 
    paddingBottom: '10px',
    marginLeft: '10px'
    }}  
   >*</span>
   </h4>
   <div className="totalrow">
   <div className="row">
   <p className="nhomcn">Nhóm chức năng A</p>
    <div className="cbox">
      <Space>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Tất cả
          </label>
        </div>
        </Space>
      </div>
      <div className="cbox">
      <Space>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Chức năng x
          </label>
        </div>
        </Space>
      </div>
      <div className="cbox">
      <Space>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Chức năng y
          </label>
        </div>
        </Space>
      </div>
      <div className="cbox">
      <Space>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Chức năng y
          </label>
        </div>
        </Space>
      </div>
   </div>
   <div className="row">
   <p className="nhomcn">Nhóm chức năng B</p>
    <div className="cbox">
      <Space>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Tất cả
          </label>
        </div>
        </Space>
      </div>
      <div className="cbox">
      <Space>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Chức năng x
          </label>
        </div>
        </Space>
      </div>
      <div className="cbox">
      <Space>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Chức năng y
          </label>
        </div>
        </Space>
      </div>
      <div className="cbox">
      <Space>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Chức năng z
          </label>
        </div>
        </Space>
      </div>
   </div>
   </div>
   </div>
   </div>
   </table>
   <Space wrap 
   style={{ 
    marginTop: '30px', 
    marginLeft: '530px'
    }}>
   <Link to="/systemInstallation">
   <Button danger className="huybo">Hủy bỏ</Button>
   </Link>
    <Button danger className="nutaddtb"
    style={{color: '#FFF', marginLeft: '25px'}}
    onClick={handleAdd}
    >Thêm</Button>
    </Space>
   </div>
    </> );
}
 
export default Themvaitro;