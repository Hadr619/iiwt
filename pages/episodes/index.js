
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import Link from "next/link";
import Filter from "../../components/Filter/Filter";
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
  const [activeType, setActiveType] = useState("All");
	const [filtered, setFiltered] = useState([]); 
  const uniqueTypes = [
    "Episodes",
    "End of the Month",
    "Movie Night"
  ]
  console.log(activeType)
  useEffect(() => {
    if(activeType === "All"){
        setFiltered(episodes.items)
        return
    }
let newFiltered = "";
        if(activeType == "Episodes"){
          newFiltered = episodes.items.filter((episode) =>
              episode.title.toLowerCase().includes("ep")
            )
        }
        else if (activeType == "End of the Month"){
          newFiltered = episodes.items.filter(episode =>
            episode.title.toLowerCase().includes("end of the month")
            )
        }
        else if (activeType == "Movie Night"){
          newFiltered = episodes.items.filter(episode =>
            episode.title.toLowerCase().includes("movie night")
            )
        }
    setFiltered(newFiltered);
console.log(newFiltered)
},[activeType])

    return (
      <div>
        <NextSeo 
          title="Is It Worse Than - Episodes"
          description="The only site that asks the real question about bands, are they worse than 311?"
        />  
        <section className={styles.epsiodesSection}>
          <div className={clsx(styles.episodePage, "inner")}>
            <h4 className="h4">Check out our Episodes</h4>
            <Filter 
              types={uniqueTypes} 
              activeType={activeType} 
              setActiveType={setActiveType} 
              setFiltered={setFiltered}
              className={styles.filter}
            />
            <div className={styles.episodeContainer}>
            {filtered.map((ep) => {
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