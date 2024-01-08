import styles from './slug.module.css';
import Image from 'next/image';

const SingleBlog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/assets/images/post.jpg" alt='Post Img' width={400} height={400} className={styles.img}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.title}>Title</div>
        <div className={styles.detail}>
          <div className={styles.detailAvtar}>
            <Image src="/assets/images/post.jpg" alt='Post Img' width={50} height={50} className={styles.avatar} />
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Aman Singh Bhogal</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut magni odit quaerat eius et quasi pariatur nostrum quis ab!
        </div>
      </div>
    </div>
  )
}

export default SingleBlog;