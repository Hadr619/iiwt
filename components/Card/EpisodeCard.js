import Link from 'next/link';
import Image from "next/image";
import clsx from 'clsx';
import styles from './EpisodeCard.module.scss';

export default function EpisodeCard({ episode }) {
    const epLength = new Date (episode.itunes_duration * 1000).toISOString().substr(11,8);
    return (
        <Link key={episode.id} href={episode.url}>
        <a target="_blank" rel="noreferrer" className={styles.episode}>
        <figure className={styles.figure}>
          <div className={styles.episodeInner}>
          <div className={styles.imageContainer}>
          <Image src={episode.itunes_image}
                layout="responsive"
                 width='320px'
                 height="320px" 
                 alt="Is It Worse Than logo"/>
          <div className={styles.imageOverlay}>
            <i className={clsx(styles.icon, "fa fa-play-circle-o")} aria-hidden="true"></i>
          </div>
          </div>
          <figcaption className={styles.caption}>
            <div>{episode.title}</div>
            <div className={styles.duration}>Episode Length: {epLength}</div>
          </figcaption>
          </div>  
        </figure>
        </a>
      </Link>

    )
}