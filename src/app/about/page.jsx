import Image from "next/image";
import styles from './about.module.css';

export const metadata = {
  title: 'About',
  description: 'RoamIO About Page',
}


const About = () => {
  return (
    <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subTitle}>About RoamIO</h2>
          <h1 className={styles.title}>Unleash Your Wanderlust, One Journey at a Time!</h1>
          <p className={styles.desc}>RoamIO is an application developed as a part of the Mobile Application Development project during our 3rd year of college. It serves as a travel blog platform that allows travel enthusiasts to share their adventures and experiences through blog posts.</p>
          <div className={styles.boxes}>
              <div className={styles.box}>
                <h1>10 K+</h1>
                <p>Years of Experience</p>
              </div>
              <div className={styles.box}>
                <h1>234 K+</h1>
                <p>People Reached</p>
              </div>
              <div className={styles.box}>
                <h1>5 K+</h1>
                <p>Services and Plugins</p>
              </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/assets/images/about.png" alt="About Page Img" width={450} height={450} className={styles.img}/>
        </div>
    </div>
  )
}

export default About;