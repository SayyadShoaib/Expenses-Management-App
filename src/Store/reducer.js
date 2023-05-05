import { LOGIN, LOGINUSER, TOTAL, USERDATA } from "./actiontype";
const init = {
  Islogin: false,
  Issing: false,
  Iserror: false,
  data: [],
  login: [],
  total: 0,
};

function reducer(oldstate = init, action) {
  switch (action.type) {
    case LOGINUSER:
      return { ...oldstate, login: action.payload };
    case LOGIN:
      return { ...oldstate, Islogin: action.payload };
    case TOTAL:
      return { ...oldstate, total: action.payload };
    case USERDATA:
      return { ...oldstate, data: action.payload };
    default:
      return oldstate;
  }
}
export default reducer;
