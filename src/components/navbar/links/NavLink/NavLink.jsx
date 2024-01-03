"use client";
import Link from "next/link";
import styles from './NavLink.module.css';
import { usePathname } from "next/navigation";

const NavLink = ({item}) => {

    const pathName = usePathname();
    console.log(pathName)

    return (
        <Link href={item.path} className={`${styles.link} ${pathName === item.path && styles.active}`}>
            {item.title}
        </Link>
    )
}

export default NavLink;