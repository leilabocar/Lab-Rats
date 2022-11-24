import Button from "./Button";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src="/logo/logo.png" />
      </div>
      <div className={styles.navbarActions}>
        <Link href="/"><Button variant="home">Home</Button></Link>
        <Link href="/adoption"><Button variant="secondary" >Find a Pet</Button></Link>
        <Link href="/about"><Button variant="secondary">About</Button></Link>
        <Link href="/Contact_Us"><Button variant="secondary">Contact Us</Button></Link>
      </div>
      <div className={styles.burgerButton}>
        <Button>Burger</Button>
      </div>
    </div>
  );
};
export default Navbar;
