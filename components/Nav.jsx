/* eslint-disable */
import styles from "./Nav.module.css";
import Link from "next/link";

const Nav = ({ }) => {
  return (
      <div className={styles.container}>
            <div className={styles.navbar}>
                  <div className={styles.logo}>
                        <p>LabRats</p>
                  </div>
                  <div className={styles.items}>
                        <ul>
                              <li>Login</li>
                              <li>Sign Up</li>
                        </ul>
                  </div>
            </div>
            <div className={styles.contents}>
                  <div className={styles.title}>
                        <h1>Motion</h1>
                        <h1>Detection</h1>
                  </div>
                  <div className={styles.text}>
                        <div className={styles.text1}>
                              <p>a process of detecting a change in the position of an object relative to its surroundings or a change in the surroundings relative to an object.</p>
                        </div>
                  </div>
            </div>
      </div>
      
  );
};

export default Nav;
