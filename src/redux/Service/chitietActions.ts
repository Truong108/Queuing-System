
import { collection, getDocs } from "firebase/firestore";
import api from '../../firebase/firebaseAPI';
import { Chitiet } from "../../Interface/service/Chitiet";

interface FetchChitietServiceSuccessAction {
  type: 'FETCH_CHITIET_SERVICE_SUCCESS';
  payload: Chitiet[];
}

const fetchChitietServiceSuccess = (chitietservice: Chitiet[]): FetchChitietServiceSuccessAction => {
  return { type: 'FETCH_CHITIET_SERVICE_SUCCESS', payload: chitietservice };
};

export const fetchChitietService = () => {
    return async (dispatch: (action: FetchChitietServiceSuccessAction) => void) => {
      try {
        const chitietserviceRef = collection(api, 'chitietdichvu');
      
        const querySnapshot = await getDocs(chitietserviceRef);
        const chitietserviceArray: Chitiet[] = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            sott: (doc.data() as Chitiet).sott,
            tt: (doc.data() as Chitiet).tt
          }));
        dispatch(fetchChitietServiceSuccess(chitietserviceArray));
      } catch (error) {
        console.error(error);
      }
    };
  };