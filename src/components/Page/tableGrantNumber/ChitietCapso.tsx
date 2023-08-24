import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCapso } from "../../../redux/GrantNumber/grantNumberReducer";
import { RootState } from "../../../store/store";
import { CaretRightOutlined } from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";
import Personal from "../Personal";
import Backchitiet from '../../../assets/back-square.png';
import '../../../css/grantNumber/chitiet.css';
import { CapSo } from "../../../Interface/Capso";

const Chitietcapso = () => {
  const {id} = useParams()
  const [capso, setCapso] = useState<CapSo>()
  const dispatch = useDispatch();
  const capsoInfo = useSelector((state: RootState) => state.capso.capso);
    useEffect(() => {
      // eslint-disable-next-line eqeqeq
      const data = capsoInfo.find((item) => item.stt == id)
      setCapso(data)
      dispatch(fetchCapso() as any);
    }, [capsoInfo, dispatch, id]);
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
   <h2 className="quanlycapsochitiet">Quản lý cấp số</h2>
   <table className="bangthongtinchitiet">
    <h4 className="thongtintb">Thông tin cấp số</h4>
    <div className="containerThemtb">
  <div className="row">
    <div className="col-md-2">
      <label htmlFor="inputEmail4" className="text-chitiet">
        Họ tên:
        <span className="info-span">{capso?.tenkh}</span>
      </label>
    </div>
    <div className="col-md-2"> 
      <label htmlFor="inputEmail4" className="text-chitiet">
        Tên dịch vụ:
        <span className="info-span">{capso?.tendv}</span>
      </label>
    </div>
    <div className="col-md-2">
      <label htmlFor="inputEmail4" className="text-chitiet">
        Số thứ tự:
        <span className="info-span">{capso?.stt}</span>
      </label>
    </div>
    <div className="col-md-2"> 
      <label htmlFor="inputEmail4" className="text-chitiet">
        Thời gian cấp:
        <span className="info-span">{capso?.tgcap}</span>
      </label>
    </div>
    <div className="col-md-2"> 
      <label htmlFor="inputEmail4" className="text-chitiet">
        Hạn sử dụng:
        <span className="info-span">{capso?.hsdung}</span>
      </label>
    </div>
  </div>

  <div className="row">
  <div className="col-md-2"> 
      <label htmlFor="inputEmail4" className="text-chitiet">
        Nguồn cấp:
        <span className="info-span">{capso?.ncap}</span>
      </label>
    </div>
    <div className="col-md-2"> 
      <label htmlFor="inputEmail4" className="text-chitiet">
        Trạng thái:
        <span className="info-span">{capso?.tt}</span>
      </label>
    </div>
    <div className="col-md-2"> 
      <label htmlFor="inputEmail4" className="text-chitiet">
        Số điện thoại:
        <span className="info-span">{capso?.sodt}</span>
      </label>
    </div>
    <div className="col-md-2">
      <label htmlFor="inputEmail4" className="text-chitiet">
        Địa chỉ Email:
        <span className="info-span">{capso?.mail}</span>
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