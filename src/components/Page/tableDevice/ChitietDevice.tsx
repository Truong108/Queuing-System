import { CaretRightOutlined } from "@ant-design/icons";
import Personal from "../Personal";
import { Link } from "react-router-dom";
import '../../../css/Device/danhsachtb.css';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useEffect } from "react";
import { fetchThietBi } from "../../../redux/Device/deviceReducer";
import UpdateDevice from "../../../assets/Edit Square.png";

const ChitietDevice = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchThietBi() as any);
    }, [dispatch]);
    const deviceInfo = useSelector((state: RootState) => state.device.devices[0]);
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
     >Chi tiết thiết bị</span>
    </div>
      <Personal/>
    </div>
   </div>
   <div className="totaladdtb">
   <h2 className="tieudetb">Quản lí thiết bị</h2>
   <table className="bangthongtinchitiet">
    <h4 className="thongtintb">Thông tin thiết bị</h4>
  <div className="containerThemtb">
  <div className="row">
    <div className="col-md-4">
        <label htmlFor="inputEmail4" className="text-chitiet">
            Mã thiết bị: 
            <span style={{
                color: '#535261',
                fontFamily: "Nunito Sans, sans-serif",
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '24px',
                marginLeft: '150px'
            }}>
                {deviceInfo.matb}
            </span>
        </label>
    </div>
    <div className="col-md-4">
        <label htmlFor="inputEmail4" className="text-chitiet">
            Địa chỉ IP: 
            <span style={{
                color: '#535261',
                fontFamily: "Nunito Sans, sans-serif",
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '24px',
                marginLeft: '150px'
            }}>
                {deviceInfo.dcip}
            </span>
        </label>
    </div>
    <div className="col-md-4">
        <label htmlFor="inputEmail4" className="text-chitiet">
            Tên thiết bị: 
            <span style={{
                color: '#535261',
                fontFamily: "Nunito Sans, sans-serif",
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '24px',
                marginLeft: '150px'
            }}>
                {deviceInfo.tentb}
            </span>
        </label>
    </div>
    </div>

    <div className="row">
    <div className="col-md-4">
        <label htmlFor="inputEmail4" className="text-chitiet">
            Loại thiết bị: 
            <span style={{
                color: '#535261',
                fontFamily: "Nunito Sans, sans-serif",
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '24px',
                marginLeft: '150px'
            }}>
                {deviceInfo.tentb}
            </span>
        </label>
    </div>
    <div className="col-md-4">
        <label htmlFor="inputEmail4" className="text-chitiet">
            Tên đăng nhập: 
            <span style={{
                color: '#535261',
                fontFamily: "Nunito Sans, sans-serif",
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '24px',
                marginLeft: '150px'
            }}>
            
            </span>
        </label>
    </div>
    <div className="col-md-4">
        <label htmlFor="inputEmail4" className="text-chitiet">
            Mật khẩu: 
            <span style={{
                color: '#535261',
                fontFamily: "Nunito Sans, sans-serif",
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '24px',
                marginLeft: '150px'
            }}>
            
            </span>
        </label>
    </div>
  </div>
    <div className="row">
      <div className="col-md-6">
      <label htmlFor="inputEmail4" className="text-chitiet">
          Dịch vụ sử dụng: 
          <span style={{
            color: '#535261',
            fontFamily: "Nunito Sans, sans-serif",
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '24px',
            marginTop: '20px',
            display: 'block'
          }}>
            {deviceInfo.dichvu}
          </span>
        </label>
     </div>
    </div>
   </div>
   </table>
   <Link to="/updevice">
    <div className='iconButtonDevice'>
      <img src={UpdateDevice} alt='up'/>
      <p className='uptb'>Cập nhật thiết bị</p>
    </div>
    </Link>
   </div>
    </> 
  );
}
 
export default ChitietDevice;