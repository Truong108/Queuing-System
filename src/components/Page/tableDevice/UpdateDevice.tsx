import { CaretRightOutlined } from "@ant-design/icons";
import Personal from "../Personal";
import { Link, useParams } from "react-router-dom";
import '../../../css/Device/danhsachtb.css';
import { Button, Input, Select, Space, Tag } from "antd";
import { useEffect, useState } from "react";
import { ThietBi } from "../../../Interface/Thietbi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { fetchThietBi } from "../../../redux/Device/deviceReducer";


const options = [
  { value: 'Khám tim mạch', color: 'gold' },
  { value: 'Khám sản phụ khoa', color: 'lime' },
  { value: 'Khám răng hàm mặt', color: 'green' },
  { value: 'Khám tai mũi họng', color: 'cyan' },
  { value: 'Khám hô hấp', color: 'blue' }, // Ví dụ thêm màu cho giá trị 'Khám hô hấp'
  { value: 'Khám tổng quát', color: 'purple' }
];
const tagRender = (props: any) => {
    const { label, closable, onClose } = props;
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
  };
    return (
      <Tag
        color={options.find(option => option.value === label)?.color || 'defaultColor'} // Tìm màu dựa trên giá trị
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{
            display: 'flex', // Hiển thị thành container flex
            alignItems: 'center', // Căn giữa theo chiều dọc
            justifyContent: 'center', // Căn giữa theo chiều ngang
            marginRight: 5,
            marginLeft: 40,
            height: '60px'
          }}
      >
        {label}
      </Tag>
    );
  };
const AddDevice = () => {
  const {id} = useParams()
  const [deviceUpdate, setDeviceUpdate] = useState<ThietBi>()
  const dispatch = useDispatch();
    const deviceUp = useSelector((state: RootState) => state.device.devices);
    useEffect(() => {
        // eslint-disable-next-line eqeqeq
        const data = deviceUp.find((item) => item.matb == id)
        setDeviceUpdate(data)
      dispatch(fetchThietBi() as any);
    }, [deviceUp, dispatch, id]);
  const [selectedValues, setSelectedValues] = useState<string[]>([
    'Khám tim mạch', 
    'Khám sản phụ khoa', 
    'Khám răng hàm mặt', 
    'Khám tai mũi họng', 
    'Khám hô hấp', 
    'Khám tổng quát'
  ]);

  const handleSelectAll = () => {
    if (selectedValues.length === options.length) {
      setSelectedValues([]);
    } else {
      setSelectedValues(options.map(option => option.value));
    }
  };
    return ( <>
    <div className="themdevice">
     <div className="navtopp">
      <div className="textnavtop">
       <span>Thiết bị</span>
    <CaretRightOutlined  style={{marginLeft: '1px'}}/>
    <Link to="/device" style={{textDecoration: 'none'}}>
    <span style={{marginLeft: '20px', color: '#7E7D88'}}
     >Danh sách thiết bị</span>
    </Link>
     <CaretRightOutlined  style={{marginLeft: '1px'}}/>
    <span style={{marginLeft: '20px'}}
     >Cập nhật thiết bị</span>
    </div>
      <Personal/>
    </div>
   </div>
   <div className="totaladdtb">
   <h2 className="tieudetb">Quản lí thiết bị</h2>
   <table className="bangthongtin">
    <h4 className="thongtintb">Thông tin thiết bị</h4>
  <div className="containerThemtb">
  <div className="row">
    <div className="col-md-4">
        <label htmlFor="inputEmail4" className="text-chitiet">Mã thiết bị:*</label>
        <Input 
            placeholder="Nhập mã thiết bị"
            className="form-tb"
            value={deviceUpdate?.matb}
        />
    </div>
    <div className="col-md-4">
        <label htmlFor="inputEmail4" className="text-chitiet">Tên thiết bị:*</label>
        <Input 
            placeholder="Nhập tên thiết bị"
            className="form-tb"
            value={deviceUpdate?.tentb}
        />
    </div>
    <div className="col-md-4">
        <label htmlFor="inputEmail4" className="text-chitiet">Địa chỉ IP:*</label>
        <Input 
            placeholder="Nhập địa chỉ IP"
            className="form-tb"
            value={deviceUpdate?.dcip}
        />
    </div>
  </div>
  <div className="row">
  <div className="col-md-4">
        <label className="text-chitiet">Loại thiết bị:*</label>
        <select 
            className="form-select" 
            aria-label="Default select example" 
            style={{ width: '288%' }}
            value={deviceUpdate?.tentb}
        >
            <option value="" disabled selected hidden>Chọn thiết bị</option>
            <option value="Kisud31">Kiosk</option>
            <option value="Krier45">Display counter</option>
            <option value="Keqye13">Keqye13</option>
            <option value="Ktetoe29">Ktetoe29</option>
            <option value="Kiklti01">Kiklti01</option>
            <option value="Kwre38">Kwre38</option>
            <option value="Kfskr89">Kfskr89</option>
            <option value="Keitw90">Keitw90</option>
            <option value="Kqlei390">Kqlei390</option>
            <option value="Ktwo29">Ktwo29</option>
            <option value="Kwql78">Kwql78</option>
        </select>
    </div>
    <div className="col-md-4">
        <label htmlFor="inputPassword4" className="text-chitiet">Tên đăng nhập:*</label>
        <Input 
            placeholder="Nhập tài khoản"
            className="form-tb"
        />
    </div>
    <div className="col-md-4">
        <label htmlFor="inputPassword4" className="text-chitiet">Mật khẩu:*</label>
        <Input 
            placeholder="Nhập mật khẩu"
            className="form-tb"
        />
    </div>
  </div>
   <div className="row">
    <div className="col-md-6">
      <label htmlFor="inputPassword4" className="text-chitiet">Dịch vụ sử dụng:*</label>
      <Select
        mode="multiple"
        tagRender={tagRender}
        onChange={newSelectedValues => {
          if (newSelectedValues.includes('selectAll')) {
            handleSelectAll();
          } else {
            setSelectedValues(newSelectedValues);
          }
        }}
        value={deviceUpdate?.dichvu ? deviceUpdate?.dichvu.split(',') : []}
        style={{ width: '1300px', marginLeft: '31px' }}
        options={[
          { label: 'Tất cả', value: 'selectAll' },
          ...options.map(option => ({ label: option.value, value: option.value }))
        ]}
      />
     </div>
    </div>
   </div>
    <p className="thongtinbb">* Là trường thông tin bắt buộc</p>
   </table>
   <Space wrap 
   style={{ 
    marginTop: '30px', 
    marginLeft: '530px'
    }}>
   <Link to="/device">
   <Button danger className="huybo">Hủy bỏ</Button>
   </Link>
    <Button danger className="nutaddtb"
    style={{color: '#FFF', marginLeft: '25px'}}
    >Cập nhật</Button>
    </Space>
   </div>
    </> 
  );
}
 
export default AddDevice;