import styles from "./DetailsBottom.module.css";

const DetailsBottom = ({ }) => {
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
            <button variant="primary"><img src="/images/fb.png" /></button>
            <button variant="primary"><img src="/images/twt.png" /></button>
            <button variant="primary"><img src="/images/ig.png" /></button>
      </div>
    </div>
  );
};

export default DetailsBottom;
