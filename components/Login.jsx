/* eslint-disable */
import styles from "./Login.module.css";
import Link from "next/link";
import React, { useState } from "react";
import Axios from "axios";


const Login = ({ }) => {
      const [loginusername, setLoginUsername] = useState("");
      const [loginpassword, setLoginPassword] = useState("");
      const [loginStatus, setLoginStatus] = useState("");

      const login = (e) => {
            e.preventDefault();
            Axios.post("http://localhost:3001/login", {
                  username: loginusername,
                  password: loginpassword,
            }).then((response) => {
                  if(response.data.message){
                        setLoginStatus(response.data.message);
                  }else{
                        setLoginStatus(response.data[0].email);
                  }
            })
      }


  return (
    <div className={styles.container}>
      <div className={styles.title}>
            <h1>Motion Detector</h1>
            <h6>by Lab Rats</h6>
      </div>
      <form className={styles.main_input_container}>
            <div className={styles.input_container}>
                  <h3>Login</h3>
                  <span>
                        <label className={styles.labels}>Username:</label>
                  </span>
                  <span>
                        <input type="text" name="username" onChange={(e) => {setLoginUsername(e.target.value)}} required />
                  </span>
            </div>
            <div className={styles.input_container}>
                  <span>
                        <label className={styles.labels}>Password: </label>
                  </span>
                  <span>
                        <input type="password" name="password" onChange={(e) => {setLoginPassword(e.target.value)}} required />
                  </span>
                  
            </div>
            <div className={styles.small}>
                  <Link href="/ForgotPassword" className={styles.links}><h3>Forgot Password?</h3></Link>
            </div>
            <div className={styles.buttons}>
                  <button className={styles.button} onClick={login} >Login </button>
                  <h1 style = {{color: 'red', fontSize: '15px', textAlign: 'center', marginTop: '20px'}} > {loginStatus} </h1> 
            </div>
            <div className={styles.bottom}>
                  <h2>New Here? <Link href="/SignUp" className={styles.links}>Sign Up?</Link></h2>
            </div>
            
      </form>
    </div>
  );
};

export default Login;
