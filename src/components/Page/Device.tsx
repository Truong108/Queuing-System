import Personal from "./Personal";
import '../../css/dashboard.css';
import '../../css/device.css';
import { CaretRightOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Select, Space } from "antd";
import Danhsach from "./tableDevice/Danhsach";
import { useState } from "react";
const Device = () => {
  const [statusActive, setStatusActive]  = useState<string>("Tất cả")
  const [statusCornect, setStatusCornect] = useState<string>("Tất cả")
  const [text, setText] = useState<string>("")
  console.log(text);
 
  return ( 
  <div className="thietbi">
    <div className="navtopp">
    <div className="textnavtop">
     <span>Thiết bị</span>
     <CaretRightOutlined  style={{marginLeft: '1px'}}/>
    <span style={{marginLeft: '20px'}}
    >Danh sách thiết bị</span>
    </div>
     <Personal/>
    </div>
    <h2 className="subheading">Danh sách thiết bị</h2>
    <div className="container">
      <div className="trangthaihd">
      <p>Trạng thái hoạt động</p>
      <Space wrap> 
      <Select
        defaultValue="Tất cả"
        style={{ width: 350, marginLeft: '-2px' }}
        onChange={(e) => setStatusActive(e)}
        options={[
          { value: 'Tất cả', label: 'Tất cả' },
          { value: 'Hoạt động', label: 'Hoạt động' },
          { value: 'Ngưng hoạt động', label: 'Ngưng hoạt động' }
        ]}
      />
       </Space>
      </div>
      <div className="trangthaikn">
        <p>Trạng thái kết nối</p>
        <Space wrap> 
      <Select
        defaultValue="Tất cả"
        style={{ width: 350, marginLeft: '-2px' }}
        onChange={(e) => setStatusCornect(e)}
        options={[
          { value: 'Tất cả', label: 'Tất cả' },
          { value: 'Kết nối', label: 'Kết nối' },
          { value: 'Mất kết nối', label: 'Mất kết nối' }
        ]}
      />
       </Space>
      </div>
      <div className="tukhoa">
        <p>Từ khóa</p>
        <nav className="navbar">
        <div className="container-fluid">
          <form className="d-flex" role="search">
          <div className="input-container">
          <Input
            className="form-control"
            placeholder="Nhập từ khóa"
            aria-label="Search"
            suffix={<SearchOutlined 
            style={{color: '#FF7506'}}
            />}
            onChange={(e)=> setText(e.target.value)}
          />

        </div>
          </form>
        </div>
      </nav>
      </div>
    </div>
    <Danhsach text={text} statusActive={statusActive} statusCornect={statusCornect}/>
  </div> 
  );
}
 
export default Device;