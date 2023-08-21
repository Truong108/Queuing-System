import Personal from "./Personal";
import '../../css/dashboard.css';
import { CaretRightOutlined, SearchOutlined } from "@ant-design/icons";
import '../../css/SettingHeThong/vaitro.css';
import { Input, Select, Space } from "antd";
import '../../css/SettingHeThong/taikhoan.css';
import Quanlytaikhoan from "./tableHeThong/Taikhoan/AccountManagement";
const Account = () => {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };
    return ( <>
    <div className="taikhoan">
    <div className="navtop">
        <div className="textnavtop">
          <span>Cài đặt hệ thống</span>
          <CaretRightOutlined style={{marginLeft: '1px'}}/>
          <span style={{marginLeft: '20px'}}
          >Quản lý tài khoản</span>
        </div>
       <Personal/>
      </div>
      <h2 className="dstaikhoan">Danh sách tài khoản</h2>
    <div className="contaitaikhoan">
    <div className="taikhoanvt">
      <p>Tên vai trò</p>
      <Space wrap> 
      <Select
        defaultValue="Tất cả"
        style={{ width: 350, marginLeft: '-2px' }}
        onChange={handleChange}
        options={[
          { value: 'Tất cả', label: 'Tất cả' },
          { value: 'Kế toán', label: 'Kế toán' },
          { value: 'Bác sĩ', label: 'Bác sĩ' },
          { value: 'Lễ tân', label: 'Lễ tân' },
          { value: 'Quản lý', label: 'Quản lý' },
          { value: 'Admin', label: 'Admin' },
          { value: 'Superadmin', label: 'Superadmin' }
        ]}
      />
       </Space>
      </div>
      <div className="tukhoataikhoan">
        <p>Từ khóa</p>
        <nav className="navbar">
        <div className="containervt">
          <form className="d-flex" role="search">
          <div className="input-vaitro">
          <Input
            className="form-vaitro"
            type="search"
            placeholder="Nhập từ khóa"
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
    <Quanlytaikhoan/>
    </div>
    </> 
    );
}
 
export default Account;