import styles from './blogs.module.css';
import PostCard from '@/components/postCard/PostCard';
// import { getPosts } from '@/lib/data';

export const metadata = {
  title: 'Blogs',
  description: 'RoamIO Blog Page',
}

const getPosts = async () => {
    const res = await fetch("http://localhost:3000/api/posts");
    if(!res.ok){
      throw new Error("Something went wrong while fetching posts.");
    }
    return res.json();
}

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