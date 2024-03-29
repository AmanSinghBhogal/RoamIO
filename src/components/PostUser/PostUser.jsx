import styles from './PostUser.module.css';
// import { getUser } from "@/lib/data";
import { Suspense } from "react";
import Image from 'next/image';

const getUser = async(id) => {
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
  if(!res.ok){
    throw new Error("Something went wrong while fetching user Data");
  }
  return res.json();
}

const PostUser = async ({id}) => {
    const user = await getUser(id);

    return (
      <Suspense fallback={<div>Loading...</div>}>
          <div className={styles.container}>
            <div className={styles.detailAvtar}>
                <Image src={user.img? user.img: "/assets/images/noavatar.png"} alt='Post Img' width={50} height={50} className={styles.avatar} />
            </div>
            <div className={styles.detailAuthor}>
                <span className={styles.detailTitle}>Author</span>
              <span className={styles.detailValue}>{user.username}</span>
            </div>
          </div>
      </Suspense>
    )
}

export default PostUser;