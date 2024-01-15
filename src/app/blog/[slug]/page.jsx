import styles from './slug.module.css';
import Image from 'next/image';
import { getPost } from '@/lib/data';
import PostUser from '@/components/PostUser/PostUser';


// Generating dynamic Page Title and meta data
export const generateMetadata = async ({ params }) => {
    const { slug } = params;
    const post = await getPost(slug); 
    return{
      title: post.title,
      description: post.desc
    };
}


const SingleBlog = async ({params}) => {

  const { slug } = params;
  const post = await getPost(slug); 
  
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={post.img && post.img !== 'none'? post.img : "/assets/images/post.jpg" } alt='Post Img' width={400} height={400} className={styles.img}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.title}>{post.title}</div>
        <div className={styles.detail}>
          <PostUser id={post.userId} /> 
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(4,15)}</span>
          </div>
        </div>
        <div className={styles.content}>
            {post.desc}
        </div>
      </div>
    </div>
  )
}

export default SingleBlog;