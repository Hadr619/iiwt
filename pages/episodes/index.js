import Link from 'next/link';
import Feed from 'rss-to-json';
import styles from './episodes.module.scss';

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
    return (
        <div>
        <h2>EPISODES</h2>  
        <div className={styles.episodeContainer}>
          {episodes.items.map((ep, index) => (
            <Link key={index} href={`${ep.url}`}>
              <a target="_blank">{ep.title}</a>
            </Link>
          ))}
        </div>
      </div>
    )
}