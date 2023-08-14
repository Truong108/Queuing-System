import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import '../../../css/Service/danhsachdv.css';
import Addthietbi from '../../../assets/add-square.png'
import { Pagination } from 'antd';
import { Link } from 'react-router-dom';
import { fetchDichvu } from '../../../redux/Service/serviceReducer';
import { Dichvu } from '../../../Interface/Dichvu';


const Danhsachthietbi = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchDichvu() as any);
    }, [dispatch]);
    const service = useSelector((state: RootState) => state.service.service);
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
          {service.map((service: Dichvu, index) => {
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
              <td style={mautb}>{service.madv}</td>
              <td style={mautb}>{service.tendv}</td>
              <td style={mautb}>{service.mota}</td>
              <td style={mautb}><span style={ketnoi}><i className="bi bi-circle-fill"></i></span>{service.tthd}</td>
              <Link className='ctiet'
               to="/chitietdevice">
              <td style={mautb}>{service.ct}</td>
              </Link>
              <Link className='cnhat' 
              to="/updevice">
              <td style={mautb}>{service.cn}</td>
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
      <p className='themtb'>Thêm Dịch Vụ</p>
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
      />
    </div>
    </> 
  );
}
 
export default Danhsachthietbi;