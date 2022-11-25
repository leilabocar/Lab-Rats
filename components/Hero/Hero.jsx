import styles from "./Hero.module.css";
import Link from "next/link";

const Hero = ({ }) => {
  return (
    <div className={styles.container}>
      <div className={styles.socmed}>
          <Link href="#" className={styles.button}><img src="/images/fb.png"></img></Link>
          <Link href="#" className={styles.button}><img src="/images/twt.png" /></Link>
          <Link href="#" className={styles.button}><img src="/images/ig.png" /></Link>
      </div>
      <div className={styles.cover}>
        <img src="/images/dogandcatcover.png" />
      </div>
      <div className={styles.data}>
        <div className={styles.datas}>
          <h1>Dogs</h1>
          <h2>1300</h2>
        </div>
        <div className={styles.datas}>
          <h1>Cats</h1>
          <h2>1500</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
