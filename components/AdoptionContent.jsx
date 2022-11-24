import styles from "./AdoptionContent.module.css";

const AdoptionContent = ({ }) => {
  return (
    <div className={styles.container}>
      <div className={styles.animals1}>
            <img src="/images/dog.jpg" />
            <p>Name: Bruno </p>
            <p>3 Months old Male Dog,Friendly,Playful</p>
      </div>
      <div className={styles.animals2}>
            <img src="/images/cat.jpg" />
            <p>Name: Miney </p>
            <p>3 Months old Female Cat,Friendly,Playful</p>
      </div>
    </div>
  );
};

export default AdoptionContent;
