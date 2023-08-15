
import { collection, getDocs } from "firebase/firestore";
import api from '../../firebase/firebaseAPI';
import { CapSo } from "../../Interface/Capso";

interface FetchCapsoSuccessAction {
  type: 'FETCH_CAPSO_SUCCESS';
  payload: CapSo[];
}

const fetchCapsoSuccess = (capso: CapSo[]): FetchCapsoSuccessAction => {
  return { type: 'FETCH_CAPSO_SUCCESS', payload: capso };
};

export const fetchCapso = () => {
    return async (dispatch: (action: FetchCapsoSuccessAction) => void) => {
      try {
        const capsoRef = collection(api, 'capso');
      
        const querySnapshot = await getDocs(capsoRef);
        const capsoArray: CapSo[] = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            stt: (doc.data() as CapSo).stt,
            tenkh: (doc.data() as CapSo).tenkh,
            tendv: (doc.data() as CapSo).tendv,
            tgcap: (doc.data() as CapSo).tgcap,
            hsdung: (doc.data() as CapSo).hsdung,
            tt: (doc.data() as CapSo).tt,
            ncap: (doc.data() as CapSo).ncap,
            ct: (doc.data() as CapSo).ct,
            sodt: (doc.data() as CapSo).sodt,
            mail: (doc.data() as CapSo).mail,
          }));
        dispatch(fetchCapsoSuccess(capsoArray));
      } catch (error) {
        console.error(error);
      }
    };
  };