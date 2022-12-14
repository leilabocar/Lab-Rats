/* eslint-disable */
import styles from "./AdoptionContent.module.css";
import Link from "next/link";

const AdoptionContent = ({ }) => {
  return (
    <div className={styles.container}>
      <div className={styles.animals1}>
            <img src="/images/dog.jpg" alt="picture of a dog" />
            <p>Name: Bruno </p>
            <p>3 Months old Male Dog,Friendly,Playful</p>
      </div>
      <div className={styles.animals2}>
          <Link href ="/details" className={styles.animals2}><img src="/images/cat.jpg" alt="picture of a cat"/></Link>
            <p>Name: Miney </p>
            <p>3 Months old Female Cat,Friendly,Playful</p>
      </div>
    </div>

  );
};

export default AdoptionContent;
