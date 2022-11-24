import styles from "./ContactUs.module.css";

const ContactUs = () => {
      return (
            <div className={styles.container}>
                  <div className={styles.image}>
                        <img src="/images/image 1.png" />
                  </div>
                  <div className={styles.label}>
                        <h3>Contact</h3>
                        <p> If you have questions about donations or other ways you can help LABRATS: </p>
                        <h2>Email:</h2>
                        <p>info.labrats@gmail.com</p>
                        <h2>Call:</h2>
                        <p> 046 222 101 Monday to Friday, 9 am - 5 pm.
                        </p>
                        <h2>Head Office:</h2>
                        <p>143 Padayon Street, Himlay, FL 69168 Imus, Cavite</p>
                  </div>

            </div>
            
      );
};


export default ContactUs;