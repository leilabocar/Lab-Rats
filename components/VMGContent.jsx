import styles from "./VMGContent.module.css";

const VMGContent = () => {
      return (
            <div className={styles.container}>
                  <div className={styles.vision}>
                        <div className={styles.pic}>
                              <img src="/images/dog.jpg" />
                        </div>
                        <div className={styles.text}>
                              <h1>Vision</h1>
                              <p3>To make the Philippines a compassionate country where all cats and dogs have good homes.</p3>
                        </div>
                  </div>
                  <div className={styles.mission}>
                        <div className={styles.text}>
                              <h1>Mission</h1>
                              <p3>To promote animal welfare in the country through education, public awareness, 
                                    affordable sterilization and veterinary care, and the rehabilitation and rehoming of cats and dogs in need</p3>
                        </div>
                        <div className={styles.pic}>
                              <img src="/images/dog.jpg" />
                        </div>
                  </div>
                  <div className={styles.goals}>
                        <div className={styles.pic}>
                              <img src="/images/dog.jpg" />
                        </div>
                        <div className={styles.text}>
                              <h1>Goals</h1>
                              <ul>
                                    <li> To provide veterinary consultations for low income pet owners through the CARA veterinary clinic.</li>
                                    <li> To promote Trap/Neuter/Return in barangays, villages and commercial establishment.</li>
                                    <li> To provide caring and responsible homes through our adoption program.</li>
                                    <li> To educate citizens about animal welfare and the stray animal population.</li>
                                    <li> To promote no-kill pounds and shelters.</li>
                              </ul>
                        </div>
                  </div>
            </div>
      );
    };
    export default VMGContent;
    