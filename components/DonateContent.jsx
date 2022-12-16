/* eslint-disable */
import styles from "./DonateContent.module.css";

const DonateContent = () => {
    return (
        <div className={styles.container}>
            <p>Please choose from any of the following Donation Channels:</p>
            <div className={styles.pm1}>
                <img src="/images/paypal.png" alt="icon only"/>
                <p>paypal.com/paypalme/labrats</p>
            </div>
            <div className={styles.pm2}>
                <img src="/images/bdo.png" alt="icon only"/>
                <p>10215659345413</p>
            </div>
            <div className={styles.pm3}>
                <img src="/images/gcash.png" alt="icon only"/>
                <p>09958926020 Lyn S.</p>
            </div>
    </div>
    );
};
export default DonateContent;