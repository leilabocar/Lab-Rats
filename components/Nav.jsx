/* eslint-disable */
import styles from "./Nav.module.css";
import Link from "next/link";

const Nav = ({ }) => {
  return (
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
  );
};

export default Nav;
