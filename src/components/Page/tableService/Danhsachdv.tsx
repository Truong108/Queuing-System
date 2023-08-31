import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import '../../../css/Service/danhsachdv.css';
import Addthietbi from '../../../assets/add-square.png'
import { Pagination } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { fetchDichvu } from '../../../redux/Service/serviceReducer';
import { Dichvu } from '../../../Interface/service/Dichvu';

interface tableProps{
  statusActive: string;
  text: string;
}
const Danhsachdichvu:React.FC<tableProps> = ({statusActive, text}) => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchDichvu() as any);
    }, [dispatch]);
    const service = useSelector((state: RootState) => state.service.service);
  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  const currentPageData = [];
  for (let i = startIndex; i < Math.min(endIndex, service.length); i++) {
    currentPageData.push(service[i]);
  }
  const navigate =  useNavigate()
  const handleDetail = (id:string) =>{
      navigate(`/chitietservice/${id}`)
  }
  const hanndleUpdate = (id:string) =>{
    navigate(`/capnhatservice/${id}`)
  }
  const filter = currentPageData.filter((item) => (statusActive === "Tất cả" || item.tthd === statusActive)
  && (item.madv.includes(text))
  )
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
          {filter.map((service: Dichvu, index) => {
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
             
              <td className='chitietdichvu'
              style={mautb} onClick={() => handleDetail(service.madv)}>
                <span style={{ textDecoration: "underline", cursor: "pointer" }}>Chi tiết</span>
                </td>

              <td className='chitietdichvu'
              style={mautb} onClick={() => hanndleUpdate(service.madv)}>
                <span style={{ textDecoration: "underline", cursor: "pointer" }}>Cập nhật</span>
              </td>
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