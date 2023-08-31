import Personal from "./Personal";
import '../../css/dashboard.css';
import '../../css/grantNumber/danhsach.css';
import { CaretRightOutlined, SearchOutlined } from "@ant-design/icons";
import { DatePicker, DatePickerProps, Input, Select, Space } from "antd";
import Capso from "./tableGrantNumber/Danhsach";
import { useState } from "react";
const GrantNumber = () => {
  const [statusService, setStatusService]  = useState<string>("Tất cả")
  const [statusCondition, setStatusCondition]  = useState<string>("Tất cả")
  const [statusSource, setStatusSource]  = useState<string>("Tất cả")
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };
  const [text, setText] = useState<string>("")
    return ( <>
    <div className="capso">
    <div className="navtop">
        <div className="textnavtop">
          <span>Cấp số</span>
          <CaretRightOutlined style={{marginLeft: '1px'}}/>
          <span style={{marginLeft: '20px'}}
          >Danh sách cấp số</span>
        </div>
       <Personal/>
      </div>
      <h2 className="quanlycapsoo">Quản lý cấp số</h2>
    <div className="container">
      <div className="tendvtieude">
      <p>Tên dịch vụ</p>
      <Space wrap> 
      <Select
        defaultValue="Tất cả"
        style={{ width: 170, marginLeft: '-2px' }}
        onChange={(e) => setStatusService(e)}
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
      <div className="tendv2">
      <p>Tình trạng</p>
      <Space wrap> 
      <Select
        defaultValue="Tất cả"
        style={{ width: 170, marginLeft: '-10px' }}
        onChange={(e) => setStatusCondition(e)}
        options={[
          { value: 'Tất cả', label: 'Tất cả' },
          { value: 'Đang chờ', label: 'Đang chờ' },
          { value: 'Đã sử dụng', label: 'Đã sử dụng' },
          { value: 'Bỏ qua', label: 'Bỏ qua' },
        ]}
      />
       </Space>
      </div>
      <div className="tendv2">
      <p>Nguồn cấp</p>
      <Space wrap> 
      <Select
        defaultValue="Tất cả"
        style={{ width: 170, marginLeft: '-10px' }}
        onChange={(e) => setStatusSource(e)}
        options={[
          { value: 'Tất cả', label: 'Tất cả' },
          { value: 'Kiosk', label: 'Kiosk' },
          { value: 'Hệ thống', label: 'Hệ thống' },
          { value: 'Đang chờ', label: 'Đang chờ' }
        ]}
      />
       </Space>
      </div>
      <div className="chontgcapso">
        <p>Chọn thời gian</p>
        <Space direction="vertical">
          <DatePicker onChange={onChange} />
        </Space>
        <CaretRightOutlined />
        <Space direction="vertical">
          <DatePicker onChange={onChange} />
        </Space>
      </div>
      <div className="timkiemcapso">
        <p>Từ khóa</p>
        <nav className="navbar">
        <div className="container-fluid">
          <form className="d-flex" role="search">
          <div className="input-container">
          <Input
            className="form-control"
            type="search"
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
    <Capso text={text} statusService={statusService} statusCondition={statusCondition} statusSource={statusSource}/>
    </div>
    </> 
    );
}
 
export default GrantNumber;