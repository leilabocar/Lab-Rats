/* eslint-disable */
import styles from "./ChangePass.module.css";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

const ChangePass = ({ }) => {

      const [ changeUsername, setchangeUsername ] = useState('');
      const [ changePassword, setchangePassword ] = useState('');
  
      const changepassword = () => {
          axios({
              method: "post",
              data: {
                  username: changeUsername,
                  password: changePassword
              },
              withCredentials: true,
              url: "http://localhost:3001/changepassword"
          }).then((res) => console.log(res)).catch((err) => console.log(err));
      }
  
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
            <img src="/changepass_logo.png"></img>
      </div>
      <div className={styles.title}>
            <h1>Forgot Password?</h1>
            <h6>Please enter your username and new password.</h6>
      </div>
      <div className={styles.input_container}>
            <div>
                  <label className={styles.labels}>Username:</label>
            </div>
            <form className={styles.main_input_container}>
                  <div>
                        <input type="username" name="username" onChange={(e) => {setchangeUsername(e.target.value)}} required/>
                  </div> 
            </form>
      </div>
      <div className={styles.input_container}>
            <div>
                  <label className={styles.labels}>Password:</label>
            </div>
            <form className={styles.main_input_container}>
                  <div>
                        <input type="password" onChange={(e) => {setchangePassword(e.target.value)}} required/>
                  </div>
                  <div className={styles.buttons}>
                        <span>
                              <Link href ="/" ><button className={styles.button} role="button">Close</button></Link>
                        </span>
                        <span>
                              <button className={styles.button} onClick={changepassword} role="button">Confirm</button>
                        </span>
                  </div>
            </form>
      </div>
    </div>
  );
};

export default ChangePass;
