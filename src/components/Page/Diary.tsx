import { CaretRightOutlined, SearchOutlined } from "@ant-design/icons";
import NhatKy from "./tableHeThong/UserLog";
import Personal from "./Personal";
import { DatePicker, DatePickerProps, Input, Space } from "antd";
import '../../css/SettingHeThong/nhatky.css';
import { useState } from "react";

const Diary = () => {
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
      };
      const [text, setText] = useState<string>("");
    return ( <>
    <div className="nhatkyfrom">
    <div className="navtop">
        <div className="textnavtop">
          <span>Cài đặt hệ thống</span>
          <CaretRightOutlined style={{marginLeft: '1px'}}/>
          <span style={{marginLeft: '20px'}}
          >Nhật ký hoạt động</span>
        </div>
       <Personal/>
      </div>
    <div className="containhatky">
    <div className="chontgnhatky">
      <p>Chọn thời gian</p>
      <Space direction="vertical">
          <DatePicker onChange={onChange} />
        </Space>
        <CaretRightOutlined />
        <Space direction="vertical">
          <DatePicker onChange={onChange} />
        </Space>
      </div>
      <div className="tukhoanhatky">
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
            onChange={(e) => setText(e.target.value)}
          />
        </div>
          </form>
        </div>
      </nav>
      </div>
    </div>
    <NhatKy text={text}/>
    </div>
    </> );
}
 
export default Diary;