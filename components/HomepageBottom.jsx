import Button from "./Button";
import styles from "./HomepageBottom.module.css";
import Link from "next/link";



const HomepageBottom = () => {
      return (
            <div className={styles.container}>
                  <h3>Looking for unconditional love? Visit the shelter today!</h3>
            <div className={styles.buttons}>
                  <Link href="/donate"><Button>DONATE</Button></Link>
                  <Link href="/sponsor"><Button>SPONSOR</Button></Link>
                  <Button>ADOPT</Button>
            </div>
      </div>
      );
    };
    export default HomepageBottom;
    