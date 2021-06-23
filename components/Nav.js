import Link from 'next/link';
import { useRouter } from "next/router";
import clsx from 'clsx';
import styles from './Nav.module.scss'

export default function Nav(){ 
    const router = useRouter();
    const pathCheck = (path) => {
        if(router.pathname == path){
            return styles.active
        }
    }
        return (
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={clsx(pathCheck('/'), styles.navItem)}><Link  href="/"><a className={styles.navLink}>TEST</a></Link></li>
                    <li className={clsx(pathCheck('/blog'), styles.navItem)}><Link href="/blog"><a className={styles.navLink}>Blog</a></Link></li>
                </ul>
            </nav>
        )
    }