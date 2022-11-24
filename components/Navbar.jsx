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
        <Button variant="home">Home</Button>
        <Link href="/adoption"><Button variant="secondary" >Find a Pet</Button></Link>
        <Button variant="secondary">About</Button>
        <Button variant="secondary">Contact us</Button>
      </div>
      <div className={styles.burgerButton}>
        <Button>Burger</Button>
      </div>
    </div>
  );
};
export default Navbar;
