"use client";
import { useState } from 'react';
import NavLink from './NavLink/NavLink';
import styles from './links.module.css';
import Image from 'next/image';

const links = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Blogs',
        path: '/blog'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Contact',
        path: '/contact'
    },
];

const Links = () => {

    const [open, setOpen] = useState(false);

    // To be changed soon
    const session = true;
    const isAdmin = true;

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}{
                    session? (
                        <>
                            {isAdmin && (<NavLink item={{title: "Admin", path: "/admin"}} />)}
                            <button className={styles.logout}>Logout</button>
                        </>
                    ) : (
                        <NavLink item={{title: "Login", path: "/login"}} />    
                    )
                }
            </div>
            <button className={styles.menuBtn} onClick={() => setOpen(prev => !prev)}>
                <Image src="/assets/images/menu.png" alt='Menu' width={50} height={50} />
            </button> 
            {
                open && (
                    <div className={styles.mobileLinks}>
                        {
                            links.map((link) => 
                                <NavLink item={link} key={link.title} />
                            )
                        }

                    </div>
                )
            }
        </div>
    )
}

export default Links;