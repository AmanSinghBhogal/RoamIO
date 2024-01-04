import Image from "next/image";
import styles from './about.module.css';

const About = () => {
  return (
    <div className={styles.imgContainer}>
      <Image src="/assets/images/about.png" alt="About img" fill />
    </div>
  )
}

export default About;