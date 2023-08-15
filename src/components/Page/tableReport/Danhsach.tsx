import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBaoCao } from "../../../redux/Report/reportReducer";
import { RootState } from "../../../store/store";
import { BaoCao } from "../../../Interface/Baocao";
import Download from '../../../assets/document-download.png'
import { Pagination } from "antd";
import '../../../css/Report/danhsachreport.css';
const Danhsachbaocao = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchBaoCao() as any);
    }, [dispatch]);
    const report = useSelector((state: RootState) => state.baocao.report);
    const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = report.slice(startIndex, endIndex);
    return ( <>
    <div className='totalbaocao'>
      <table className='bangbaocao'>
        <thead>
          <tr>
          <th className='maudichvu'>Số thứ tự</th>
            <th className='tendichvu'>Tên dịch vụ</th>
            <th className='mota'>Thời gian cấp</th>
            <th className='trangthai'>Tình trạng</th>
            <th className='chitiet'>Nguồn cấp</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((report: BaoCao, index) => {
             let maubaocao = {};
             if (index % 2 === 1) {
                maubaocao = { backgroundColor: "#FF750622" };
             }
             let tinhtrang = {}
             if(report.tt === "Đã sử dụng"){
                tinhtrang = {
              color:"#7E7D88",
              marginRight: "10px",
            }
             }
             if(report.tt === "Đang chờ"){
                tinhtrang= {
                color: "#4277FF",
                marginRight: "10px"
              }
             }
             if(report.tt === "Bỏ qua"){
                tinhtrang= {
                  color: "#E73F3F",
                  marginRight: "10px"
                }
               }
            return(
              <tr key={report.id}>
              <td className='tdmadv'
              style={maubaocao}>{report.stt}</td>
              <td className='tdtendv'
              style={maubaocao}>{report.tendv}</td>
              <td className='tdmota'
              style={maubaocao}>{report.tgcap}</td>
              <td className='tdtthd'
              style={maubaocao}><span style={tinhtrang}><i className="bi bi-circle-fill"></i></span>{report.tt}</td>
              <td className='tdtthd'
              style={maubaocao}>{report.ncap}</td>
            </tr>
            ); 
            })}
        </tbody>
      </table>
    </div>
    <div className='download'>
      <img src={Download} alt='add'/>
      <p className='taive'>Tải về</p>
    </div>
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
      total={report.length} 
    />
    </div>
    </> 
    );
}
 
export default Danhsachbaocao;