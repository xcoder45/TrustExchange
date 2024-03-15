import React, { useEffect, useState } from "react";
import { StyleRoot } from "radium";
import Button from "@mui/material/Button";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadBlockchainData, loadWeb3 } from "../../Helpers/Web3Helpers";
import logo from "../Screens/images/logo.png";
export default function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const eVote = useSelector((state) => state.eVote.eVote);
  const account = useSelector((state) => state.account.account);
  const navigate = useNavigate();
  const login = async () => {
    setLoading(true);
    if (!email || !password || !address) {
      alert("please fill all details");
      setLoading(false);
      return;
    }

    if (address !== account) {
      alert("please enter valid address");
      setLoading(false);
      return;

    }


    try {
      const res = await eVote.methods.usersList(email).call();

      if (res.password === password) {
        navigate("/UserHome/Voter-Registration");
        localStorage.setItem("email", email);
      } else {
        alert("wrong user credintinals or please signup");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert(error.message);
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    loadWeb3();
  }, []);
  useEffect(() => {
    loadBlockchainData(dispatch);
  }, [dispatch]);

  return (
    <StyleRoot>
      <div style={rootDiv}>
        <div style={leftDiv}>
          <img
            alt="background"
            src={require("../../voting2-removebg.png")}
            height={"80%"}
            width={"80%"}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div style={rightDiv}>
          <img
            alt="login"
            src={logo}
            style={{ height: 200, width: 375, objectFit: "fit" }}
          />
          <div style={inputDiv}>
            <h3 style={{ color: "white", fontSize: 23 , textAlign: "center" }}><u>Login</u></h3>
            <h3 style={labels}>
              Email <span style={{ color: "red" }}>*</span>
            </h3>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputs}
              placeholder="Email"
              type="email"
            />
            <h3 style={labels}>
              Password <span style={{ color: "red" }}>*</span>
            </h3>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputs}
              placeholder="Password"
              type="password"
            />
            <h3 style={labels}>
              Address <span style={{ color: "red" }}>*</span>
            </h3>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={inputs}
              placeholder="Address"
              type="text"
            />

            <Button onClick={login} style={button} variant="contained">
              {loading ? (
                <ReactLoading
                  height={30}
                  width={30}
                  type={"spinningBubbles"}
                  color="white"
                />
              ) : (
                "Login"
              )}
            </Button>
            <Button href="/SignUp" style={create}>
              Create a new account
            </Button>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}
const rootDiv = {
  backgroundColor: "white",

  display: "flex",
  flex: 1,
  flexDirection: "row",
  height: "100vh",
  "@media (max-width: 500px)": {
    height: "100vh",
  },
};
const leftDiv = {
  backgroundColor: "white",
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width: 500px)": {
    height: "100vh",
    display: "none",
  },
};

const rightDiv = {
  backgroundColor: "orange",
  borderRadius: "10px",
  height: "100vh",
  flex: 0.8,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  "@media (max-width: 500px)": {
    height: "100vh",
    flex: 1,
  },
};

const inputDiv = {
  width: "80%",
  display: "flex",
  flexDirection: "column",
  "@media (max-width: 500px)": {},
};
const inputs = {
  backgroundColor: "white",
  display: "flex",
  padding: 15,
  borderRadius: 20,
  margin: 5,
  flex: 1,
  fontSize: 17,
  fontWeight: "bold",
  fontColor: "black",
  border: "1px solid grey",
  outline: "none",
  width: "73%",
  "@media (max-width: 500px)": {
    width: "80%",
  },
};
const labels = {
  margin: 5,
  fontWeight: "bold",
  color: "white",
};
const button = {
  width: "78%",
  display: "flex",
  borderRadius: 20,
  justifyContent: "center",
  alignItems: "center",
  marginLeft: 8,
  marginTop: 15,
  height: 43,
  backgroundColor: "green",
  "@media (max-width: 500px)": {},
};
const create = {
  fontSize: 13,
  fontWeight: "bold",
  color: "white",
  margin: 10,
  "@media (max-width: 500px)": {},
};
