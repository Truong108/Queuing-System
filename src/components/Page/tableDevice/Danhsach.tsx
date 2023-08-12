import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThietBi } from '../../../Interface/Thietbi';
import { fetchThietBi } from '../../../redux/deviceReducer';
import { RootState } from '../../../store/store';

const Danhsachthietbi = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchThietBi() as any);
    }, [dispatch]);   
    const devices = useSelector((state: RootState) => state.device.devices);
    return ( <>
     <div>
      <p className='danhsachtb'>Danh sách thiết bị</p>
      <table>
        <thead>
          <tr>
            <th>Mã thiết bị</th>
            <th>Tên thiết bị</th>
            <th>Địa chỉ IP</th>
            <th>Trạng thái hoạt động</th>
            <th>Trạng thái kết nối</th>
            <th>Dịch vụ sử dụng</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {devices.map((device: ThietBi) => (
            <tr key={device.id}>
              <td>{device.matb}</td>
              <td>{device.tentb}</td>
              <td>{device.dcip}</td>
              <td>{device.trangthai}</td>
              <td>{device.trangthaikn}</td>
              <td>{device.dichvu}</td>
              <td>{device.chitiet}</td>
              <td>{device.capnhat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </> 
  );
}
 
export default Danhsachthietbi;