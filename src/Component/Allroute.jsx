import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Login from "./Login";
import History from "./History";
import Singup from "./Singup";
import Analytics from "./Analytics";
import Tracker from "./Tracker";
import Logout from "./Logout";
import Notlogin from "./Notlogin";
function Allroute() {
  const login = useSelector((store) => {
    return store.Islogin;
  });
  return (
    <>
      <Routes>
        {login ? (
          <Route path="/" element={<Tracker />} />
        ) : (
          <Route path="/" element={<Notlogin />} />
        )}
        {login ? (
          <Route path="/history" element={<History />} />
        ) : (
          <Route path="/history" element={<Notlogin />} />
        )}

        <Route path="/analytic" element={<Analytics />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Singup />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}
export default Allroute;
