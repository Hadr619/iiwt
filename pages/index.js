
import { NextSeo } from 'next-seo';
import Header from "../components/Header/Header";
import { createClient} from 'contentful';
import EpisodeCard from '../components/Card/EpisodeCard';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './index.module.scss';
import clsx from 'clsx';
import Feed from 'rss-to-json';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const rss = await Feed.load('https://anchor.fm/s/4041b370/podcast/rss');
  const res = await client.getEntries({ content_type: 'homePage' }) //whatever content type is set up in content model
  return {
    props: {
      homePage: res.items[0],
      episodes: rss.items.splice(0,3)
      
    },
    revalidate: 1
  }

}
export default function Home({ homePage, episodes }) {
  const {content} = homePage.fields;
  return (
    <>
      <NextSeo 
      title="Is It Worse Than"
      description="The only site that asks the real question about bands, are they worse than 311?"
    />
      <section className={clsx(styles.homepageInner)}>
        <div className={styles.iframeContainer}>
          <div className={clsx(styles.iframeWrapper, "inner")}>
            <h4 className="h4">Latest Epsisode</h4>
            <iframe src="https://open.spotify.com/embed/show/1I7lI0F33YvpLuORxLp7Ar?theme=0" title="Newest Episode" width="100%" height="152" frameBorder="0" allowtransparency="true" allow="encrypted-media" className={styles.iframe}></iframe>
          </div>
          </div>
        <div className={styles.homepageContent}>
          <div className={clsx(styles.homeInfo, "inner")}>{documentToReactComponents(content)}</div>
          <div className={clsx(styles.episodes, 'inner')}>
            {episodes.map((ep, index) => (
              <EpisodeCard key={index} episode={ep}/>
            ))}
          </div>
        </div>
      </section>
    </>

  )
}