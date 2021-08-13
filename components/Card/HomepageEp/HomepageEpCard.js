import Link from 'next/link';
import Image from "next/image";
import clsx from 'clsx';
import styles from './HomepageEpCard.module.scss';
import { parse } from 'node-html-parser';

export default function EpisodeCard({ episode, flipId }) {
    const epLength = new Date (episode.itunes_duration * 1000).toISOString().substr(11,8);
    const stringCheck = "MID-WEEK REVIEW - ";
    const updateStrCheck = "MID WEEK ̶R̶E̶V̶I̶E̶W̶ ROUND UP!!!";
    const epTitle = episode.title;
    let newEpTitle;
    let albumCTA;
    const albumReview = "Mid-Week";
    let doc = parse(episode.description);
    const newDescription = doc.querySelector('p').textContent;

    if(epTitle.includes(stringCheck) || epTitle.toLowerCase().includes('review') || epTitle.includes(updateStrCheck)){
        newEpTitle = epTitle.replace(stringCheck, "");
        newEpTitle = epTitle.replace(updateStrCheck, "");
        newEpTitle = newEpTitle.toLowerCase().replace('review', "");
        albumCTA = albumReview;
    } else if(epTitle.toLowerCase().includes('ep')){
        newEpTitle = epTitle.split(":").pop();
        if(episode.itunes_episode)
        albumCTA = `Episode ${episode.itunes_episode}`;
    }
    else{
        newEpTitle = epTitle;
    }
    return (
        <Link key={episode.id} href={episode.url}>
        <a target="_blank" rel="noreferrer" className={styles.episode} data-flip-id={flipId}>
        <figure className={styles.figure}>
          <div className={styles.episodeInner}>
          <div className={styles.imageContainer}>
          <Image src={episode.itunes_image}
                layout="responsive"
                layout="fill"
                objectFit="cover"
                 alt="Is It Worse Than logo"
                 className={styles.image}/>
          <div className={styles.imageOverlay}>
            <i className={clsx(styles.icon, "fa fa-play-circle-o")} aria-hidden="true"></i>
            <div className={styles.midWeek}>{albumCTA}</div>
          </div>
          </div>
          <figcaption className={styles.caption}>
            <div className={styles.title}>{newEpTitle}</div>
            <div className={styles.description}>{newDescription}</div>
            <div className={styles.duration}>Episode Length: {epLength}</div>
          </figcaption>
          </div>  
        </figure>
        </a>
      </Link>

    )
}