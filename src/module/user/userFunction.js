import { loginService } from './apiService';
import { message }  from 'antd';

export const loginUser = (params) => {
    return function (dispatch) {
        return loginService(params).then(res => {
            if (res && res.data){
                dispatch({
                    type: 'setUser',
                    data: res.data
                })
                localStorage.setItem('user', JSON.stringify(res.data));
            }
        }).catch(err => {
            console.log(err);
            message.error("Unable to login");
        })
    }
}