import styles from "./rpipage.module.css";
import Link from 'next/link';

const rpipage = () => {
    return (
      <div className={styles.container}>
            <div className={styles.navbar}>
                  <div className={styles.logo}>
                        <p><Link href="/">LabRats</Link></p>
                  </div>
                  <div className={styles.items}>
                        <ul>
                              <li><Link href="/SignIn">Logout</Link></li>
                        </ul>
                  </div>
            </div>
            <div className={styles.title}>
                  <h1>Dashboard</h1>
                  <h2>Motion Detection</h2>
            </div>
            <div className={styles.pictures}>
                  <div  className={styles.pics}>
                        sd
                  </div>
                  <div  className={styles.pics}>
                        sd
                  </div>
                  <div  className={styles.pics}>
                        sd
                  </div>
            </div>
      </div>
    );
  };
  
  export default rpipage;