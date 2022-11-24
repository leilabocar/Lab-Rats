import styles from "./ContactUs.module.css";

const ContactUs = () => {
      return (
            <div className={styles.container}>
                  <div className={styles.image}>
                        <img src="/images/image 1.png" />
                  </div>
                  <div className={styles.label}>
                        <h3>Contact</h3>
                        <p1> If you have questions about donations or other ways you can help LABRATS: </p1>
                        <h2>Email:</h2>
                        <p2>info.labrats@gmail.com</p2>
                        <h2>Call:</h2>
                        <p2> 046 222 101 Monday to Friday, 9 am - 5 pm.
                        </p2>
                        <h2>Head Office:</h2>
                        <p2>143 Padayon Street, Himlay, FL 69168 Imus, Cavite</p2>
                  </div>

            </div>
            
      );
};


export default ContactUs;