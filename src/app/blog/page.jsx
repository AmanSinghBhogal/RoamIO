import styles from './blogs.module.css';
import PostCard from '@/components/postCard/PostCard';

const Blogs = () => {
  return (
    <div className={styles.container}>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  )
}

export default Blogs;