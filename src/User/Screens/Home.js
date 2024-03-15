import React, { useEffect } from "react";
import { StyleRoot } from "radium";
import Button from "@mui/material/Button";
import { loadBlockchainData, loadWeb3 } from "../../Helpers/Web3Helpers";
import { useDispatch } from "react-redux";
import logo from "./images/logo.png";
import line from "./images/Line.jpg";
import lock from "./images/lock.png";
import vector from "./images/Vector.jpg";
import handcursor from "./images/handcursor.png"
import approveddelivery from "./images/approveddelivery.png";
import lowprice from "./images/lowprice.png";
import timespan from "./images/timespan.png";
import dashicons_screenoptions from "./images/dashicons_screenoptions.png";
import img from "./images/2.png";
import Vectors from "./images/Vector.png";
import Linef from "./images/Line 4.png";
import "../../Style/home.css";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    loadWeb3();
  }, []);
  useEffect(() => {
    loadBlockchainData(dispatch);
  }, [dispatch]);
  return (
    <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    href="https://fonts.googleapis.com/css?family=DM+Serif+Display&display=swap"
    rel="stylesheet"
  />
  <title>Document</title>
  {/*NAVBAR*/}
  <div>
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-links">
        <a href="/Login">Login</a>
        <a href="/SignUp">SignUp</a>
        <a href="/AdminLogin" className="admin-button">
          Admin
        </a>
      </div>
    </nav>
  </div>
  <div className="cont">
    <div className="container">
      <div className="box" />
      <div className="box2">
        <div className="box2-a">
          <img src={logo} alt="mainlogo" className="mainlogo" />
          <h2>
            The future of voting powered by <br /> &nbsp;&nbsp;&nbsp; BLOCKCHAIN
            TECHNOLOGY
          </h2>
          <br />
          <a href="/Login" className="button-login">
            Login
          </a>
          <a href="/SignUp" className="button-register">
            SignUp
          </a>
          <h3>
            Features: <span id="spin" />
          </h3>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    {/*FEATURES*/}
    <div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <div className="features-features">
          <div className="features-group1">
            <img
              alt="Line2724"
              src={line}
              className="features-line2"
            />
            <span className="features-text">Features</span>
            <div className="features-features1">
              <span className="features-text01">
                <span>Secured by 256 bit encryption</span>
              </span>
              <span className="features-text03">
                <span>Backed by ethereum based technology</span>
              </span>
              <span className="features-text05">
                <span>Verifiable transactions</span>
              </span>
              <span className="features-text07">
                <span>Easy to use</span>
              </span>
              <span className="features-text09">
                <span>Cheaper than ballot voting system</span>
              </span>
              <span className="features-text11">
                <span>Faster voting process</span>
              </span>
              <img
                alt="Lock726"
                src={lock}
                className="features-lock"
              />
              <img
                alt="SVG89"
                src={vector}
                className="features-svg"
              />
              <img
                alt="ApprovedDelivery817"
                src={approveddelivery}
                className="features-approved-delivery"
              />
              <img
                alt="HandCursor818"
                src={handcursor}
                className="features-hand-cursor"
              />
              <img
                alt="LowPrice819"
                src={lowprice}
                className="features-low-price"
              />
              <img
                alt="TimeSpan820"
                src={timespan}
                className="features-time-span"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*STEPS*/}
    <div>
      <div>
        <div className="steps-steps">
          <div className="steps-group3">
            <span className="steps-text">
              <span>Follow these easy steps</span>
            </span>
            <div className="steps-steps1">
              <img
                src={dashicons_screenoptions}
                alt="dashiconsscreenoptions1013"
                className="steps-dashiconsscreenoptions"
              />
              <img
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b3612756-fa81-4194-aec1-fa61360e826d/8f35e4dc-8d52-47a2-bf4b-10c45cd26683?org_if_sml=12733"
                alt="registration11012"
                className="steps-registration1"
              />
              <span className="steps-text02">
                <span>
                  Register yourself by filling the required informations
                </span>
              </span>
              <img
                src={img}
                alt="antdesignloginoutlined1012"
                className="steps-antdesignloginoutlined"
              />
              <span className="steps-text04">
                <span>Signin as user</span>
              </span>
              <img
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b3612756-fa81-4194-aec1-fa61360e826d/0249b783-eb0c-44a2-a4c0-a77e07f674b9?org_if_sml=11445"
                alt="Key1012"
                className="steps-key"
              />
              <span className="steps-text06">
                <span>Go to vote option on dashboard</span>
              </span>
              <span className="steps-text08">
                <span>Give security key</span>
              </span>
              <img
                src={Vectors}
                alt="fasolidvoteyea1013"
                className="steps-fasolidvoteyea"
              />
              <span className="steps-text10">
                <span>Vote your candidate and submit</span>
              </span>
            </div>
          </div>
          <img
            src={Linef}
            alt="Line41014"
            className="steps-line4"
          />
        </div>
        <footer className="footer">
          <div className="waves">
            <div className="wave" id="wave1" />
            <div className="wave" id="wave2" />
            <div className="wave" id="wave3" />
            <div className="wave" id="wave4" />
          </div>
          <ul className="menu">
            
            <li className="menu__item">
              <a className="menu__link" href="/Login">
                <u>Login</u>
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="/SignUp">
                <u>SignUp</u>
              </a>
            </li>
            
          </ul>
          <p style={{ opacity: "0.75" }}>Made with 🤍 by Trustexchange©️</p>
        </footer>
      </div>
    </div>
  </div>
</>

  );
}
