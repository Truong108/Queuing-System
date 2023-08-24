import { ReactNode } from "react";
import { Content } from "antd/es/layout/layout";
import MenuBar from "../components/SideBar/MenuBar";

interface LayoutProps {
    content?: ReactNode;
  }
const DefaultLayouts: React.FC<LayoutProps> = ({ content }) => {
  return (
    <div className="app">
      <div className="menu">
      <MenuBar />
      </div>
      <Content>{content}</Content>
    </div>
  );
};
export default DefaultLayouts;
