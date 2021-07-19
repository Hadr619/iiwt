import Link from 'next/link';
import Image from "next/image";
import clsx from 'clsx';
import styles from './EpisodeCard.module.scss';

export default function EpisodeCard({ episode }) {
    const epLength = new Date (episode.itunes_duration * 1000).toISOString().substr(11,8);
    const stringCheck = "MID-WEEK REVIEW - ";
    const epTitle = episode.title;
    let newEpTitle;
    let albumCTA;
    const albumReview = "Mid-Week Review";
    
    if(epTitle.includes(stringCheck)){
        newEpTitle = epTitle.replace(stringCheck, "");
        albumCTA = albumReview;
    }
    else{
        newEpTitle = epTitle;
        albumCTA = "";
    }
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
            <div className={styles.midWeek}>{albumCTA}</div>
          </div>
          </div>
          <figcaption className={styles.caption}>
            <div>{newEpTitle}</div>
            <div className={styles.duration}>Episode Length: {epLength}</div>
          </figcaption>
          </div>  
        </figure>
        </a>
      </Link>

    )
}