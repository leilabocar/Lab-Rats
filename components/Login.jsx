/* eslint-disable */
import styles from "./Login.module.css";
import Link from "next/link";

const Login = ({ }) => {
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
                        <input type="text" name="username" required />
                  </span>
            </div>
            <div className={styles.input_container}>
                  <span>
                        <label className={styles.labels}>Password: </label>
                  </span>
                  <span>
                        <input type="password" name="password" required />
                  </span>
                  
            </div>
            <div className={styles.small}>
                  <Link href="#" className={styles.links}><h3>Forgot Password?</h3></Link>
            </div>
            <div className={styles.buttons}>
                  <button className={styles.button} role="button">Login</button>
            </div>
            <h2>New Here? <Link href="/SignUp" className={styles.links}>Sign Up?</Link></h2>
      </form>
    </div>
  );
};

export default Login;
