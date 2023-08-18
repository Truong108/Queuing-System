// import { collection, getDocs } from "firebase/firestore";
// import api from '../../firebase/firebaseAPI';
// import { Login } from "../../Interface/Login";

// interface FetchLoginSuccessAction {
//   type: 'FETCH_LOGIN_SUCCESS';
//   payload: Login[];
// }

// const fetchLoginSuccess = (login: Login[]): FetchLoginSuccessAction => {
//   return { type: 'FETCH_LOGIN_SUCCESS', payload: login };
// };

// export const fetchLogin = () => {
//     return async (dispatch: (action: FetchLoginSuccessAction) => void) => {
//       try {
//         const loginRef = collection(api, 'dangnhap');
//         const querySnapshot = await getDocs(loginRef);
//         const loginFrom: Login[] = querySnapshot.docs.map((doc) => ({
//             tennd: (doc.data() as Login).tennd,
//             tendn: (doc.data() as Login).tendn,
//             sodt: (doc.data() as Login).sodt,
//             mk: (doc.data() as Login).mk,
//             mail: (doc.data() as Login).mail,
//             vaitro: (doc.data() as Login).vaitro,
//           }));
//         dispatch(fetchLoginSuccess(loginFrom));
//       } catch (error) {
//         console.error(error);
//       }
//     };
//   };
export const authACtions = () =>{
  return (
    <div></div>
  )
}