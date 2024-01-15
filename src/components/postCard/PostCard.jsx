import styles from './postCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
          <div>
            <Image src={post.img && post.img !== 'none'? post.img : "/assets/images/post.jpg" } alt='Post Image' height={300} width={300} className={styles.img} />
          </div>
          <div className={styles.date}>{post.createdAt.toString().slice(4,15)}</div>
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