import "../CSS/Signup.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup_data, signup_one } from "../Store/action";
import axios from "axios";
function Signup() {
  const [state, setState] = useState({ name: "", email: "", password: "" });
  const Navigate = useNavigate();
  const login = (value, event) => {
    if (value === "name") {
      const name = event.target.value;
      setState({ name: name });
    } else if (value === "email") {
      const email = event.target.value;
      setState({ ...state, email: email });
    } else if (value === "password") {
      const pass = event.target.value;
      setState({ ...state, pass: pass });
    }
  };

  const AddSignUp = () => {
    axios
      .post("http://localhost:3000/sign", state)
      .then((res) => {
        Navigate("/login");
      })
      .catch((Error) => {
        console.log(Error);
      });
  };
  return (
    <>
      <form>
        <div>
          <h2>Sing Up</h2>
        </div>
        <input
          type="text"
          placeholder="Enter your Name"
          onChange={(event) => {
            login("name", event);
          }}
        />
        <input
          type="email"
          placeholder="Enter your Email"
          onChange={(event) => {
            login("email", event);
          }}
        />
        <input
          type="password"
          placeholder="Enter your Password"
          onChange={(event) => {
            login("password", event);
          }}
        />
        <input
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            AddSignUp();
          }}
        />
      </form>
    </>
  );
}
export default Signup;
