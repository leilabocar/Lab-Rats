/* eslint-disable */
import styles from "./Login.module.css";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";


const Login = ({ }) => {
      const [ loginusername, setLoginUsername ] = useState('');
      const [ loginpassword, setLoginPassword ] = useState('');

      const login = () => {
            axios({
                method: "post",
                data: {
                    username: loginusername,
                    password: loginpassword
                },
                withCredentials: true,
                url: "http://localhost:3001/login"
            }).then(res => console.log(res)).catch(err => console.log(err)); 
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
                  <button className={styles.button} onClick={login} role="login" >Login </button>
            </div>
            <div className={styles.bottom}>
                  <h2>New Here? <Link href="/SignUp" className={styles.links}>Sign Up?</Link></h2>
            </div>
            
      </form>
    </div>
  );
};

export default Login;
