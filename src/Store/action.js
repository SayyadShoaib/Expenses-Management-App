import { LOGIN, LOGINUSER, USERDATA, TOTAL } from "../Store/actiontype";

function loginstate(data, dispatch) {
  dispatch({ type: LOGIN, payload: data });
}
function LoginUser(data, dispatch) {
  dispatch({ type: LOGINUSER, payload: data });
}
function userdata(data, dispatch) {
  dispatch({
    type: USERDATA,
    payload: data,
  });
}

function totalbalance(data, dispatch) {
  dispatch({ type: TOTAL, payload: data });
}
export { loginstate, LoginUser, userdata, totalbalance };
