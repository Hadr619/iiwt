
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import Link from "next/link";
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
  const [items, setItems] = useState(episodes.items);
  
    return (
      <div>
        <NextSeo 
          title="Is It Worse Than - Episodes"
          description="The only site that asks the real question about bands, are they worse than 311?"
        />  
        <section className={styles.epsiodesSection}>
          <div className={clsx(styles.episodePage, "inner")}>
            <h4 className="h4">Check out our Episodes</h4>
            <div className={styles.episodeContainer}>
            {items.map((ep) => {
              const newText = {__html: ep.description.split('--')[0]};
                       return(
                <div key={ep.id} className={styles.item}>
                  <h5><Link href={ep.url}><a rel="noreferrer" target="_blank">{ep.title}</a></Link></h5>
                  <section dangerouslySetInnerHTML={newText}></section>
                </div>
              )
            })}
            </div>
        </div>
      </section>
      </div>
    )
}