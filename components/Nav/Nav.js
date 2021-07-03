import { useState } from 'react'
import Link from 'next/link';
import { useRouter } from "next/router";
import NavIcon from './NavIcon';
import clsx from 'clsx';
import styles from './Nav.module.scss'

export default function Nav(){
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const pathCheck = (path) => {
        if(router.pathname == path){
            return styles.active
        }
    }
    const handleNav = (navItem) => {
        if(navItem){
            setOpen(false)
        }else{
            setOpen(!open);
        }      
    }
        return (
            <nav className={clsx(styles.nav, open ? styles.open : '')}>
                    <span onClick={() => handleNav()} className={styles.iconToggle}><span className={styles.bar}></span></span>
            <div className={styles.navWrapper}>
                    <i className={clsx(styles.menuBkgrnd, styles.top)}></i>
                    <i className={clsx(styles.menuBkgrnd, styles.middle)}></i>
                    <i className={clsx(styles.menuBkgrnd, styles.bottom)}></i>
                <ul className={styles.navList}>
                    <li className={clsx(pathCheck('/'), styles.navItem)}><Link href="/"><a onClick={() => handleNav(true)} className={styles.navLink}>Home</a></Link></li>
                    <li className={clsx(pathCheck('/blog'), styles.navItem)}><Link href="/blog"><a onClick={() => handleNav(true)} className={styles.navLink}>Blog</a></Link></li>
                </ul>
                </div>
            </nav>
        )
    }