import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThietBi } from '../../../Interface/Thietbi';
import { fetchThietBi } from '../../../redux/Device/deviceReducer';
import { RootState } from '../../../store/store';
import '../../../css/Device/danhsachtb.css';
import Addthietbi from '../../../assets/add-square.png'
import { Pagination } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
interface tableProps{
  statusActive: string;
  statusCornect: string;
  text: string;
}
const Danhsachthietbi:React.FC<tableProps> = ({statusActive, statusCornect, text}) => {
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
    
    const handlePageChange = (page: React.SetStateAction<number>) => {
      setCurrentPage(page);
    };

    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    const currentPageData = [];
    for (let i = startIndex; i < Math.min(endIndex, devices.length); i++) {
      currentPageData.push(devices[i]);
    }
    const filter = currentPageData.filter((items) => (statusActive === "Tất cả" || items.trangthai === statusActive) 
    &&(statusCornect === "Tất cả" || items.trangthaikn === statusCornect) && (items.matb.includes(text)))
                                   
    const navigate =  useNavigate()
    const handleDetail = (id:string) =>{
        navigate(`/chitietdevice/${id}`)
    }
    const handleUpdate = (id: string) =>{
        navigate(`/updevice/${id}`);
    }
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
        {filter.map((device: ThietBi, index) => {
          const mautb = index % 2 === 1 ? { backgroundColor: "#FF750622" } : {};
          
          let hoatdong = {}
          if(device.trangthai ==="Hoạt động"){
            hoatdong = {color: "#34CD26", 
            marginRight: "10px",
             }
          }
          if(device.trangthai === "Ngưng hoạt động"){
            hoatdong = {color: "#EC3740",
            marginRight: "10px",
           }
          }
         let ketnoi = {}
         if(device.trangthaikn === "Kết nối"){
          ketnoi = {
            color: '#35C75A',
            marginRight: "10px",
          }
         }
         if(device.trangthaikn === "Mất kết nối"){
          ketnoi = {
            color: "#E73F3F",
            marginRight: "10px",
          }
         }
          return (
            <tr key={index}>
              <td className='tdmatb' style={mautb}>{device.matb}</td>
              <td className='tdtentb' style={mautb}>{device.tentb}</td>
              <td className='tddc' style={mautb}>{device.dcip}</td>
              <td className='tdtt' style={mautb}>
                <span style={hoatdong}><i className="bi bi-circle-fill"></i></span>
                {device.trangthai}
              </td>
              <td className='tdttkn' style={mautb}>
                <span style={ketnoi}><i className="bi bi-circle-fill"></i></span>
                {device.trangthaikn} 
              </td>
              <td className='tddv' style={mautb}>
                  {Array.isArray(device.dichvu) ? (
                    <div style={{ whiteSpace: 'nowrap' }}>
                      {showFullContent[index] ? (
                        <div>
                          {device.dichvu.map((dichvuItem, dichvuIndex) => (
                            <div key={dichvuIndex}>{dichvuItem}</div>
                          ))}
                          {device.dichvu.join('').length > 15 && (
                            <span className="xemthem" onClick={() => toggleShowContent(index)}>
                              Thu gọn
                            </span>
                          )}
                        </div>
                      ) : (
                        <div>
                          {truncateText(device.dichvu.join(''), 15)}
                          {device.dichvu.join('').length > 10 && (
                            <span className="xemthem" onClick={() => toggleShowContent(index)}>
                              Xem thêm
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    truncateText(device.dichvu, 15)
                  )}
                </td>
              <td className='ctthietbi' style={mautb} onClick={() => handleDetail(device.matb)}>
                <span style={{ textDecoration: "underline", cursor: "pointer" }}>Chi tiết</span>
              </td>
              <td className='cnthietbi' style={mautb} onClick={() => handleUpdate(device.matb)}>
                <span style={{ textDecoration: "underline", cursor: "pointer" }}>Cập nhật</span>
              </td>
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