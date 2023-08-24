import { CaretRightOutlined } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Link, useNavigate, useParams } from "react-router-dom";
import Personal from "../../Personal";
import '../../../../css/SettingHeThong/vaitro.css';
import { Caidatvaitro } from "../../../../Interface/Caidatvaitro";
import { useEffect, useState } from "react";
import { RootState } from "../../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { updateVaitro } from "../../../../redux/SettingVaitro/vaitroSlice";
import { fetchVaitro } from "../../../../redux/SettingVaitro/vaitroReducer";
import { addNhatky } from "../../../../redux/SettingNhatky/nhatkySlice";

interface CheckboxValues {
  [key: string]: boolean;
}
const Capnhatvaitro = () => {
  const user = localStorage.getItem("user")
  const time = new Date()
  if(user){
    var account = JSON.parse(user)
  }
  const [dataInfo, setDataInfo] = useState<Caidatvaitro>({
    tenvt: "",
    sond: "",
    mota: "",
    cn: "",
  })
  const nhatKi = ({
    ipthuchien:"192.168.3.1",
    tendn: account.ht,
    tgtacdong: time.toLocaleString(),
    thaotacth: `Cập nhật vai trò ${dataInfo.tenvt}`
  })
  const {id} = useParams()
  const [vaitroUpdate, setVaitroUpdate] = useState<any>()
  const dispatch = useDispatch();
    const vaitroUp = useSelector((state: RootState) => state.vaitro.vaitro);
    const navigate = useNavigate()
    const handleUpdate = async () =>{
      await dispatch(updateVaitro(dataInfo) as any)
      await dispatch(addNhatky(nhatKi) as any)
      navigate("/systemInstallation")
    }
    useEffect(() => {
        // eslint-disable-next-line eqeqeq
        const data = vaitroUp.find((item) => item.tenvt == id)
        setDataInfo(data!)
        setVaitroUpdate(data)
      dispatch(fetchVaitro() as any);
    }, [dispatch, id]);
    const [checkboxValues, setCheckboxValues] = useState<CheckboxValues>({
      'Chức năng X, Chức năng Y, Chức năng Z': false,
      'Chức năng X': false,
      'Chức năng Y': false,
      'Chức năng Z': false,
      'Chức năng A, Chức năng B, Chức năng C': false,
      'Chức năng A': false,
      'Chức năng B': false,
      'Chức năng C': false,
    });
  
    const handleCheckboxChangeA = (checkboxNames: string[]) => {
      setCheckboxValues((prevValues: CheckboxValues) => ({
        ...prevValues,
        ...checkboxNames.reduce((accumulator, checkboxName) => {
          accumulator[checkboxName] = !prevValues[checkboxName];
          return accumulator;
        }, {} as CheckboxValues), // Sử dụng as CheckboxValues để xác định kiểu dữ liệu
      }));
      
      const selectedFunctions: string[] = [];
      Object.keys(checkboxValues).forEach(checkboxName => {
        if (checkboxValues[checkboxName]) {
          selectedFunctions.push(checkboxName);
        }
      });
    
      setDataInfo((prev) => ({
        ...prev,
        mota: selectedFunctions.join(', '),
      }));
    };
    const handleCheckboxChangeB = (checkboxNames: string[]) => {
      setCheckboxValues((prevValues: CheckboxValues) => ({
        ...prevValues,
        ...checkboxNames.reduce((accumulator, checkboxName) => {
          accumulator[checkboxName] = !prevValues[checkboxName];
          return accumulator;
        }, {} as CheckboxValues), // Sử dụng as CheckboxValues để xác định kiểu dữ liệu
      }));
      
      const selectedFunctions: string[] = [];
      Object.keys(checkboxValues).forEach(checkboxName => {
        if (checkboxValues[checkboxName]) {
          selectedFunctions.push(checkboxName);
        }
      });
    
      setDataInfo((prev) => ({
        ...prev,
        mota: selectedFunctions.join(', '),
      }));
    };
    return ( <>
    <div className="themdevice">
     <div className="navtopp">
      <div className="textnavtop">
       <span>Cài đặt hệ thống</span>
    <CaretRightOutlined  style={{marginLeft: '1px'}}/>
    <Link to="/systemInstallation" style={{textDecoration: 'none'}}>
    <span style={{marginLeft: '20px', color: '#7E7D88'}}
     >Quản lý vai trò</span>
    </Link>
     <CaretRightOutlined  style={{marginLeft: '1px'}}/>
    <span style={{marginLeft: '20px'}}
     >Cập nhật vai trò</span>
    </div>
      <Personal/>
    </div>
   </div>
   <div className="totaladdvaitro">
   <h2 className="dsvaitro">Danh sách vai trò</h2>
   <table className="bangvaitro">
  <div className="containerThemvaitro">
   <div style={{marginTop: '20px'}}
   className="row">
     <h4 className="thongtinvaitro">Thông tin vai trò</h4>
    <div className="col-md-6">
      <label htmlFor="inputEmail4" className="tenvaitro">Tên vai trò*</label>
      <Input 
        placeholder="Nhập tên vai trò"
        className="form-matb"
        value={dataInfo?.tenvt}
        onChange={(e)=> setDataInfo((prev)=> ({...prev, tenvt:e.target.value}))}
      />
    </div>
    <div className="col-md-6 input-container">
      <label htmlFor="inputEmail4" className="motavaitro">Mô tả:</label>
      <TextArea
      className="textinput"
        placeholder="Nhập mô tả"
        autoSize={{ minRows: 5}}
        style={{ width: '190%', maxWidth: '600px' }}
        value={dataInfo?.mota}
        onChange={(e)=> setDataInfo((prev)=> ({...prev, mota:e.target.value}))}
      />
    </div>
    <p className="thongtinbb">* Là trường thông tin bắt buộc</p>
  </div>
   <div style={{marginTop: '60px'}}
   className="row">
   <h4 className="phanquyen">Phần quyền chức năng
   <span
   style={{ 
    color: '#FF4747', 
    paddingBottom: '10px',
    marginLeft: '10px'
    }}  
   >*</span>
   </h4>
   <div className="totalrow">
   <div className="row">
   <p className="nhomcn">Nhóm chức năng A</p>
    <div className="cbox">
      <Space>
        <div className="form-check">
          <input 
           className="form-check-input custom-checkbox" 
          type="checkbox" 
          value="" 
          id="flexCheckDefault"
          checked={checkboxValues['Chức năng X, Chức năng Y, Chức năng Z']}
          onMouseDown={() => handleCheckboxChangeA(['Chức năng X', 'Chức năng Y', 'Chức năng Z'])}
          onMouseUp={() => handleCheckboxChangeA([])}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Tất cả
          </label>
        </div>
        </Space>
      </div>
      <div className="cbox">
      <Space>
        <div className="form-check">
          <input 
         className="form-check-input custom-checkbox"
          type="checkbox" 
          value="" id="flexCheckDefault"
          checked={checkboxValues['Chức năng X']}
          onMouseDown={() => handleCheckboxChangeA(['Chức năng X'])}
          onMouseUp={() => handleCheckboxChangeA([])}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Chức năng x
          </label>
        </div>
        </Space>
      </div>
      <div className="cbox">
      <Space>
        <div className="form-check">
          <input 
        className="form-check-input custom-checkbox"
          type="checkbox" 
          value="" 
          id="flexCheckDefault"
          checked={checkboxValues['Chức năng Y']}
          onMouseDown={() => handleCheckboxChangeA(['Chức năng Y'])}
          onMouseUp={() => handleCheckboxChangeA([])}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Chức năng y
          </label>
        </div>
        </Space>
      </div>
      <div className="cbox">
      <Space>
        <div className="form-check">
          <input 
          className="form-check-input custom-checkbox" 
          type="checkbox" value="" 
          id="flexCheckDefault"
          checked={checkboxValues['Chức năng Z']}
          onMouseDown={() => handleCheckboxChangeA(['Chức năng Z'])}
          onMouseUp={() => handleCheckboxChangeA([])}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Chức năng z
          </label>
        </div>
        </Space>
      </div>
   </div>
   <div className="row">
   <p className="nhomcn">Nhóm chức năng B</p>
    <div className="cbox">
      <Space>
        <div className="form-check">
          <input 
          className="form-check-input custom-checkbox" 
          type="checkbox" 
          value="" 
          id="flexCheckDefault"
          checked={checkboxValues['Chức năng A, Chức năng B, Chức năng C']}
          onMouseDown={() => handleCheckboxChangeB(['Chức năng A', 'Chức năng B', 'Chức năng C'])}
          onMouseUp={() => handleCheckboxChangeA([])}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Tất cả
          </label>
        </div>
        </Space>
      </div>
      <div className="cbox">
      <Space>
        <div className="form-check">
          <input  className="form-check-input custom-checkbox" 
          type="checkbox" value="" 
          checked={checkboxValues['Chức năng A']}
          onMouseDown={() => handleCheckboxChangeB(['Chức năng A'])}
          onMouseUp={() => handleCheckboxChangeA([])}
          id="flexCheckDefault"/>
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Chức năng a
          </label>
        </div>
        </Space>
      </div>
      <div className="cbox">
      <Space>
        <div className="form-check">
          <input  className="form-check-input custom-checkbox" 
          type="checkbox" value="" 
          checked={checkboxValues['Chức năng B']}
          onMouseDown={() => handleCheckboxChangeB(['Chức năng B'])}
          onMouseUp={() => handleCheckboxChangeA([])}
          id="flexCheckDefault"/>
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Chức năng b
          </label>
        </div>
        </Space>
      </div>
      <div className="cbox">
      <Space>
        <div className="form-check">
          <input  className="form-check-input custom-checkbox" 
           type="checkbox" value="" 
           checked={checkboxValues['Chức năng C']}
           onMouseDown={() => handleCheckboxChangeB(['Chức năng C'])}
           onMouseUp={() => handleCheckboxChangeA([])}
          id="flexCheckDefault"/>
          <label className="form-check-label" htmlFor="flexCheckDefault">
          Chức năng c
          </label>
        </div>
        </Space>
      </div>
   </div>
   </div>
   </div>
   </div>
   </table>
   <Space wrap 
   style={{ 
    marginTop: '30px', 
    marginLeft: '530px'
    }}>
   <Link to="/systemInstallation">
   <Button danger className="huybo">Hủy bỏ</Button>
   </Link>
    <Button danger className="nutaddtb"
    style={{color: '#FFF', marginLeft: '25px'}}
    onClick={handleUpdate}
    >Cập nhật</Button>
    </Space>
   </div>
    </> );
}
 
export default Capnhatvaitro;