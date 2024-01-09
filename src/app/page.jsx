import styles from './home.module.css';
import Image from 'next/image';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>

        <h1 className={styles.title}>
          Creative Thoughts Agency.
        </h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio adipisci voluptatibus pariatur quia. Cupiditate magni porro laborum harum hic deserunt eum voluptas beatae pariatur vitae? Magni, sed odio numquam error consequatur quidem recusandae voluptatum ea. Incidunt dolor eos libero velit.</p>

        <div className={styles.buttons}>
          <button className={styles.btn}>Learn More</button>
          <button className={styles.btn}>Contact</button>
        </div>

        <div className={styles.brands}>
          <Image src="/assets/images/brands.png" alt='Brands' fill className={styles.brandsImg}  />
        </div>

      </div>
      <div className={styles.imgContainer}>
          <Image src="/assets/images/hero.gif" alt='Home GIF' width={450} height={450} className={styles.homeGif} />
      </div>
    </div>
  )
}

export default Home;