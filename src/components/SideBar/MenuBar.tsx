import { Link } from "react-router-dom";
import LogoMenu from "../../assets/Group.png";
import '../../css/menu-bar.css';
import { useState } from "react";
import { AppstoreOutlined, 
  AreaChartOutlined, 
  CodepenOutlined, 
  DesktopOutlined, 
  LogoutOutlined, 
  SettingOutlined,
  WechatOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";

const { Sider } = Layout;
const items = [
  {
    title: 'Cài đặt hệ thống',
    key: '1',
    path: '/systemInstallation',
    icon: <SettingOutlined />,
    children: [
      {
        title: 'Quản lý vai trò',
        key: '1',
        path: '/systemInstallation',
      },
      {
        title: 'Quản lý tài khoản',
        key: '2',
        path: '/quanlytaikhoan',
      },
      {
        title: 'Nhật ký người dùng',
        key: '3',
        path: '/nhatky',
      },
    ],
  },
];
const MenuBar = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number | null>(0);

  const handleTabClick = (index: number) => {
    setSelectedTabIndex(index);
  };
  const onClick = (item: any) => {
    console.log('Clicked item:', item);
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
        <Sider>
          <Menu
            onClick={onClick}
            style={{
              width: 252,
              height: '50px',
              marginLeft: '-20px',
              marginTop: '-26px',
            }}
            mode="vertical"
          >
            {items.map((menuItem) => (
              <Menu.SubMenu
                key={menuItem.key}
                title={menuItem.title}
                icon={menuItem.icon}
                className="custom-menu"
              >
                {menuItem.children.map((subItem) => (
                  <Menu.Item key={subItem.key}
                  className="custom-menu-item"
                  >
                    <Link 
                    className="custom-menu-link"
                    to={subItem.path || ''}
                    >{subItem.title}</Link>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ))}
          </Menu>
        </Sider>
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
