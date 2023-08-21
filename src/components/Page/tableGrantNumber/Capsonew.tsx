import { CaretRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Personal from "../Personal";
import { Button, Modal, Select, Space } from "antd";
import '../../../css/grantNumber/capsonew.css';
import { useState } from "react";

const Capsonew = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
    return ( <>
    <div className="themdevice">
      <div className="navtopp">
       <div className="textnavtop">
        <span>Cấp số</span>
        <CaretRightOutlined  style={{marginLeft: '1px'}}/>
     <Link to="/grantNumber" style={{textDecoration: 'none'}}>
      <span style={{marginLeft: '20px', color: '#7E7D88'}}
      >Danh sách cấp số</span>
     </Link>
     <CaretRightOutlined  style={{marginLeft: '1px'}}/>
    <span style={{marginLeft: '20px'}}
     >Cấp số mới</span>
    </div>
      <Personal/>
    </div>
   </div>
   <div className="totaladdtb">
   <h2 className="tieudetb">Quản lý cấp số</h2>
   <table className="bangcapso">
    <h4 className="capsotieude">Cấp số mới</h4>
    <p className="textcapso1">Dịch vụ khách hàng lựa chọn</p>
    <div className="2spacecapso">
    <div className="upper-space">
    <Space wrap> 
      <Select
        defaultValue="Chọn dịch vụ"
        style={{ 
          width: 400
        }}
        onChange={handleChange}
        options={[
          { value: 'Tất cả', label: 'Tất cả' },
          { value: 'Khám tim mạch', label: 'Khám tim mạch' },
          { value: 'Khám sản - Phụ Khoa', label: 'Khám sản - Phụ Khoa' },
          { value: 'Khám răng hàm mặt', label: 'Khám răng hàm mặt' },
          { value: 'Khám tai mũi họng', label: 'Khám tai mũi họng' },
          { value: 'Khám hô hấp', label: 'Khám hô hấp' },
          { value: 'Khám tổng quát', label: 'Khám tổng quát' },
          { value: 'Khám da liễu', label: 'Khám da liễu' },
          { value: 'Khám về da', label: 'Khám về da' },
          { value: 'Khám phụ khoa', label: 'Khám phụ khoa' }
        ]}
      />
       </Space>
       </div>
       <div className="lower-space" style={{ marginTop: '30px', marginLeft: '530px' }}>
    <Space wrap>
   <Link to="/grantNumber">
   <Button danger className="huybo">Hủy bỏ</Button>
   </Link>
    <Button danger className="nutaddtb"
    style={{color: '#FFF', marginLeft: '25px'}}
    onClick={() => setModal2Open(true)}
    >In số</Button>
    <Modal
      title={<h5 style={{ textAlign: 'center', 
      fontFamily: 'Montserrat', color: '#1E0D03',
      fontSize: '24px',fontStyle: 'normal', 
      fontWeight: '700', lineHeight: '30px'}}>Thêm gói vé</h5>}
      centered
      open={modal2Open}
      onCancel={() => setModal2Open(false)}
      footer={null}
      >
      <h1>hdsahdhashdahs</h1>
      </Modal>
    </Space>
    </div>
    </div>
   </table>
   </div>
    </> );
}
 
export default Capsonew;