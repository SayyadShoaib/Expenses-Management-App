import "../CSS/Login.css";
import { loginstate, LoginUser } from "../Store/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faUnlock } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function Login() {
  const [logstate, setLogin] = useState({ email: "", pass: "" });
  const [signup, setSignup] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/sign")
      .then((res) => {
        setSignup(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const handleemail = (e) => {
    const email = e.target.value;
    setLogin({ email });
  };
  // const singup = useSelector((store) => {
  //   return store.signup;
  // });

  const handlepassword = (e) => {
    const pass = e.target.value;
    setLogin({ ...logstate, pass });
  };
  const hanldlesubmit = (e) => {
    e.preventDefault();

    const value = signup.filter((ele) => {
      // console.log(ele);
      if (ele.email === logstate.email && ele.pass === logstate.pass) {
        return ele;
      }
    });

    if (value.length !== 0) {
      LoginUser(value, dispatch);
      loginstate(true, dispatch);
      Navigate("/");
    } else {
      alert("Sorry You Enter a Wrong Password");
    }
  };
  return (
    <>
      <div>
        <form>
          <div>
            <h2>Login</h2>
          </div>
          <div className="input">
            <FontAwesomeIcon icon={faEnvelopeOpen} />
            <input type="email" onChange={handleemail} />
          </div>
          <div className="input">
            <FontAwesomeIcon icon={faUnlock} />
            <input type="password" onChange={handlepassword} />
          </div>
          <div>
            <input type="submit" onClick={hanldlesubmit} />
          </div>
        </form>
      </div>
    </>
  );
}
export default Login;
