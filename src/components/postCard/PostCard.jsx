import styles from './postCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.ImgContainer}>
            <Image src="/assets/images/post.jpg" alt='Post Image' fill className={styles.img} />
          </div> 
          <span className={styles.date}>01.01.2024</span>
        </div>
        <div className={styles.bottom}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.desc}>{post.body}</p>
          <Link href={`/blog/${post.slug}`} className={styles.link}>Read More</Link>
        </div>
    </div>
  )
}

export default PostCard;