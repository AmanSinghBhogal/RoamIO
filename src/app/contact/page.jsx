"use client";
import styles from './contact.module.css';
import Image from 'next/image';

const Contact = () => {

  const handleSubmit = (e) => {
  }

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
          <Image src="/assets/images/contact.png" alt="Contact Image" width={450} height={450} className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action={handleSubmit} className={styles.form}>
          <input type="text" placeholder='Full Name*' required />
          <input type="email" placeholder='Email Address*' required />
          <input type="number" placeholder='Mobile Number (Optional)' />
          <textarea name="" id="" cols="30" rows="10" placeholder='Message*' required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;