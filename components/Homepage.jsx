/* eslint-disable */
import styles from "./Homepage.module.css";
import Link from "next/link";

const Homepage = ({ }) => {
  return (
      <div className={styles.container}>
            <div className={styles.title}>
                  <h1>Motion</h1>
                  <h1>Detection</h1>
            </div>
            <div className={styles.content}>
                  <div className={styles.text}>
                        <p>a process of detecting a change in the position of an object relative to its surroundings or a change in the surroundings relative to an object.</p>
                  </div>
            </div>
      </div>
  );
};

export default Homepage;
