import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThietBi } from '../../../Interface/Thietbi';
import { fetchThietBi } from '../../../redux/deviceReducer';
import { RootState } from '../../../store/store';
import '../../../css/danhsachtb.css';

const Danhsachthietbi = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchThietBi() as any);
    }, [dispatch]);
    const [showFullContent, setShowFullContent] = useState(false);

    const toggleShowContent = () => {
      setShowFullContent(!showFullContent);
    };
  
    const truncateText = (text: string, maxLength: number) => {
      if (text.length <= maxLength) {
        return text;
      }
      return text.slice(0, maxLength) + "...";
    };
    const devices = useSelector((state: RootState) => state.device.devices);
    return ( <>
     <div className='content'>
      <table className='bangthietbi'>
        <thead>
          <tr>
            <th>Mã thiết bị</th>
            <th>Tên thiết bị</th>
            <th>Địa chỉ IP</th>
            <th>Trạng thái hoạt động</th>
            <th>Trạng thái kết nối</th>
            <th>Dịch vụ sử dụng</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {devices.map((device: ThietBi, index) => {
             let mautb = {};
             if (index % 2 === 1) {
              mautb = { backgroundColor: "#FF750622" };
             }
             let ketnoi = {}
             if(device.trangthaikn ==="Kết nối"){
              ketnoi = {
              color:"#FFA500",
              marginRight: "10px",
            }
             }
             if(device.trangthaikn ==="Mất kết nối"){
              ketnoi= {
                color: "#FF0000",
                marginRight: "10px"
              }
             }
            return(
              <tr key={device.id}>
              <td style={mautb}>{device.matb}</td>
              <td style={mautb}>{device.tentb}</td>
              <td style={mautb}>{device.dcip}</td>
              <td style={mautb}>{device.trangthai}</td>
              <td style={mautb}><span style={ketnoi}><i className="bi bi-circle-fill"></i></span>{device.trangthaikn}</td>
              <td style={mautb}>
              {showFullContent ? (
                <div>
                  {device.dichvu}
                  <span className="xemthem" onClick={toggleShowContent}>
                    Thu gọn
                  </span>
                </div>
                ) : (
                  <div>
                    {truncateText(device.dichvu, 3)}
                    <span className="xemthem" onClick={toggleShowContent}>
                      Xem thêm
                    </span>
                  </div>
                )}
              </td>
              <td style={mautb}>{device.chitiet}</td>
              <td style={mautb}>{device.capnhat}</td>
            </tr>
            ); 
            })}
        </tbody>
      </table>
    </div>
    </> 
  );
}
 
export default Danhsachthietbi;