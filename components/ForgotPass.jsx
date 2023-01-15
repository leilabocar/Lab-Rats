/* eslint-disable */
import styles from "./ForgotPass.module.css";
import Link from "next/link";

const ForgotPass = ({ }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
            <img src="/forgot_logo.png"></img>
      </div>
      <div className={styles.title}>
            <h1>Forgot Password?</h1>
            <h6>No worries, we'll send you reset instructions.</h6>
      </div>
      <div>
            <label className={styles.labels}>Email:</label>
      </div>
      <form className={styles.main_input_container}>
            <div>
                  <input type="text" placeholder="Enter your email"/>
            </div>
            <div className={styles.buttons}>
                  <button className={styles.button} role="button">Reset Password</button>
            </div>
      </form>
      <div className={styles.small}>
            <Link href="/" className={styles.links}><h2>Back to Log In</h2></Link>
      </div>
    </div>
  );
};

export default ForgotPass;
