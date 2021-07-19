import Head from 'next/head';
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

    return (
      <div>
        <Head>
          <title>Is It Worse Than - Episodes</title>
          <meta name="description" content="The only site that asks the real question about bands, are they worse than 311?"/>
        </Head>
      
        <div className={clsx(styles.episodePage, "inner")}>
          <h4>Check out our Episodes</h4>
        <div className={styles.episodeContainer}>
          {episodes.items.map((ep, index) => (
            <EpisodeCard key={index} episode={ep}/>
          ))}
        </div>
      </div>
      </div>
    )
}