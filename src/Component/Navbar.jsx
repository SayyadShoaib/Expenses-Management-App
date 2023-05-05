import "../CSS/Navbar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginstate } from "../Store/action";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const login = useSelector((store) => {
    return store.Islogin;
  });
  const sign = useSelector((store) => {
    return store.Issing;
  });

  if (login) {
  }
  // const loggedInUsername = useSelector((store) => {
  //   return store.login[0].name;
  // });

  return (
    <>
      <nav>
        <div className="child">
          <div>
            <Link to="/" className="Link">
              Tracker
            </Link>
          </div>

          <div>
            <Link to="/analytic" className="Link">
              Analytics
            </Link>
          </div>
          <div>
            <Link to="/history" className="Link">
              History
            </Link>
          </div>
        </div>
        <div className="child">
          {login ? (
            <div>
              <Link
                to="/logout"
                className="Link"
                onClick={() => {
                  loginstate(false, dispatch);
                }}
              >
                Logout
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/login" className="Link">
                login
              </Link>
            </div>
          )}

          {sign ? (
            ""
          ) : (
            <div>
              <Link to="/signup" className="Link">
                Signup
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
