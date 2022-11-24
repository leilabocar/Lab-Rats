import styles from "./HomepageBottom.module.css";

const HomepageBottom = () => {
      return (
            <div className={styles.container}>
                  <h3>Looking for unconditional love? Visit the shelter today!</h3>
            <div className={styles.buttons}>
                  <button variant="primary">DONATE</button>
                  <button variant="primary">SPONSOR</button>
                  <button variant="primary">ADOPT</button>
            </div>
      </div>
      );
    };
    export default HomepageBottom;
    