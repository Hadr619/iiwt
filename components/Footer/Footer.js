import Logo from '../svg/Logo';
import Link from 'next/link'
import clsx from 'clsx';
import styles from './footer.module.scss';

export default function Footer() {

    const date = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
        <div className={clsx(styles.footerInner, "inner")}>
          <section className={styles.footerLinks}>
            <div className={styles.logo}>

                <div className={styles.logoName}>
                    <Logo />
                    <p>Is It Worse Than...</p>
                </div>
                <div className={styles.slogan}>Comparing bands to 311 since 1988</div>
            </div>
            <div className={styles.links}>
            <div>
                <h4>Where to Listen</h4>
                <ul className={styles.list}>
                    <li><Link href="https://anchor.fm/isitworsethan"><a rel="noreferrer" target="_blank">Anchor</a></Link></li>
                    <li><Link href="https://open.spotify.com/show/1I7lI0F33YvpLuORxLp7Ar"><a rel="noreferrer" target="_blank">Spotify</a></Link></li>
                    <li><Link href="https://podcasts.apple.com/us/podcast/is-it-worse-than/id1541093380"><a rel="noreferrer" target="_blank">Apple Podcasts</a></Link></li>
                    <li><Link href="https://castbox.fm/channel/id3541209?country=us"><a rel="noreferrer" target="_blank">Castbox</a></Link></li>       
                    <li><Link href="https://pca.st/4m5uq7vh"><a rel="noreferrer" target="_blank">Pocket Casts</a></Link></li>    
                    <li><Link href="https://www.breaker.audio/is-it-worse-than-dot-dot-dot"><a rel="noreferrer" target="_blank">Breaker</a></Link></li>                  
                </ul>
                </div>
                <div>
                    <h4>Get In Touch</h4>
                    <ul className={styles.list}>
                    <li><Link href="mailto:isitworsethan311@gmail.com"><a>Email</a></Link></li>           
                </ul>
                </div>
                <div>
                <h4>Affiliated Links</h4>
                <ul className={styles.list}>
                    <li><Link href="https://trashpitcity.threadless.com/"><a rel="noreferrer" target="_blank">Apparel</a></Link></li>
                    <li><Link href="https://trashpitcity.bigcartel.com/"><a rel="noreferrer" target="_blank">Trash Pit City</a></Link></li>
                    <li><Link href="https://trashbugs.com/"><a rel="noreferrer" target="_blank">Trash Bugs</a></Link></li>
                    <li><Link href="https://pigcrack.com/"><a rel="noreferrer" target="_blank">Pig Crack</a></Link></li>                  
                </ul>
                </div>
            </div>
          </section>
          <section className={styles.copyright}>
            <p>Copyright {date} Is It Worse Than...</p>
          </section>             
        </div>
      </footer>
    )
}