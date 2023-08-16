
import { collection, getDocs } from "firebase/firestore";
import api from '../../firebase/firebaseAPI';
import { Nhatky } from "../../Interface/Nhatky";


interface FetchNhatkySuccessAction {
  type: 'FETCH_NHATKY_SUCCESS';
  payload: Nhatky[];
}

const fetchNhatkySuccess = (nhatky: Nhatky[]): FetchNhatkySuccessAction => {
  return { type: 'FETCH_NHATKY_SUCCESS', payload: nhatky };
};

export const fetchNhatky = () => {
    return async (dispatch: (action: FetchNhatkySuccessAction) => void) => {
      try {
        const nhatkyRef = collection(api, 'nhatky');
      
        const querySnapshot = await getDocs(nhatkyRef);
        const nhatkyArray: Nhatky[] = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            tendn: (doc.data() as Nhatky).tendn,
            tgtacdong: (doc.data() as Nhatky).tgtacdong,
            ipthuchien: (doc.data() as Nhatky).ipthuchien,
            thaotacth: (doc.data() as Nhatky).thaotacth,
          })); 
        dispatch(fetchNhatkySuccess(nhatkyArray));
      } catch (error) {
        console.error(error);
      }
    };
  };