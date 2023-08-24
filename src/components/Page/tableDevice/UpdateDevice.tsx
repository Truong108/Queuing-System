import { CaretRightOutlined } from "@ant-design/icons";
import Personal from "../Personal";
import { Link, useNavigate, useParams } from "react-router-dom";
import '../../../css/Device/danhsachtb.css';
import { Button, Input, Space } from "antd";
import { useEffect, useState } from "react";
import { ThietBi } from "../../../Interface/Thietbi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { fetchThietBi } from "../../../redux/Device/deviceReducer";
import { updateDevice } from "../../../redux/Device/deviceSlice";


const UpdateDevice = () => {
  const [dataInfo, setDataInfo] = useState<ThietBi>({
    matb: "",
    tentb: "",
    dcip: "",
    trangthai: "",
    trangthaikn: "",
    dichvu: [],
    chitiet: "",
    capnhat: "",
  })
  const {id} = useParams()
  const [deviceUpdate, setDeviceUpdate] = useState<any>()
  const dispatch = useDispatch();
    const deviceUp = useSelector((state: RootState) => state.device.devices);
    const navigate = useNavigate()
    const handleUpdate = async () =>{
      await dispatch(updateDevice(dataInfo) as any)
      navigate("/device")
    }
    useEffect(() => {
        // eslint-disable-next-line eqeqeq
        const data = deviceUp.find((item) => item.matb == id)
        setDataInfo(data!)
        setDeviceUpdate(data)
      dispatch(fetchThietBi() as any);
    }, [dispatch, id]);

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
            value={dataInfo?.matb}
            onChange={(e)=> setDataInfo((prev)=> ({...prev, matb:e.target.value}))}
        />
    </div>
    <div className="col-md-4">
        <label htmlFor="inputEmail4" className="text-chitiet">Tên thiết bị:*</label>
        <Input 
            placeholder="Nhập tên thiết bị"
            className="form-tb"
            value={dataInfo?.tentb}
            onChange={(e) => setDataInfo((prev)=>({...dataInfo, tentb:e.target.value}))}
        />
    </div>
    <div className="col-md-4">
        <label htmlFor="inputEmail4" className="text-chitiet">Địa chỉ IP:*</label>
        <Input 
            placeholder="Nhập địa chỉ IP"
            className="form-tb"
            value={dataInfo?.dcip}
            onChange={(e) => setDataInfo((prev)=>({...dataInfo, dcip:e.target.value}))}
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
            value={dataInfo?.tentb}
            onChange={(e) => setDataInfo((prev)=>({...dataInfo, tentb:e.target.value}))}
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
      <select 
        className="form-select" 
        aria-label="Default select example" 
        style={{ width: '1300px', height: '170px', marginLeft: '31px' }}
        multiple
        value={dataInfo?.dichvu || []}
        onChange={(e) => {
          const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
          setDataInfo((prev) => ({ ...prev, dichvu: selectedOptions }));
        }}
      >
        <option value="" disabled hidden>Chọn dịch vụ</option>
        <option value="Khám tim mạch">Khám tim mạch</option>
        <option value="Khám sản phụ khoa">Khám sản phụ khoa</option>
        <option value="Khám răng hàm mặt">Khám răng hàm mặt</option>
        <option value="Khám tai mũi họng">Khám tai mũi họng</option>
        <option value="Khám hô hấp">Khám hô hấp</option>
        <option value="Khám tổng quát">Khám tổng quát</option>
      </select>

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
    onClick={handleUpdate}
    >Cập nhật</Button>
    </Space>
   </div>
    </> 
  );
}
 
export default UpdateDevice;