import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import '../../../css/Service/danhsachdv.css';
import Addthietbi from '../../../assets/add-square.png'
import { Pagination } from 'antd';
import { Link } from 'react-router-dom';
import { fetchDichvu } from '../../../redux/Service/serviceReducer';
import { Dichvu } from '../../../Interface/service/Dichvu';


const Danhsachdichvu = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchDichvu() as any);
    }, [dispatch]);
    const service = useSelector((state: RootState) => state.service.service);
    const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = service.slice(startIndex, endIndex);
    return ( <>
     <div className='contect'>
      <table className='bangdichvu'>
        <thead>
          <tr>
          <th className='maudichvu'>Mã dịch vụ</th>
            <th className='tendichvu'>Tên dịch vụ</th>
            <th className='mota'>Mô tả</th>
            <th className='trangthai'>Trạng thái hoạt động</th>
            <th className='chitiet'></th>
            <th className='capnhat'></th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((service: Dichvu, index) => {
             let mautb = {};
             if (index % 2 === 1) {
              mautb = { backgroundColor: "#FF750622" };
             }
             let ketnoi = {}
             if(service.tthd === "Hoạt động"){
              ketnoi = {
              color:"#FFA500",
              marginRight: "10px",
            }
             }
             if(service.tthd === "Ngưng hoạt động"){
              ketnoi= {
                color: "#FF0000",
                marginRight: "10px"
              }
             }
            return(
              <tr key={service.id}>
              <td className='tdmadv'
              style={mautb}>{service.madv}</td>
              <td className='tdtendv'
              style={mautb}>{service.tendv}</td>
              <td className='tdmota'
              style={mautb}>{service.mota}</td>
              <td className='tdtthd'
              style={mautb}><span style={ketnoi}><i className="bi bi-circle-fill"></i></span>{service.tthd}</td>
              <Link className='tdctiet'
               to="/chitietservice">
              <td style={mautb}>{service.ct}</td>
              </Link>
              <Link className='tdcnhat' 
              to="/capnhatservice">
              <td style={mautb}>{service.cn}</td>
              </Link>
            </tr>
            ); 
            })}
        </tbody>
      </table>
    </div>
    <Link to="/addservice">
    <div className='buttonService'>
      <img src={Addthietbi} alt='add'/>
      <p className='themdv'>Thêm Dịch Vụ</p>
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
      total={service.length} 
    />
    </div>
    </> 
  );
}
 
export default Danhsachdichvu;