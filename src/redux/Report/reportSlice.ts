import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../store/store'; // Đảm bảo đường dẫn đúng
import api from '../../firebase/firebaseAPI'; // Đảm bảo đường dẫn đúng
import { collection, getDocs } from "firebase/firestore";
import { BaoCao } from '../../Interface/Baocao';

interface ReportState {
  report: BaoCao[];
}

const initialState: ReportState = {
  report: [],
};

const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
    fetchReportSuccess(state, action: PayloadAction<BaoCao[]>) {
      state.report = action.payload;
    },
  },
});

export const { fetchReportSuccess } = reportSlice.actions;
export default reportSlice.reducer;

export const fetchReport = (): AppThunk => async (dispatch) => {
  try {
    const reportRef = collection(api, 'baocao');
    const querySnapshot = await getDocs(reportRef);
    const reportArray: BaoCao[] = querySnapshot.docs.map((doc) => ({
        firebaseId: doc.id,
        ...doc.data() as BaoCao,
      }));
    dispatch(fetchReportSuccess(reportArray));
  } catch (error) {
    console.error(error);
  }
};
