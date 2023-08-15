
import { collection, getDocs } from "firebase/firestore";
import api from '../../firebase/firebaseAPI';
import { BaoCao } from "../../Interface/Baocao";

interface FetchReportSuccessAction {
  type: 'FETCH_REPORT_SUCCESS';
  payload: BaoCao[];
}

const fetchReportSuccess = (report: BaoCao[]): FetchReportSuccessAction => {
  return { type: 'FETCH_REPORT_SUCCESS', payload: report };
};

export const fetchReport = () => {
    return async (dispatch: (action: FetchReportSuccessAction) => void) => {
      try {
        const reportRef = collection(api, 'baocao');
      
        const querySnapshot = await getDocs(reportRef);
        const reportArray: BaoCao[] = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            stt: (doc.data() as BaoCao).stt,
            tendv: (doc.data() as BaoCao).tendv,
            tgcap: (doc.data() as BaoCao).tgcap,
            tt: (doc.data() as BaoCao).tt,
            ncap: (doc.data() as BaoCao).ncap,
          }));
        dispatch(fetchReportSuccess(reportArray));
      } catch (error) {
        console.error(error);
      }
    };
  };