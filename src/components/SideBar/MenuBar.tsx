import { Link } from "react-router-dom";
import LogoMenu from "../../assets/Group.png";
import '../../css/menu-bar.css';
import { useState } from "react";
import { AppstoreOutlined, AreaChartOutlined, CodepenOutlined, ConsoleSqlOutlined, LogoutOutlined, MoreOutlined, SettingOutlined, WechatOutlined } from "@ant-design/icons";
const MenuBar = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number | null>(0);

  const handleTabClick = (index: number) => {
    setSelectedTabIndex(index);
  };
  
 return ( <>
  <div className="logoMenu">
    <img src={LogoMenu} alt="/" />  
  </div>
  <div className="menubar">
    <ul>
    <Link to="/dashboard" className="link-style">
      <li
        className={selectedTabIndex === 0 ? "active" : ""}
          onClick={() => handleTabClick(0)}
          style={{
            display: "flex",
            alignItems: "center"
          }}
          >
      <AppstoreOutlined />
        <span>Dashboard</span>
        </li>
      </Link>
      <Link to="/device" className="link-style">
        <li
        className={selectedTabIndex === 1 ? "active" : ""}
        onClick={() => handleTabClick(1)}
        style={{
          display: "flex",
          alignItems: "center"
        }}
          >
        <ConsoleSqlOutlined />
            <span>Thiết bị</span>
        </li>
        </Link>
        <Link to="/service" className="link-style">
          <li
            className={selectedTabIndex === 2 ? "active" : ""}
            onClick={() => handleTabClick(2)}
            style={{
              display: "flex",
              alignItems: "center"
            }}
            >
          <WechatOutlined />
            <span>Dịch vụ</span>
          </li>
          </Link>
          <Link to="/levelNo" className="link-style">
          <li
            className={selectedTabIndex === 3 ? "active" : ""}
            onClick={() => handleTabClick(3)}
            style={{
              display: "flex",
              alignItems: "center"
            }}
            >
          <CodepenOutlined />
            <span>Cấp số</span>
          </li>
          </Link>
        <Link to="/report" className="link-style">
          <li
            className={selectedTabIndex === 4 ? "active" : ""}
            onClick={() => handleTabClick(4)}
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
        <AreaChartOutlined />
        <span>Báo cáo</span> 
          </li>
        </Link>
        <Link to="/systemInstallation" className="no-underline">
        <li
          className={selectedTabIndex === 5 ? "active" : ""}
          onClick={() => handleTabClick(5)}
          style={{
            display: "flex",
            alignItems: "center"
          }}
          >
        <SettingOutlined />
        <span>Cài đặt hệ thống 
          <MoreOutlined 
          style={{
            fontWeight: 'bold',
            marginLeft: '5px'
            }}/>
          </span>
        </li>
        </Link>
    </ul>
  </div>
    <div className="dangxuat">
    <button>
    <LogoutOutlined style={{marginRight: '10px'}}/>
      Đăng xuất
    </button>
  </div>
 </> );
}

export default MenuBar;
