import { CaretRightOutlined, SearchOutlined } from "@ant-design/icons";
import Personal from "../Personal";
import { Link } from "react-router-dom";
import '../../../css/Service/chitiet.css';
import { fetchDichvu } from "../../../redux/Service/serviceReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../../../store/store";
import { DatePicker, DatePickerProps, Input, InputNumber, Pagination, Select, Space } from "antd";
import Edit from '../../../assets/Edit Square.png'
import Back from '../../../assets/back-square.png'
import { Chitiet } from "../../../Interface/service/Chitiet";
import { fetchChitietDichvu } from "../../../redux/Service/chitietReducer";

const DetailService = () => {
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchDichvu() as any);
    }, [dispatch]);
    const serviceInfo = useSelector((state: RootState) => state.service.service[0]);
    const handleChange = (value: string) => {
      console.log(`selected ${value}`);
    };
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
      console.log(date, dateString);
    };
    useEffect(() => {
      dispatch(fetchChitietDichvu() as any);
    }, [dispatch]);
    const service = useSelector((state: RootState) => state.chitietservice.chitietservice);
    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (page: React.SetStateAction<number>) => {
      setCurrentPage(page);
    };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = service.slice(startIndex, endIndex);
    return ( <>
    <div className="themdevice">
     <div className="navtopp">
      <div className="textnavtop">
       <span>Dịch vụ</span>
    <CaretRightOutlined  style={{marginLeft: '1px'}}/>
    <Link to="/service" style={{textDecoration: 'none'}}>
    <span style={{marginLeft: '20px', color: '#7E7D88'}}
     >Danh sách dịch vụ</span>
    </Link>
     <CaretRightOutlined  style={{marginLeft: '1px'}}/>
    <span style={{marginLeft: '20px'}}
     >Chi tiết</span>
    </div>
      <Personal/>
    </div>
   </div>
   <div className="totaladdtb">
   <h2 className="tieudetb">Quản lý dịch vụ</h2>
   <div className="totalchitiet">
   <table className="bangchitiet">
    <h4 className="thongtintb">Thông tin dịch vụ</h4>
    <div className="row">
    <div className="col-md-4">
        <label htmlFor="inputEmail4" className="text-chitiet">
            Mã thiết bị: 
            <span style={{
                color: '#535261',
                fontFamily: "Nunito Sans, sans-serif",
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '24px',
                marginLeft: '55px'
            }}>
                {serviceInfo.madv}
            </span>
        </label>
    </div>
    <div className="col-md-4">
        <label htmlFor="inputEmail4" className="text-chitiet">
            Địa chỉ IP: 
            <span style={{
                color: '#535261',
                fontFamily: "Nunito Sans, sans-serif",
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '24px',
                marginLeft: '64px'
            }}>
                {serviceInfo.tendv}
            </span>
        </label>
    </div>
    <div className="col-md-4">
        <label htmlFor="inputEmail4" className="text-chitiet">
            Tên thiết bị: 
            <span style={{
                color: '#535261',
                fontFamily: "Nunito Sans, sans-serif",
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '24px',
                marginLeft: '50px'
            }}>
                {serviceInfo.mota}
            </span>
        </label>
    </div>
    </div>
    <h4 className="thongtintb">Quy tắc cấp số</h4>
    <div className="check">
      <Space>
        <div className="checkk">
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Tăng tự động:
          </label>
        </div>
          <Space>
            <InputNumber min={0} defaultValue={0} />
            <span>Đến</span>
          <InputNumber max={9999} defaultValue={9999} />
          </Space>
        </Space>
      </div>
      <div className="check">
        <Space>
        <div className="checkk">
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Prefix:
          </label>
        </div>
      <InputNumber className="inputchitiet" min={0} defaultValue={0} />
        </Space>
      </div>
      <div className="check">
        <Space>
        <div className="checkk">
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Reset mỗi ngày
          </label>
        </div>
        </Space>
      </div>
      <span style={{
        marginLeft: '32px'
      }}
      >Ví dụ: 201-2001</span>
   </table>
   <table className="bangchitiet2">
   <div className="tongbangct">
      <div className="trangthaihdct">
      <p>Trạng thái</p>
      <Space wrap> 
      <Select
        defaultValue="Tất cả"
        style={{ 
          width: 200, 
          marginLeft: '30px',
          marginRight: '30px' 
        }}
        onChange={handleChange}
        options={[
          { value: 'Tất cả', label: 'Tất cả' },
          { value: 'Đã hoàn thành', label: 'Đã hoàn thành' },
          { value: 'Đã thực hiện', label: 'Đã thực hiện' },
          { value: 'Vắng', label: 'Vắng' }
        ]}
      />
       </Space>
      </div>
      <div className="thoigianct">
        <p>Chọn thời gian</p>
        <Space direction="vertical">
          <DatePicker onChange={onChange} />
        </Space>
        <CaretRightOutlined />
        <Space direction="vertical">
          <DatePicker onChange={onChange} />
        </Space>
      </div>
      <div className="tukhoact">
        <p>Từ khóa</p>
        <nav className="navbarct">
        <div className="container-fluid">
          <form className="d-flex" role="search">
          <div className="serchitiet">
          <Input
            className="timkiem"
            type="search"
            placeholder="Search"
            aria-label="Search"
            suffix={<SearchOutlined 
            style={{color: '#FF7506'}}
            />}
          />
        </div>
          </form>
        </div>
      </nav>
      </div>
    </div>
    <table className='bangdichvuchitiet'>
        <thead>
          <tr>
           <th className='sothutu'>Số thứ tự</th>
            <th className='tthai'>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((chitietservice: Chitiet, index) => {
             let mauchitietdv = {};
             if (index % 2 === 1) {
              mauchitietdv = { backgroundColor: "#FF750622" };
             }
             let trangthai = {}
             if(chitietservice.tt === "Đã hoàn thành"){
              trangthai = {
              color:"#34CD26",
              marginRight: "10px",
            }
             }
             if(chitietservice.tt === "Đang thực hiện"){
              trangthai= {
                color: "#5490EB",
                marginRight: "10px"
              }
             }
             if(chitietservice.tt === "Vắng"){
              trangthai= {
                color: "#535261",
                marginRight: "10px"
              }
             }
            return(
              <tr key={chitietservice.id}>
              <td className='sottchitietdv'
              style={mauchitietdv}>{chitietservice.sott}</td>
              <td className='tthaichitiet'
              style={mauchitietdv}><span style={trangthai}><i className="bi bi-circle-fill"></i></span>{chitietservice.tt}</td>
            </tr>
            ); 
            })}
        </tbody>
      </table>
   </table>
   </div>
   <Link to="/capnhatservice">
    <div className='chitietButtun'>
      <img src={Edit} alt='add'/>
      <p className='editct'>Cập nhật <br/> danh sách</p>
    </div>
    </Link>
    <Link to="/service">
    <div className='chitietButtun2'>
      <img src={Back} alt='add'/>
      <p className='editct2'>Quay về</p>
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
        alignItems: 'flex-end',
        marginRight: '30px'
      }}
    >
      <Pagination
      showSizeChanger={false}
      current={currentPage}
      onChange={handlePageChange}
      total={service.length} 
    />
    </div>
   </div>
    </> 
  );
}
 
export default DetailService;