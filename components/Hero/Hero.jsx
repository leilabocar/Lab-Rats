import styles from "./Hero.module.css";

const Hero = ({ }) => {
  return (
    <div className={styles.container}>
      <div className={styles.socmed}>
        <img src="/images/fb.png" />
        <img src="/images/ig.png" />
        <img src="/images/twt.png" />
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
