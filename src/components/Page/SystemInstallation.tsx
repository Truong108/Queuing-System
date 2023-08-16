import Personal from "./Personal";
import '../../css/dashboard.css';
import { CaretRightOutlined, SearchOutlined } from "@ant-design/icons";
import '../../css/SettingHeThong/vaitro.css';
import Qlvaitro from "./tableHeThong/Vaitro/RoleManagement";
import { Input } from "antd";
const SystemInstallation = () => {
    return ( <>
    <div className="vaitro">
    <div className="navtop">
        <div className="textnavtop">
          <span>Cài đặt hệ thống</span>
          <CaretRightOutlined style={{marginLeft: '1px'}}/>
          <span style={{marginLeft: '20px'}}
          >Quản lý vai trò</span>
        </div>
       <Personal/>
      </div>
      <h2 className="dsvaitro">Danh sách vai trò</h2>
    <div className="contaivaitro">
      <div className="tukhoavaitro">
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
    <Qlvaitro/>
    </div>
    </> 
    );
}
 
export default SystemInstallation;