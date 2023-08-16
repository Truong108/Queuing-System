import { useDispatch, useSelector } from "react-redux";
import { Caidatvaitro } from "../../../../Interface/Caidatvaitro";
import { useEffect, useState } from "react";
import { RootState } from "../../../../store/store";
import { fetchVaitro } from "../../../../redux/SettingVaitro/vaitroReducer";
import { Link } from "react-router-dom";
import Addvaitro from '../../../../assets/add-square.png';
import { Pagination } from "antd";
import '../../../../css/SettingHeThong/vaitro.css';

const Qlvaitro = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchVaitro() as any);
    }, [dispatch]);
    const vaitro = useSelector((state: RootState) => state.vaitro.vaitro);
    const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = vaitro.slice(startIndex, endIndex);
    return ( <>
     <div className='contect'>
      <table className='bangvaitro'>
        <thead>
          <tr>
          <th className='tenvt'>Tên vai trò</th>
            <th className='sond'>Số người dùng</th>
            <th className='mota'>Mô tả</th>
            <th className='cn'></th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((vaitro: Caidatvaitro, index) => {
             let mauvaitro = {};
             if (index % 2 === 1) {
                mauvaitro = { backgroundColor: "#FF750622" };
             }
            return(
              <tr key={vaitro.id}>
              <td className='tdmadv'
              style={mauvaitro}>{vaitro.tenvt}</td>
              <td className='tdtendv'
              style={mauvaitro}>{vaitro.sond}</td>
              <td className='tdmota'
              style={mauvaitro}>{vaitro.mota}</td>
              <Link className='tdcnhat' 
              to="/upvaitro">
              <td style={mauvaitro}>{vaitro.cn}</td>
              </Link>
            </tr>
            ); 
            })}
        </tbody>
      </table>
    </div>
    <Link to="/themvaitro">
    <div className='buttonService'>
      <img src={Addvaitro} alt='add'/>
      <p className='themdv'>Thêm Vai Trò</p>
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
      total={vaitro.length} 
    />
    </div>
    </> );
}
 
export default Qlvaitro;