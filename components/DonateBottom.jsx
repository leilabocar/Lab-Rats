import styles from "./DonateBottom.module.css";

const DonateBottom = () => {
    return (
        <div className={styles.container}>
            <div className={styles.bottom}>
                <h1>How about donating in kind?</h1>
                <h3>On our wish list:</h3>
                <p>OBM Dry Food</p>
                <p>SPECIAL DOG Wet Food</p>
                <p>CUTIES TUNA Dry Food</p>
                <p>FELINE GOURMET Wet Food</p>
                <p>KITTEN Wet and Dry Food</p>
            </div>
            <div className={styles.dbottom}>
                <h3>Drop-off point:</h3>
                <p>8XW8+2CH, Carlos Trinidad Ave, Salawag, Dasmariñas, Cavite</p>
                <p>(046) 416 4920</p>
            </div>
        </div>
    );
};
export default DonateBottom