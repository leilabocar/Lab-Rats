/* eslint-disable */
import styles from "./DetailsBottom.module.css";
import Link from "next/link";

const DetailsBottom = ({ }) => {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
      <Link href="#" className={styles.button}><img src="/images/fb.png" alt="icon only"/></Link>
      <Link href="#" className={styles.button}><img src="/images/twt.png" alt="icon only" /></Link>
      <Link href="#" className={styles.button}><img src="/images/ig.png" alt="icon only" /></Link>
      </div>
    </div>
  );
};

export default DetailsBottom;
