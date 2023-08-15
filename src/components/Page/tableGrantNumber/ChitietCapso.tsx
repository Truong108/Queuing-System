import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCapso } from "../../../redux/GrantNumber/grantNumberReducer";
import { RootState } from "../../../store/store";
import { CaretRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Personal from "../Personal";
import Backchitiet from '../../../assets/back-square.png';
import '../../../css/grantNumber/chitiet.css';

const Chitietcapso = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchCapso() as any);
    }, [dispatch]);
    const capsoInfo = useSelector((state: RootState) => state.capso.capso[0]);
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
     >Chi tiết</span>
    </div>
      <Personal/>
    </div>
   </div>
   <div className="totaladdtb">
   <h2 className="tieudetb">Quản lí cấp số</h2>
   <table className="bangthongtinchitiet">
    <h4 className="thongtintb">Thông tin cấp số</h4>
    <div className="containerThemtb">
  <div className="row">
    <div className="col-md-2">
      <label htmlFor="inputEmail4" className="text-chitiet">
        Họ tên:
        <span className="info-span">{capsoInfo.tenkh}</span>
      </label>
    </div>
    <div className="col-md-2"> 
      <label htmlFor="inputEmail4" className="text-chitiet">
        Tên dịch vụ:
        <span className="info-span">{capsoInfo.tendv}</span>
      </label>
    </div>
    <div className="col-md-2">
      <label htmlFor="inputEmail4" className="text-chitiet">
        Số thứ tự:
        <span className="info-span">{capsoInfo.stt}</span>
      </label>
    </div>
    <div className="col-md-2"> 
      <label htmlFor="inputEmail4" className="text-chitiet">
        Thời gian cấp:
        <span className="info-span">{capsoInfo.tgcap}</span>
      </label>
    </div>
    <div className="col-md-2"> 
      <label htmlFor="inputEmail4" className="text-chitiet">
        Hạn sử dụng:
        <span className="info-span">{capsoInfo.hsdung}</span>
      </label>
    </div>
  </div>

  <div className="row">
  <div className="col-md-2"> 
      <label htmlFor="inputEmail4" className="text-chitiet">
        Nguồn cấp:
        <span className="info-span">{capsoInfo.ncap}</span>
      </label>
    </div>
    <div className="col-md-2"> 
      <label htmlFor="inputEmail4" className="text-chitiet">
        Trạng thái:
        <span className="info-span">{capsoInfo.tt}</span>
      </label>
    </div>
    <div className="col-md-2"> 
      <label htmlFor="inputEmail4" className="text-chitiet">
        Số điện thoại:
        <span className="info-span">{capsoInfo.sodt}</span>
      </label>
    </div>
    <div className="col-md-2">
      <label htmlFor="inputEmail4" className="text-chitiet">
        Địa chỉ Email:
        <span className="info-span">{capsoInfo.mail}</span>
      </label>
    </div>
  </div>
</div>
   </table>
   <Link to="/grantNumber">
    <div className='iconButtonDevice'>
      <img src={Backchitiet} alt='up'/>
      <p className='uptb'>Quay về</p>
    </div>
    </Link>
   </div>
    </> 
    );
}
 
export default Chitietcapso;