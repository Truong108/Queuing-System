/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBaoCao } from "../../../redux/Report/reportReducer";
import { RootState } from "../../../store/store";
import { BaoCao } from "../../../Interface/Baocao";
import Download from '../../../assets/document-download.png'
import { Pagination } from "antd";
import '../../../css/Report/danhsachreport.css';
import dropdowns from '../../../assets/arrow-right.png';

const Danhsachbaocao = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchBaoCao() as any);
    }, [dispatch]);
    const report = useSelector((state: RootState) => state.baocao.report);
    const itemsPerPage = 9;
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
          <th className='stt'>Số thứ tự
          <div className="dropdown" 
          style={{ 
            display: 'inline-block',
            float: 'right'
          }}>
            <img src={dropdowns} 
            id="dropdownMaTB" 
            data-bs-toggle="dropdown" 
            aria-haspopup="true" 
            aria-expanded="false" 
            alt="" 
            />
            <div className="dropdown-menu dropdown-menu-right" 
            aria-labelledby="dropdownMaTB"
            style={{ maxHeight: '180px', overflowY: 'auto'}}
            >
              <a className="dropdown-item">Tất cả</a>
              <a className="dropdown-item">2010001</a>
              <a className="dropdown-item">2010002</a>
              <a className="dropdown-item">2010003</a>
              <a className="dropdown-item">2010004</a>
              <a className="dropdown-item">2010005</a>
              <a className="dropdown-item">2010006</a>
              <a className="dropdown-item">2010007</a>
              <a className="dropdown-item">2010008</a>
              <a className="dropdown-item">2010009</a>
              <a className="dropdown-item">20100010</a>
              <a className="dropdown-item">20100011</a>
            </div>
          </div>
          </th>
            <th className='tendv'>Tên dịch vụ
            <div className="dropdown" 
          style={{ 
            display: 'inline-block',
            float: 'right'
          }}>
            <img src={dropdowns} 
            id="dropdownMaTB" 
            data-bs-toggle="dropdown" 
            aria-haspopup="true" 
            aria-expanded="false" 
            alt="" 
            />
             <div className="dropdown-menu dropdown-menu-right" 
             aria-labelledby="dropdownMaTB" 
             style={{ maxHeight: '170px', overflowY: 'auto' }}>
               <a className="dropdown-item">
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center' 
                  }}>
                  <span style={{ marginRight: '10px' }}>Tất cả</span>
                  <input type="checkbox" 
                  style={{marginTop: '6px'}}
                  className="align-self-start" 
                  />
                </div>
              </a>
              <a className="dropdown-item">
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center' 
                  }}>
                  <span style={{ marginRight: '10px' }}>Khám tim mạch</span>
                  <input type="checkbox" 
                  style={{marginTop: '6px'}}
                  className="align-self-start" 
                  />
                </div>
              </a>
              <a className="dropdown-item">
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center' 
                  }}>
                  <span style={{ marginRight: '10px' }}>Răng hàm mặt</span>
                  <input 
                  type="checkbox" 
                  className="align-self-start" 
                  style={{marginTop: '6px'}}
                  />
                </div>
              </a>
              <a className="dropdown-item">
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center' }}>
                  <span style={{ marginRight: '10px' }}>Khám sản - phụ khoa</span>
                  <input 
                  type="checkbox" 
                  className="align-self-start"
                  style={{marginTop: '6px'}} 
                  />
                </div>
              </a>
              <a className="dropdown-item">
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center' 
                  }}>
                  <span style={{ marginRight: '10px' }}>Tai mũi họng</span>
                  <input 
                  type="checkbox" 
                  className="align-self-start"
                  style={{marginTop: '6px'}} 
                  />
                </div>
              </a>
              <a className="dropdown-item">
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center' 
                  }}>
                  <span style={{ marginRight: '10px' }}>Khám tổng quát</span>
                  <input 
                  type="checkbox" 
                  className="align-self-start" 
                  style={{marginTop: '6px'}}
                  />
                </div>
              </a>
              <a className="dropdown-item">
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center' 
                  }}>
                  <span style={{ marginRight: '10px' }}>Khám hô hấp</span>
                  <input 
                  type="checkbox" 
                  className="align-self-start" 
                  style={{marginTop: '6px'}}
                  />
                </div>
              </a>
            </div>
          </div>
          </th>
            <th className='tgcap'>Thời gian cấp
            <div className="dropdown" 
          style={{ 
            display: 'inline-block',
            float: 'right'
          }}>
            <img src={dropdowns} 
            id="dropdownMaTB" 
            data-bs-toggle="dropdown" 
            aria-haspopup="true" 
            aria-expanded="false" 
            alt="" 
            />
            <div className="dropdown-menu dropdown-menu-right" 
            aria-labelledby="dropdownMaTB"
            style={{ maxHeight: '180px', overflowY: 'auto'}}
            >
              <a className="dropdown-item">Tất cả</a>
              <a className="dropdown-item">07:20 - 07/10/2021</a>
              <a className="dropdown-item">07:20 - 07/09/2023</a>
              <a className="dropdown-item">07:20 - 07/10/2023</a>
              <a className="dropdown-item">07:20 - 07/10/2021</a>
              <a className="dropdown-item">07:20 - 07/02/2022</a>
              <a className="dropdown-item">05:20 - 07/05/2022</a>
              <a className="dropdown-item">07:20 - 07/07/2022</a>
              <a className="dropdown-item">07:20 - 07/08/2022</a>
              <a className="dropdown-item">07:20 - 07/02/2023</a>
              <a className="dropdown-item">07:20 - 07/04/2023</a>
              <a className="dropdown-item">07:20 - 07/06/2023</a>
            </div>
          </div>
            </th>
        <th className='tt'>Tình trạng
          <div className="dropdown" 
          style={{ 
            display: 'inline-block',
            float: 'right'
          }}>
            <img src={dropdowns} 
            id="dropdownMaTB" 
            data-bs-toggle="dropdown" 
            aria-haspopup="true" 
            aria-expanded="false" 
            alt="" 
            />
            <div className="dropdown-menu dropdown-menu-right" 
            aria-labelledby="dropdownMaTB"
            >
              <a className="dropdown-item">Tất cả</a>
              <a className="dropdown-item">Đang chờ</a>
              <a className="dropdown-item">Đã sử dụng</a>
              <a className="dropdown-item">Bỏ qua</a>
            </div>
          </div>
        </th>
        <th className='ncap'>Nguồn cấp
        <div className="dropdown" 
          style={{ 
            display: 'inline-block',
            float: 'right'
          }}>
            <img src={dropdowns} 
            id="dropdownMaTB" 
            data-bs-toggle="dropdown" 
            aria-haspopup="true" 
            aria-expanded="false" 
            alt="" 
            />
            <div className="dropdown-menu dropdown-menu-right" 
            aria-labelledby="dropdownMaTB"
            >
              <a className="dropdown-item">Tất cả</a>
              <a className="dropdown-item">Kiosk</a>
              <a className="dropdown-item">Hệ thống</a>
            </div>
          </div>
        </th>
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