import styles from "./DetailsBottom.module.css";
import Link from "next/link";

const DetailsBottom = ({ }) => {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
      <Link href="#" className={styles.button}><img src="/images/fb.png"></img></Link>
      <Link href="#" className={styles.button}><img src="/images/twt.png" /></Link>
      <Link href="#" className={styles.button}><img src="/images/ig.png" /></Link>
      </div>
    </div>
  );
};

export default DetailsBottom;
