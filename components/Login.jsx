/* eslint-disable */
// import styles from "./Hero.module.css";
// import Link from "next/link";

const Login = ({ }) => {
  return (
    <div className={styles.container}>
      <h1>Motion Detector</h1>
      <h6>by Lab Rats</h6>
      <form className={styles.main_input_container}>
      <div className={styles.input_container}>
            <span>
                  <label className={styles.labels}>Username: </label>
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
      </form>
    </div>
  );
};

export default Login;
