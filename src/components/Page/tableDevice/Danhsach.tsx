import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThietBi } from '../../../Interface/Thietbi';
import { fetchThietBi } from '../../../redux/Device/deviceReducer';
import { RootState } from '../../../store/store';
import '../../../css/Device/danhsachtb.css';
import Addthietbi from '../../../assets/add-square.png'
import { Pagination } from 'antd';
import { Link } from 'react-router-dom';

const Danhsachthietbi = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchThietBi() as any);
    }, [dispatch]);
    const devices = useSelector((state: RootState) => state.device.devices);
    const [showFullContent, setShowFullContent] = useState<Array<boolean>>([]);

    useEffect(() => {
      setShowFullContent(devices.map(() => false));
    }, [devices]);

    const toggleShowContent = (index: number) => {
      const newShowFullContent = [...showFullContent];
      newShowFullContent[index] = !newShowFullContent[index];
      setShowFullContent(newShowFullContent);
    };
    const truncateText = (text: string, maxLength: number) => {
      if (text.length <= maxLength) {
        return text;
      }
      return text.slice(0, maxLength) + "...";
    };
    
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = devices.slice(startIndex, endIndex);
    return ( <>
     <div className='content'>
      <table className='bangthietbi'>
        <thead>
          <tr>
            <th className='thmatb'>Mã thiết bị</th>
            <th className='thtentb'>Tên thiết bị</th>
            <th className='thdc'>Địa chỉ IP</th>
            <th className='thtt'>Trạng thái hoạt động</th>
            <th className='thttkn'>Trạng thái kết nối</th>
            <th className='thdv'>Dịch vụ sử dụng</th>
            <th className='thctiet'></th>
            <th className='thcnhat'></th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((device: ThietBi, index) => {
             let mautb = {};
             if (index % 2 === 1) {
              mautb = { backgroundColor: "#FF750622" };
             }
             let ketnoi = {}
             if(device.trangthaikn ==="Kết nối" && device.trangthai === "Hoạt động"){
              ketnoi = {
              color:"#FFA500",
              marginRight: "10px",
            }
             }
             if(device.trangthaikn ==="Mất kết nối" && device.trangthai === "Ngưng hoạt động"){
              ketnoi= {
                color: "#FF0000",
                marginRight: "10px"
              }
             }
            return(
              <tr key={device.id}>
              <td className='tdmatb'
              style={mautb}>{device.matb}</td>
              <td className='tdtentb'
              style={mautb}>{device.tentb}</td>
              <td className='tddc'
              style={mautb}>{device.dcip}</td>
              <td className='tdtt'
              style={mautb}><span style={ketnoi}><i className="bi bi-circle-fill"></i></span>{device.trangthai}</td>
              <td className='tdttkn'
              style={mautb}><span style={ketnoi}><i className="bi bi-circle-fill"></i></span>{device.trangthaikn}</td>
              <td className='tddv'
              style={mautb}>
                {showFullContent[index] ? (
                  <div>
                    {device.dichvu}
                    <span className="xemthem" onClick={() => toggleShowContent(index)}>
                      Thu gọn
                    </span>
                  </div>
                ) : (
                  <div>
                    {truncateText(device.dichvu, 9)}
                    <span className="xemthem" onClick={() => toggleShowContent(index)}>
                      Xem thêm
                    </span>
                  </div>
                )}
              </td>
              <Link className='tdctiet'
              to="/chitietdevice">
              <td style={mautb}>{device.chitiet}</td>
              </Link>
              <Link className='tdcnhat'
              to="/updevice">
              <td style={mautb}>{device.capnhat}</td>
              </Link>
              
            </tr>
            ); 
            })}
        </tbody>
      </table>
    </div>
    <Link to="/adddevice">
    <div className='iconButton'>
      <img src={Addthietbi} alt='add'/>
      <p className='themtb'>Thêm Thiết Bị</p>
    </div>
    </Link>
    <div 
      style={{ 
        position: 'fixed', 
        bottom: '40px', 
        right: '85px', 
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
      }}
    >
    <Pagination
      showSizeChanger={false}
      current={currentPage}
      onChange={handlePageChange}
      total={devices.length} 
    />
    </div>
    </> 
  );
}
 
export default Danhsachthietbi;