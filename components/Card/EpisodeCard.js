import Link from 'next/link';
import Image from "next/image";
import clsx from 'clsx';
import styles from './EpisodeCard.module.scss';

export default function EpisodeCard({ episode }) {
    return (
        <Link key={episode.id} href={episode.url}>
        <a target="_blank" rel="noreferrer" className={styles.episode}>
        <figure>
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
          <figcaption>
          {episode.title}
          </figcaption>
          </div>  
        </figure>
        </a>
      </Link>

    )
}