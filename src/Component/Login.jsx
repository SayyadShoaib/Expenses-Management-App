import "../CSS/Login.css";
import { loginstate, LoginUser } from "../Store/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faUnlock } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useToaster, Message } from "rsuite";
import { Link } from "react-router-dom";
function Login() {
  const [logstate, setLogin] = useState({ email: "", pass: "" });
  const [signup, setSignup] = useState([]);
  const toaster = useToaster();
  useEffect(() => {
    axios
      .get("http://localhost:3000/sign")
      .then((res) => {
        setSignup(res.data);
        // console.log(res.data);
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
    // console.log(value);

    if (value.length !== 0) {
      LoginUser(value, dispatch);
      loginstate(true, dispatch);
      Navigate("/");
    } else {
      // alert("Sorry You Enter a Wrong Password");
      toaster.push(
        <Message
          type="error"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "red",
            color: "black",
            width: "20%",
            position: "absolute",
            top: "11%",
            left: "40%",
            textAlign: "center",
            fontSize: "small",
            borderRadius: "10px",
            height: "30px",
          }}
        >
          Error : Sorry You Enter a Wrong Password or Email
        </Message>
      );
    }
  };
  return (
    <>
      <div className="parent">
        <form>
          <div>
            <h2>Login</h2>
          </div>
          <div className="input">
            <FontAwesomeIcon icon={faEnvelopeOpen} />
            <input
              type="email"
              onChange={handleemail}
              placeholder="Enter Registered Email"
            />
          </div>
          <div className="input">
            <FontAwesomeIcon icon={faUnlock} />
            <input
              type="password"
              onChange={handlepassword}
              placeholder="Enter Your Password"
            />
          </div>
          <div>
            <input type="submit" onClick={hanldlesubmit} />
          </div>

          <div className="bottom">
            <div>Not a memeber?</div>

            <div>
              {" "}
              <Link to="/signup" className="second">
                Create Account
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Login;
