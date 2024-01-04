import Links from "./links/Links";
import styles from './navbar.module.css';
import Link from "next/link";

const NavBar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            <Link href="/">RoamIO</Link>
        </div>
        <div>
            <Links />
        </div>
    </div>
  )
}

export default NavBar;