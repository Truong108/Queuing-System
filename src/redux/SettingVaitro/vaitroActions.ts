
import { collection, getDocs } from "firebase/firestore";
import api from '../../firebase/firebaseAPI';
import { Caidatvaitro } from "../../Interface/Caidatvaitro";


interface FetchVaitroSuccessAction {
  type: 'FETCH_VAITRO_SUCCESS';
  payload: Caidatvaitro[];
}

const fetchVaitroSuccess = (vaitro: Caidatvaitro[]): FetchVaitroSuccessAction => {
  return { type: 'FETCH_VAITRO_SUCCESS', payload: vaitro };
};

export const fetchVaitro = () => {
    return async (dispatch: (action: FetchVaitroSuccessAction) => void) => {
      try {
        const vaitroRef = collection(api, 'vaitro');
      
        const querySnapshot = await getDocs(vaitroRef);
        const vaitroArray: Caidatvaitro[] = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            tenvt: (doc.data() as Caidatvaitro).tenvt,
            sond: (doc.data() as Caidatvaitro).sond,
            mota: (doc.data() as Caidatvaitro).mota,
            cn: (doc.data() as Caidatvaitro).cn,
          })); 
        dispatch(fetchVaitroSuccess(vaitroArray));
      } catch (error) {
        console.error(error);
      }
    };
  };