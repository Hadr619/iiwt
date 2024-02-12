import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const ThemeToggle = dynamic(() => import("../ThemeToggle/ThemeToggle"), {
    ssr: false,
  });
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
                    <li className={clsx(pathCheck('/episodes'), styles.navItem)}><Link href="/episodes"><a onClick={() => handleNav(true)} className={styles.navLink}>Episodes</a></Link></li>
                    <li className={clsx(pathCheck('/ranking'), styles.navItem)}><Link href="/ranking"><a onClick={() => handleNav(true)} className={styles.navLink}>Ranking</a></Link></li>
                    <li className={clsx(pathCheck('/blog'), styles.navItem)}><Link href="/blog"><a onClick={() => handleNav(true)} className={styles.navLink}>Blog</a></Link></li>
                    <li className={styles.navItem}><Link href="https://trashpitcity.threadless.com/"><a rel="noreferrer" target="_blank" onClick={() => handleNav(true)} className={styles.navLink}>Shop</a></Link></li>
                    <li className={clsx(styles.navItem, styles.icons)}>
                        <Link href="https://twitter.com/isitworsethn311">
                            <a rel="noreferrer" target="_blank" aria-label="Read more on Twitter" onClick={() => handleNav(true)} className={clsx(styles.navLink, styles.twitter)}>
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <g>
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                    </g>
                                </svg>
                            </a>
                        </Link>
                    </li>
                    <li className={clsx(styles.navItem, styles.icons, styles.themeToggle)}><ThemeToggle className={styles.navLink}/></li>
                </ul>
                </div>
            </nav>
        )
    }