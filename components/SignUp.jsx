/* eslint-disable */
import styles from "./SignUp.module.css";
import Link from "next/link";

const SignUp = ({ }) => {
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
                        <input type="text" name="password" required />
                  </div>
            </div>
            <div className={styles.input_container}>
                  <div className={styles.labels}>
                        <label>Email: </label>
                  </div>
                  <div className={styles.inputs}>
                        <input type="text" name="password" required />
                  </div>
            </div>
            <div className={styles.input_container}>
                  <div className={styles.labels}>
                        <label>Password: </label>
                  </div>
                  <div className={styles.inputs}>
                        <input type="password" name="password" required />
                  </div>
            </div>
            <div className={styles.input_container}>
                  <div className={styles.labels}>
                        <label>Re-enter Password </label>
                  </div>
                  <div className={styles.inputs}>
                        <input type="password" name="password" required />
                  </div>
            </div>
            <div className={styles.buttons}>
                  <button className={styles.button} role="button">Sign Up</button>
            </div>
            <div className={styles.small}>
            <h2>Already have an account? <Link href="/" className={styles.links}>Login</Link></h2>
            </div>
            
      </form>
    </div>
  );
};

export default SignUp;
