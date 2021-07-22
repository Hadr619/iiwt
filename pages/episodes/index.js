
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import Header from '../../components/Header/Header';
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
  const rawItems = episodes.items;
  const [items, setItems] = useState(rawItems);
  const [activeBtn, setActiveBtn] = useState('all');
  const handleClick = (e) => {
    const val = e.target.value;
    e.preventDefault();
    if(val.toLowerCase() == 'episodes'){
      setItems(items => rawItems.filter(item => !item.title.toLowerCase().includes("review")))
      
    }
    if(val.toLowerCase() == "mid-week"){
      setItems(items => rawItems.filter(item => item.title.toLowerCase().includes("review")))
    }
    if(val.toLowerCase() == "all") {
      setItems(rawItems);
    }
    setActiveBtn(val);
  }
    return (
      <div>
        <NextSeo 
          title="Is It Worse Than - Episodes"
          description="The only site that asks the real question about bands, are they worse than 311?"
        />  
        <section className={styles.epsiodesSection}>
          <div className={clsx(styles.episodePage, "inner")}>
            <h4>Check out our Episodes</h4>
            <div className={styles.btnContainer}>
              <button className={clsx(styles.btn, activeBtn == 'all' ? styles.activeBtn : "")} value="all" onClick={handleClick}>All</button>
              <button className={clsx(styles.btn, activeBtn == 'episodes' ? styles.activeBtn : "")} value="episodes" onClick={handleClick}>Episodes</button>
              <button className={clsx(styles.btn, activeBtn == 'mid-week' ? styles.activeBtn : "")} value="mid-week" onClick={handleClick}>Mid Week Reviews</button>
            </div>      
          <div className={styles.episodeContainer}>
            {items.map((ep, index) => (
              <EpisodeCard key={index} episode={ep}/>
            ))}
          </div>
        </div>
      </section>
      </div>
    )
}