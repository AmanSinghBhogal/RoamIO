import NavLink from './NavLink/NavLink';
import styles from './links.module.css';

const Links = () => {

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

    // To be changed soon
    const session = true;
    const isAdmin = true;

    return (
        <div className={styles.container}>
            {links.map((link) => (
                <NavLink item={link} key={link.title} />
            ))}{
                session? (<div>Duck</div>) : (<div>Fuck</div>)
            }
        </div>
    )
}

export default Links;