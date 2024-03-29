import Link from 'next/link';
import Image from "next/image";
import clsx from 'clsx';
import styles from './EpisodeCard.module.scss';

export default function EpisodeCard({ episode, flipId }) {
    const epLength = episode.itunes_duration
    const stringCheck = "MID-WEEK REVIEW - ";
    const updateStrCheck = "MID WEEK ̶R̶E̶V̶I̶E̶W̶ ROUND UP!!!";
    const newStrCheck = "MID-WEEK ROUND UP!!!";
    const endOfMonth = "END OF THE MONTH ROUND UP!!!";
    const midMonth = "MID-MONTH AMBER ALERT!!!";
    const epTitle = episode.title;
    let newEpTitle;
    let albumCTA;
    const albumReview = "Mid-Week";

    if(epTitle.includes(stringCheck)){
      newEpTitle = epTitle.replace(stringCheck, "");
    } else if(epTitle.includes(updateStrCheck)){
      newEpTitle = epTitle.replace(updateStrCheck, "");
    }else if(epTitle.includes(newStrCheck)){
      newEpTitle = epTitle.replace(newStrCheck, "");
    }else if(epTitle.includes(endOfMonth)){
      newEpTitle = epTitle.replace(endOfMonth, "");
    }else if(epTitle.includes(midMonth)){
      newEpTitle = epTitle.replace(midMonth, "");
    }else{
      newEpTitle = epTitle;
    }
    
    if(epTitle.includes(stringCheck) || epTitle.includes(updateStrCheck) || epTitle.includes(newStrCheck)){
        albumCTA = albumReview;
    } else if(epTitle.toLowerCase().includes('ep')){
        newEpTitle = epTitle.split(":").pop();
        if(episode.itunes_episode)
        albumCTA = `Episode ${episode.itunes_episode}`;
    }
    return (
        <Link key={episode.id} href={episode.url}>
        <a target="_blank" rel="noreferrer" className={styles.episode} data-flip-id={flipId}>
        <figure className={styles.figure}>
          <div className={styles.episodeInner}>
          <div className={styles.imageContainer}>
          <Image src={episode.itunes_image}
                layout="responsive"
                 width='320px'
                 height="320px" 
                 alt="Is It Worse Than logo"
                 className={styles.image}/>
          <div className={styles.imageOverlay}>
            <i className={clsx(styles.icon, "fa fa-play-circle-o")} aria-hidden="true"></i>
            <div className={styles.midWeek}>{albumCTA}</div>
          </div>
          </div>
          <figcaption className={styles.caption}>
            <div className={styles.title}>{newEpTitle}</div>
            <div className={styles.duration}>Episode Length: {epLength}</div>
          </figcaption>
          </div>  
        </figure>
        </a>
      </Link>

    )
}