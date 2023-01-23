/* eslint-disable */
import styles from "./Nav.module.css";
import Link from "next/link";

const Nav = ({ }) => {
  return (
      <div className={styles.container}>
            <div className={styles.navbar}>
                  <div className={styles.logo}>
                        <p><Link href="/">LabRats</Link></p>
                  </div>
                  <div className={styles.items}>
                        <ul>
                              <li><Link href="/SignIn">Login</Link></li>
                              <li><Link href="/SignUp">Sign Up</Link></li>
                        </ul>
                  </div>
            </div>
            <div className={styles.contents}>
                  <div className={styles.title}>
                        <h1>Motion Detection</h1>
                  </div>
                  <div className={styles.text}>
                        <div className={styles.text1}>
                              <p><i>a process of detecting a change in the position of an object relative to its surroundings or a change in the surroundings relative to an object.</i></p>
                        </div>
                  </div>
            </div>
            <div className={styles.laptop}>
                  <img src="/laptop.png"></img>
            </div>
            <footer className={styles.footer1}>
                  <div className={styles.aboutLogo}>
                        <img src="/about.png"></img>
                  </div>
                  <div className={styles.aboutContent}>
                        <div className={styles.contentTitle}>
                              <h3>About Us</h3>
                        </div>
                        <div className={styles.contentContent}>
                              <p>We are fourth-year students at the Technological University of the Philippines-Cavite. We are taking CPET 17 - Embedded System. This web app project is part of our final requirement, which is to create a NextJs application.</p>
                        </div>
                  </div>
            </footer>
      </div>
      
  );
};

export default Nav;
