/* eslint-disable */
import styles from "./SignUp.module.css";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";


const SignUp = ({ }) => {
      const [ signupusername, setSignUpUsername ] = useState('');
      const [ signupemail, setSignUpEmail ] = useState('');
      const [ signuppassword, setSignUpPassword ] = useState('');

      const SignUp = () => {
            axios({
                method: "post",
                data: {
                    username: signupusername,
                    email: signupemail,
                    password: signuppassword
                },
                withCredentials: true,
                url: "http://localhost:3001/SignUp"
            }).then((res) => console.log(res)).catch((err) => console.log(err));
        }
        

  return (
    <div className={styles.container}>
      <div className={styles.title}>
            <h1>Motion Detector</h1>
            <h6>by Lab Rats</h6>
      </div>
      <form className={styles.main_input_container}>
            <h3>Sign Up</h3>
            <div className={styles.input_container}>
                  <div className={styles.labels}>
                        <label>Username </label>
                  </div>
                  <div className={styles.inputs}>
                        <input type="text" name="username"  onChange={e => setSignUpUsername(e.target.value)} required />
                  </div>
            </div>
            <div className={styles.input_container}>
                  <div className={styles.labels}>
                        <label>Email: </label>
                  </div>
                  <div className={styles.inputs}>
                        <input type="text" name="email" onChange={e => setSignUpEmail(e.target.value)} required />
                  </div>
            </div>
            <div className={styles.input_container}>
                  <div className={styles.labels}>
                        <label>Password: </label>
                  </div>
                  <div className={styles.inputs}>
                        <input type="password" name="password" onChange={e => setSignUpPassword(e.target.value)} required />
                  </div>
            </div>
            <div className={styles.buttons}>
            <Link href ="/" ><button className={styles.button} onClick={SignUp} role="SignUp">Sign Up </button></Link>
            </div>
            <div className={styles.small}>
            <h2>Already have an account? <Link href="/" className={styles.links}>Login</Link></h2>
            </div>
            
      </form>
    </div>
  );
};

export default SignUp;