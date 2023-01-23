import styles from "./Navbar.module.css";
import Link from 'next/link';

const Navbar = () => {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          
          <h1>Labrats</h1>
        </div>

        
        <div className={styles.navbarButtons}>
          <Link href="/login" className={styles.log_in}>Log In</Link>
          <Link href="/registration"><button className={styles.sign_up} >Sign Up</button></Link>

        </div>

        
      </div>
    );
  };
  
  export default Navbar;