import { Link, useNavigate } from "react-router-dom";
import Capsonew from '../../../assets/add-square.png'
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCapso } from "../../../redux/GrantNumber/grantNumberReducer";
import { RootState } from "../../../store/store";
import { CapSo } from "../../../Interface/Capso";

interface tableProps{
  statusService: string;
  statusCondition: string;
  statusSource: string;
  text: string;
}
const Capso:React.FC<tableProps> = ({statusService, statusCondition, statusSource, text}) => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchCapso() as any);
    }, [dispatch]);
    const capso = useSelector((state: RootState) => state.capso.capso);
    const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = capso.slice(startIndex, endIndex);
  const navigate =  useNavigate()
  const handleDetail = (id:string) =>{
      navigate(`/chitietcapso/${id}`)
  }
  const filter = currentPageData.filter((item) => (statusService === "Tất cả" || item.tendv === statusService) 
  &&
  (statusCondition === "Tất cả" || item.tt === statusCondition)
  &&
  (statusSource === "Tất cả" || item.ncap === statusSource)
  && (item.tenkh.includes(text))
  )
    return ( <>
    <div className='contect'>
      <table className='bangdichvu'>
        <thead>
          <tr>
            <th className='stt'>STT</th>
            <th className='tenkh'>Tên khách hàng</th>
            <th className='tendvu'>Tên dịch vụ </th>
            <th className='tgcap'>Thời gian cấp</th>
            <th className='hsdung'>Hạn sử dụng</th>
            <th className='tthai'>Trạng thái</th>
            <th className='ncap'>Nguồn cấp</th>
            <th className='chtiet'></th>
          </tr>
        </thead>
        <tbody>
          {filter.map((capso: CapSo, index) => {
             let maucapso = {};
             if (index % 2 === 1) {
              maucapso = { backgroundColor: "#FF750622" };
             }
             let trangthai = {}
             if(capso.tt === "Đang chờ"){
                trangthai = {
              color:"#4277FF",
              marginRight: "10px",
            }
             }
             if(capso.tt === "Đã sử dụng"){
                trangthai= {
                color: "#7E7D88",
                marginRight: "10px"
              }
             }
             if(capso.tt === "Bỏ qua"){
                trangthai= {
                  color: "#E73F3F",
                  marginRight: "10px"
                }
               }
            return(
              <tr key={capso.id}>
              <td className='tdstt'
              style={maucapso}>{capso.stt}</td>
              <td className='tdtenkh'
              style={maucapso}>{capso.tenkh}</td>
              <td className='tdtendv'
              style={maucapso}>{capso.tendv}</td>
               <td className='tdtgcap'
              style={maucapso}>{capso.tgcap}</td>
               <td className='tdhsdung'
              style={maucapso}>{capso.hsdung}</td>
              <td className='tdtthai'
              style={maucapso}><span style={trangthai}><i className="bi bi-circle-fill"></i></span>{capso.tt}</td>
              <td className="tdncap"
              style={maucapso}>{capso.ncap}</td>
               <td className='tdchtiet' style={maucapso} onClick={() => handleDetail(capso.stt)}>
                <span style={{ textDecoration: "underline", cursor: "pointer" }}>Chi tiết</span>
              </td>
            </tr>
            ); 
            })}
        </tbody>
      </table>
    </div>
    <Link to="/capsonew">
    <div className='capsonew'>
      <img src={Capsonew} alt='add'/>
      <p className='capsomoi'>Cấp số mới</p>
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
      total={capso.length} 
    />
    </div>
    </> 
    );
}
 
export default Capso;