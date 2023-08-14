
import { collection, getDocs } from "firebase/firestore";
import api from '../../firebase/firebaseAPI';
import { Dichvu } from "../../Interface/Dichvu";

interface FetchServiceSuccessAction {
  type: 'FETCH_SERVICE_SUCCESS';
  payload: Dichvu[];
}

const fetchServiceSuccess = (service: Dichvu[]): FetchServiceSuccessAction => {
  return { type: 'FETCH_SERVICE_SUCCESS', payload: service };
};

export const fetchService = () => {
    return async (dispatch: (action: FetchServiceSuccessAction) => void) => {
      try {
        const serviceRef = collection(api, 'dichvu');
      
        const querySnapshot = await getDocs(serviceRef);
        const serviceArray: Dichvu[] = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            madv: (doc.data() as Dichvu).madv,
            tendv: (doc.data() as Dichvu).tendv,
            mota: (doc.data() as Dichvu).mota,
            tthd: (doc.data() as Dichvu).tthd,
            ct: (doc.data() as Dichvu).ct,
            cn: (doc.data() as Dichvu).cn,
          }));
          
        
        dispatch(fetchServiceSuccess(serviceArray));
      } catch (error) {
        console.error(error);
      }
    };
  };