import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNhatky } from "../../../redux/SettingNhatky/nhatkyReducer";
import { RootState } from "../../../store/store";
import { Pagination } from "antd";
import { Nhatky } from "../../../Interface/Nhatky";

const NhatKy = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchNhatky() as any);
    }, [dispatch]);
    const nhatky = useSelector((state: RootState) => state.nhatky.nhatky);
    const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = nhatky.slice(startIndex, endIndex);
    return ( <>
         <div className='contect'>
      <table className='bangnhatky'>
        <thead>
          <tr>
          <th className='tenlogin'>Tên đăng nhập</th>
            <th className='tgtacdong'>Thời gian tác động</th>
            <th className='ipthuchien'>IP thực hiện</th>
            <th className='thaotacth'>Thao tác thực hiện</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((nhatky: Nhatky, index) => {
             let maunhatky = {};
             if (index % 2 === 1) {
                maunhatky = { backgroundColor: "#FF750622" };
             }
            return(
              <tr key={nhatky.id}>
              <td className='tennhatky'
              style={maunhatky}>{nhatky.tendn}</td>
              <td className='tgnhatky'
              style={maunhatky}>{nhatky.tgtacdong}</td>
              <td className='ipnhatky'
              style={maunhatky}>{nhatky.ipthuchien}</td>
              <td className="thaotacnhatky"
              style={maunhatky}>{nhatky.thaotacth}</td>
            </tr>
            ); 
            })}
        </tbody>
      </table>
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
      total={nhatky.length} 
    />
    </div>
    </> );
}
 
export default NhatKy;