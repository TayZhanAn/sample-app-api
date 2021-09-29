// import { loginService } from './user/apiService';
// import { message }  from 'antd';

// export const LOGIN = 'LOGIN';

// const initialState = { login: [] }

// export default (state = initialState, action ) => {
//     switch (action.type) {
//         case LOGIN:
//             return {
//                 ...state,
//                 login: action.payload.login
//             };
//         default:
//             return state;
//     }
// };

// export const loginUser = (params) => {
//     return function (dispatch) {
//         return loginService(params).then(res => {
//             if (res && res.data){
//                 dispatch({
//                     type: LOGIN,
//                     payload: {login: res.data}
//                 })
//             }
//         }).catch(err => {
//             message.error("Unable to login");
//         })
//     }
// }