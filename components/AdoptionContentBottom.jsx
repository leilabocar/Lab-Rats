/* eslint-disable */
import styles from "./AdoptionContentBottom.module.css";
import Link from "next/link";

const AdoptionContentBottom = ({ }) => {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
            <Link href="#" className={styles.button}><img src="/images/fb.png" alt="fb picture"/></Link>
            <Link href="#" className={styles.button}><img src="/images/twt.png" alt="twitter picture" /></Link>
            <Link href="#" className={styles.button}><img src="/images/ig.png" alt="instagram picture"/></Link>
      </div>
    </div>
  );
};

export default AdoptionContentBottom;
