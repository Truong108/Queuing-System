
import { collection, getDocs } from "firebase/firestore";
import api from '../../firebase/firebaseAPI';
import { Account } from "../../Interface/Taikhoan";


interface FetchAccountSuccessAction {
  type: 'FETCH_ACCOUNT_SUCCESS';
  payload: Account[];
}

const fetchAccountSuccess = (account: Account[]): FetchAccountSuccessAction => {
  return { type: 'FETCH_ACCOUNT_SUCCESS', payload: account };
};

export const fetchAccount = () => {
    return async (dispatch: (action: FetchAccountSuccessAction) => void) => {
      try {
        const accountRef = collection(api, 'taikhoan');
      
        const querySnapshot = await getDocs(accountRef);
        const accountArray: Account[] = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            tendn: (doc.data() as Account).tendn,
            ht: (doc.data() as Account).ht,
            sodt: (doc.data() as Account).sodt,
            mail: (doc.data() as Account).mail,
            vt: (doc.data() as Account).vt,
            tthd: (doc.data() as Account).tthd,
            cn: (doc.data() as Account).cn,
          })); 
        dispatch(fetchAccountSuccess(accountArray));
      } catch (error) {
        console.error(error);
      }
    };
  };