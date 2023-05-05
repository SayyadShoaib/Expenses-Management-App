import axios from "axios";
import "../CSS/History.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { totalbalance, userdata } from "../Store/action";
import moment from "moment";
function History() {
  const dispatch = useDispatch();

  const loggedInUser = useSelector((store) => {
    return store.login[0].email;
  });

  const name = useSelector((store) => {
    return store.login[0].name;
  });

  const totalvalue = useSelector((store) => {
    return store.total;
  });

  const login = useSelector((store) => {
    return store.Islogin;
  });

  const [total, setTotal] = useState(0);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/data")
      .then((res) => {
        const array = res.data.filter((ele) => ele.LoggedUser === loggedInUser);
        let t = 0;

        for (const ele of array) {
          if (ele.IncomeAmount !== undefined) {
            t = t + ele.Amount;
          } else {
            t = t + ele.Amount;
          }
        }

        setTotal(t);
        totalbalance(t, dispatch);
        setData(array);
        userdata(array, dispatch);
        // console.log(total);
      })
      .catch(() => {
        console.error();
      });
  }, []);

  return (
    <>
      {
        <div style={{ width: "50%", margin: "20px auto" }}>
          {login ? (
            <div
              style={{
                fontWeight: "500",
              }}
            >
              <b>{name}</b> your total Available balance is{" "}
              <span
                style={totalvalue < 0 ? { color: "red" } : { color: "green" }}
              >
                {totalvalue}
              </span>
            </div>
          ) : (
            <div></div>
          )}
          <br />
          {data.map((ele) => {
            const date = moment(ele.date).format("MMM Do YY");
            return (
              <div
                className="child-box"
                style={
                  ele.type === "Income"
                    ? {
                        color: "green",
                      }
                    : {
                        color: "red",
                      }
                }
              >
                <div className="child-box2">
                  <div>
                    {" "}
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                    />
                  </div>
                  <div>
                    {" "}
                    <p>{ele.source}</p>
                    <p>{ele.type}</p>
                    <p>{date}</p>
                  </div>
                </div>
                <div>{ele.Amount + " ₹"}</div>
              </div>
            );
          })}
        </div>
      }
    </>
  );
}
export default History;
