/* eslint-disable */
import styles from "./ChangePass.module.css";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import React from "react";
import { useRouter } from 'next/router'

const ChangePass = () => {

      const [ changeUsername, setchangeUsername ] = useState('');
      const [ changePassword, setchangePassword ] = useState('');
      const [ changestatus, setchangeStatus ] = useState('');
      const router = useRouter();
  
      const changepassword = (e) => {
            e.preventDefault();
          axios({
              method: "post",
              data: {
                  username: changeUsername,
                  password: changePassword
              },
              withCredentials: true,
              url: "http://192.168.18.84:3001/changepassword"
            }).then((response) => {
                  if(response.ok){
                        return setSignUpStatus(response.data.message);
                  }
                  {
                        router.push('/SignIn');
                  }
            })
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
                        <input type="username" name="username" onChange={e => setchangeUsername(e.target.value)} required/>
                  </div> 
            </form>
      </div>
      <div className={styles.input_container}>
            <div>
                  <label className={styles.labels}>New Password:</label>
            </div>
            <form className={styles.main_input_container}>
                  <div>
                        <input type="password" name="password" onChange={e => setchangePassword(e.target.value)} required/>
                  </div>
                  <div className={styles.buttons}>
                        <span>
                              <Link href ="/SignIn" ><button className={styles.button} role="button">Close</button></Link>
                        </span>
                        <span>
                        <button className={styles.button} onClick={changepassword} type="button">Confirm</button>
                        <h1 style={{color: 'red', fontSize: '15px', textAlign:'center', marginTop: '20px'}}>{changestatus}</h1>
                        </span>
                  </div>
            </form>
      </div>
    </div>
  );
};

export default ChangePass;
