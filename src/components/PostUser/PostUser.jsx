import styles from './PostUser.module.css';
import { getUser } from "@/lib/data";
import { Suspense } from "react";

const PostUser = async ({id}) => {
    const user = await getUser(id);

    return (
      <Suspense fallback={<div>Loading...</div>}>
          <div className={styles.container}>
              <span className={styles.detailTitle}>Author</span>
              <span className={styles.detailValue}>{user.username}</span>
          </div>
      </Suspense>
    )
}

export default PostUser;