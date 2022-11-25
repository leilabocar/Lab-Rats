import styles from "./ContactUs.module.css";

const ContactUs = () => {
      return (
            <div className={styles.container}>
                  <div className={styles.header}>
                        {/* <img src="/images/image 1.png" /> */}
                        <h1>Contact</h1>
                        <h2> If you have questions about donations or other ways you can help LABRATS: </h2>
                  </div>
                  <div className={styles.label}>
                        <div className={styles.label1}>
                              <h2>Email:</h2> 
                              <p>info.labrats@gmail.com</p>
                        </div>
                        <div className={styles.label2}>
                              <h2>Call:</h2>
                              <p> 046 222 101 Monday to Friday, 9 am - 5 pm.</p>
                              <img src="/images/image 1.png" />
                        </div>
                        <div className={styles.label3}>
                              <h2>Head Office:</h2> 
                              <p>143 Padayon Street, Himlay, FL 69168 Imus, Cavite</p>
                        </div>
                  </div>
            </div>          
      );
};


export default ContactUs;
