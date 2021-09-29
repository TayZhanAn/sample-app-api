import { combineReducers } from "redux";
import userReducer from './user/userReducer'

const allReducer = combineReducers({
    user:userReducer
});

export default allReducer;