import styles from './slug.module.css';
import Image from 'next/image';
import { getPost } from '@/lib/data';
import PostUser from '@/components/PostUser/PostUser';


const SingleBlog = async ({params}) => {

  const { slug } = params;
  const post = await getPost(slug); 
  
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/assets/images/post.jpg" alt='Post Img' width={400} height={400} className={styles.img}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.title}>{post.title}</div>
        <div className={styles.detail}>
          <div className={styles.detailAvtar}>
            <Image src="/assets/images/post.jpg" alt='Post Img' width={50} height={50} className={styles.avatar} />
          </div>
          <PostUser id={post.userId} /> 
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
            {post.body}
        </div>
      </div>
    </div>
  )
}

export default SingleBlog;