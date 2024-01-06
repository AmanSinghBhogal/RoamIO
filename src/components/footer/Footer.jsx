import Link from "next/link";
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.org}>
          <span className={styles.logo}>RoamIO</span>
          <span className={styles.year}>&copy;{(new Date().getFullYear())}</span>
        </div>
        <div className={styles.text}>Unleash Your Wanderlust, One Journey at a Time!</div>
    </div>
  )
}

export default Footer;