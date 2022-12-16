/* eslint-disable */
import styles from "./Details.module.css";

const Details = ({}) => {
      return (
        <div className={styles.container}>
            <div className={styles.miney}>
            <img src="/images/cat.jpg" alt="picture of a cat"/>
              <h1>Miney</h1>
                      <ul>
                          <li> Female</li>
                          <li> 2 months old</li>
                          <li> 2 kg</li>
                          <li> Location: 8XW8+2CH, Carlos Trinidad Ave, Salawag, Dasmariñas, Cavite</li>
                      </ul>
                </div>
                      <div className={styles.dataz}>
                          <h1>Miney is exactly what you're looking for. She's a snuggling companion who's ready to keep you warm this summer! Miney can be shy at first,
                              but once she feels at ease, she'll make herself at home. She has previously lived with dogs and is believed to get along well with them.
                              A slow and correct introduction is required, but she's so cool that we think it'll be easy!
                              Look no further than Miney if you're looking for a nice girl with a face as sweet as honey!</h1><br></br>
                              <div className={styles.data}>
                          <p3>Thank you for your interest in adoption! We are open to process adoptions on a walk-in basis Tuesday – Friday from 1 p.m. to 6 p.m.
                              On Saturdays, adoptions are from 12 – 4 p.m. and Sundays are by appointment only.</p3><br></br>
                      </div>
                  </div>
            </div>
           
    

      );
    };
    export default Details;