import Link from 'next/link';
import Image from 'next/image';
import EpisodeCard from '../../components/Card/EpisodeCard';
import Feed from 'rss-to-json';
import styles from './episodes.module.scss';
import clsx from 'clsx';

export async function getStaticProps() {

    const rss = await Feed.load('https://anchor.fm/s/4041b370/podcast/rss');
    return {
      props: {
        episodes: rss
        
      },
      revalidate: 1
    }
  
  }
export default function Episodes({ episodes }) {
  console.log(episodes);
    return (
        <div className={clsx(styles.episodePage, "inner")}>
        <h2>EPISODES</h2>  
        <div className={styles.episodeContainer}>
          {episodes.items.map((ep, index) => (
            // <div key={index}>
            // <Link href={`${ep.url}`}>
            //   <a target="_blank">
            //     <Image 
            //       src={ep.itunes_image}
            //       width='30px'
            //       height='30px'
            //     />
            //     {ep.title}
            //     <span dangerouslySetInnerHTML={{__html:ep.description}}></span>           
            //   </a>
            // </Link>
            // </div>
            <EpisodeCard key={index} episode={ep}/>
          ))}
        </div>
      </div>
    )
}