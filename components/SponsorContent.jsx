/* eslint-disable */
import styles from "./SponsorContent.module.css";

const sponsor = () => {
      return (
            <div className={styles.container}>
                  <div className={styles.h1}><p> Sponsor a Pet.</p></div>
                  <div className={styles.h2}><p> Can't adopt but want to help</p></div>    
                  <div className={styles.h3}><p> We know the feeling - you want to take them all home but most of
                     us who love animals already have pets. BUT you can still help, join
                      our sponsor a pet program.</p>
                  </div>
                  <div className={styles.h4}><p>- Sponsoring a cat costs about $15 per month or $170 per year</p></div>  
                  <div className={styles.h5}><p>- Sponsoring a dog costs about $25 per month or $285 per year</p></div>  
                  <div className={styles.h6}><p>Don't forget to leave a note at the payment gateway to let us know
                         who the donation is intended for! Or send us an email with the donation info
                          and the name of the pet at info.labrats@gmail.com</p></div>    
                  <div className={styles.h7}><p>How sponsorship helps pets?</p></div>
                  <div className={styles.h8}><p>Your sponsorship helps towards food, vaccinations, medical care, 
                    spaying/neutering and toys for your sponsored friend and allows us to help even more animals.<br></br> <br></br>
                     A lot of the animals in our sponsorship program are long term residents who will probably 
                     never be adopted - often due to medical issues, problems socializing with people, or they
                      just simply haven't found that special owner yet. Older animals have such a hard time finding
                       homes. <br></br><br></br>
                      In exchange for sponsoring one of our furry friends, we will:<br></br>
                       - Organize a visit to your sponsored pet; dependent on both of your locations. <br></br>
                        - Email you regular updates on your sponsor pet's progress.<br></br>
                        - Publish your name on the sponsorship list that we regularly release on our 
                        blog and social media channels.
                     (Do let us know if you wish to remain anonymous.)</p></div>    
                  <div className={styles.box}> 
                    <p1> Sponsor a pet by donating to any of these channels:</p1>
                  <div className={styles.gfg}> <Image src="/images/paypal.png" alt="icon only"/> <p1>paypal.com/paypalme/labrats</p1></div>
                  <div className={styles.gfg1}> <Image src="/images/bdo.png" alt="icon only"/> <p1>10215659345413</p1></div>
                  <div className={styles.gfg2}> <Image src="/images/gcash.png" alt="icon only"/> <p1>Send to 09958926020 Lyn S.</p1></div>
                    
                  </div>    
            </div>
            
            
      );
    };
    export default sponsor;
    