import Button from "./Button";
import styles from "./HomepageBottom.module.css";
import Link from "next/link";



const HomepageBottom = () => {
      return (
            <div className={styles.container}>
                  <h3>Looking for unconditional love? Visit the shelter today!</h3>
            <div className={styles.buttons}>
                  <Link href="/donate" className={styles.button}>DONATE</Link>
                  <Link href="/sponsor" className={styles.button}>SPONSOR</Link>
                  <Link href="" className={styles.button}>ADOPT</Link>
            </div>
      </div>
      );
    };
    export default HomepageBottom;
    