
import { collection, getDocs } from "firebase/firestore";
import api from '../../firebase/firebaseAPI';
import { ThietBi } from "../../Interface/Thietbi";

interface FetchDevicesSuccessAction {
  type: 'FETCH_DEVICES_SUCCESS';
  payload: ThietBi[];
}

const fetchDevicesSuccess = (devices: ThietBi[]): FetchDevicesSuccessAction => {
  return { type: 'FETCH_DEVICES_SUCCESS', payload: devices };
};

export const fetchDevices = () => {
    return async (dispatch: (action: FetchDevicesSuccessAction) => void) => {
      try {
        const devicesRef = collection(api, 'thietbi');
      
        const querySnapshot = await getDocs(devicesRef);
        const devicesArray: ThietBi[] = querySnapshot.docs.map((doc) => ({
            id: (doc.data() as ThietBi).id,
            matb: (doc.data() as ThietBi).matb,
            tentb: (doc.data() as ThietBi).tentb,
            dcip: (doc.data() as ThietBi).dcip,
            trangthai: (doc.data() as ThietBi).trangthai,
            trangthaikn: (doc.data() as ThietBi).trangthaikn,
            dichvu: (doc.data() as ThietBi).dichvu,
            chitiet: (doc.data() as ThietBi).chitiet,
            capnhat: (doc.data() as ThietBi).capnhat,
          }));
          
        
        dispatch(fetchDevicesSuccess(devicesArray));
      } catch (error) {
        console.error(error);
      }
    };
  };