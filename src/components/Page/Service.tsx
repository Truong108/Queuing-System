import Personal from "./Personal";
import '../../css/dashboard.css';
import { CaretRightOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Select, Space } from "antd";
import Danhsachdv from "./tableService/Danhsachdv";
const Service = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
    return ( <>
    <div className="thietbi">
      <div className="navtop">
        <div className="textnavtop">
          <span>Dịch vụ</span>
          <CaretRightOutlined style={{marginLeft: '1px'}}/>
          <span style={{marginLeft: '20px'}}
          >Danh sách Dịch vụ</span>
        </div>
       <Personal/>
      </div>
      <h2 className="subheading">Quản lý dịch vụ</h2>
    <div className="container">
      <div className="trangthaihd">
      <p>Trạng thái hoạt động</p>
      <Space wrap> 
      <Select
        defaultValue="Tất cả"
        style={{ width: 350, marginLeft: '-2px' }}
        onChange={handleChange}
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
        onChange={handleChange}
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
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <form className="d-flex" role="search">
          <div className="input-container">
          <Input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            suffix={<SearchOutlined 
            style={{color: '#FF7506'}}
            />}
          />
        </div>
          </form>
        </div>
      </nav>
      </div>
    </div>
    <Danhsachdv/>
    </div>
     
    </> 
    );
}
 
export default Service;