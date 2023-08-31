import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccount } from "../../../../redux/SettingTaikhoan/accountReducer";
import { RootState } from "../../../../store/store";
import { Link, useNavigate } from "react-router-dom";
import { Account } from "../../../../Interface/Taikhoan";
import AddAccount from '../../../../assets/add-square.png'
import { Pagination } from "antd";

interface tableProps{
  statusActive: string;
}
const Quanlytaikhoan:React.FC<tableProps> = ({statusActive}) => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchAccount() as any);
    }, [dispatch]);
    const account = useSelector((state: RootState) => state.account.account);
  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };
  
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  const currentPageData = [];
  for (let i = startIndex; i < Math.min(endIndex, account.length); i++) {
    currentPageData.push(account[i]);
  }
  const navigate =  useNavigate()
  const handleUpdate = (id: string) =>{
    navigate(`/uptaikhoan/${id}`);
  }
  const filter = currentPageData.filter((item) => (statusActive === "Tất cả" || item.vt === statusActive))
    return ( <>
     <div className='contaiaccount'>
      <table className='bangaccount'>
        <thead>
          <tr>
          <th className='tendnacount'>Tên đăng nhập</th>
            <th className='htaccount'>Họ tên</th>
            <th className='sodtaccount'>Số điện thoại</th>
            <th className='mailaccount'>Email</th>
            <th className='vtaccount'>Vai trò</th>
            <th className='tthdaccount'>Trạng thái hoạt động</th>
            <th className='cnaccount'></th>
          </tr>
        </thead>
        <tbody>
          {filter.map((account: Account, index) => {
             let mauaccount = {};
             if (index % 2 === 1) {
                mauaccount = { backgroundColor: "#FF750622" };
             }
             let tthoatdong = {}
             if(account.tthd === "Hoạt động"){
              tthoatdong = {
              color:"#34CD26",
              marginRight: "10px",
            }
             }
             if(account.tthd === "Ngưng hoạt động"){
                tthoatdong = {
                color: "#EC3740",
                marginRight: "10px"
              }
             }
            return(
              <tr key={account.id}>
              <td className='actendn'
              style={mauaccount}>{account.tendn}</td>
              <td className='acht'
              style={mauaccount}>{account.ht}</td>
              <td className='acsodt'
              style={mauaccount}>{account.sodt}</td>
              <td className='acmail'
              style={mauaccount}>{account.mail}</td>
              <td className='acvt'
              style={mauaccount}>{account.vt}</td>
              <td className='actthd'
              style={mauaccount}><span style={tthoatdong}><i className="bi bi-circle-fill"></i></span>{account.tthd}</td>
              <td className='cnthietbi' style={mauaccount} onClick={() => handleUpdate(account.tendn!)}>
                <span style={{ textDecoration: "underline", cursor: "pointer" }}>Cập nhật</span>
              </td>
            </tr>
            ); 
            })}
        </tbody>
      </table>
    </div>
    <Link to="/addtaikhoan">
    <div className='addacount'>
      <img src={AddAccount} alt='add'/>
      <p className='themtaikhoan'>Thêm<br/> Tài Khoản</p>
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
      total={account.length} 
    />
    </div>
    </> );
}
 
export default Quanlytaikhoan;