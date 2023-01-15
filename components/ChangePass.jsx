/* eslint-disable */
import styles from "./ChangePass.module.css";
import Link from "next/link";

const ChangePass = ({ }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
            <img src="/changepass_logo.png"></img>
      </div>
      <div className={styles.title}>
            <h1>Change Password</h1>
            <h6>Your new password must be different from previous and used passwords.</h6>
      </div>
      <div className={styles.input_container}>
            <div>
                  <label className={styles.labels}>Password:</label>
            </div>
            <form className={styles.main_input_container}>
                  <div>
                        <input type="password"/>
                  </div> 
            </form>
      </div>
      <div className={styles.input_container}>
            <div>
                  <label className={styles.labels}>Confirm Password:</label>
            </div>
            <form className={styles.main_input_container}>
                  <div>
                        <input type="password"/>
                  </div>
                  <div className={styles.buttons}>
                        <span>
                              <button className={styles.button} role="button">Close</button>
                        </span>
                        <span>
                              <button className={styles.button} role="button">Confirm</button>
                        </span>
                  </div>
            </form>
      </div>
    </div>
  );
};

export default ChangePass;
