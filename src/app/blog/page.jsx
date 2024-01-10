import styles from './blogs.module.css';
import PostCard from '@/components/postCard/PostCard';
import { getPosts } from '@/lib/data';

const Blogs = async () => {

  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
          <PostCard post={post} key={post.id} />
      ))}
    </div>
  )
}

export default Blogs;