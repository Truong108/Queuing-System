import { Link } from "react-router-dom";
import LogoMenu from "../../assets/Group.png";
import '../../css/menu-bar.css';
import { useState } from "react";
import { AppstoreOutlined, 
  AreaChartOutlined, 
  CaretDownOutlined, 
  CodepenOutlined, 
  DesktopOutlined, 
  LogoutOutlined, 
  MoreOutlined, 
  SettingOutlined,
  WechatOutlined } from "@ant-design/icons";
import React from "react";

const MenuBar = () => {
  const [popoverVisible, setPopoverVisible] = useState(false);
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
       <DesktopOutlined />
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
          <Link to="/grantNumber" className="link-style">
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
        <div className="Popover">
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
        <span
          style={{
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap"
          }}
        >
          Cài đặt hệ thống
          <div
            style={{
              marginLeft: "10px",
              clear: "both",
              whiteSpace: "nowrap",
              marginTop: "-1px"
            }}
          >
            <MoreOutlined
              style={{ fontWeight: "bold", marginLeft: "5px" }}
              onClick={() => setPopoverVisible(!popoverVisible)} 
            />
          </div>
        </span>
      </li>
      {popoverVisible && (
        <div className="Popover-links">
      <p className="iconmenu">
      <CaretDownOutlined />
      </p>
        <React.Fragment>
          <Link to="/systemInstallation" className="nav-link">
            <li
              className={selectedTabIndex === 5 ? "active" : ""}
              onClick={() => handleTabClick(5)}
            >
              <span style={{ fontWeight: "bold" }}>Quản lý vai trò</span>
            </li>
          </Link>
          <Link to="/quanlytaikhoan" className="nav-link">
            <li 
              className={selectedTabIndex === 6 ? "active" : ""}
              onClick={() => handleTabClick(6)}
            >
              <span style={{ fontWeight: "bold" }}>Quản lý tài khoản</span>
            </li>
          </Link>
          <Link to="/nhatky" className="nav-link">
            <li
              className={selectedTabIndex === 7 ? "active" : ""}
              onClick={() => handleTabClick(7)}
            >
              <span style={{ fontWeight: "bold" }}>Nhật ký người dùng</span>
            </li>
          </Link>
        </React.Fragment>
        </div>
      )}
    </Link>
    </div>
    </ul>
  </div>
  <Link to="/">
    <div className="dangxuat">
    <button>
    <LogoutOutlined style={{marginRight: '10px'}}/>
      Đăng xuất
    </button>
  </div>
  </Link>
 </> 
 );
}

export default MenuBar;
