import { createClient} from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './index.module.scss';
import clsx from 'clsx';
import Feed from 'rss-to-json';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
//   Feed.load('https://anchor.fm/s/4041b370/podcast/rss').then(rss => {
//     console.log(JSON.stringify(rss, null, 3));
// });
  const rss = await Feed.load('https://anchor.fm/s/4041b370/podcast/rss');
  const res = await client.getEntries({ content_type: 'homePage' }) //whatever content type is set up in content model
  return {
    props: {
      homePage: res.items[0],
      episodes: rss
      
    },
    revalidate: 1
  }

}

export default function Home({ homePage, episodes }) {
  console.log(episodes);
  const {title, content} = homePage.fields;
  // console.log(episodes.items[0].url);
  return (
    <section className={clsx(styles.homepageInner, 'inner')}>
      {/* <iframe src={`${episodes.items[0].url}`} height="102px" width="400px" frameBorder="0" scrolling="no"></iframe> */}
<iframe src="https://open.spotify.com/embed/show/1I7lI0F33YvpLuORxLp7Ar?theme=0" width="100%" height="152" frameBorder="0" allowtransparency="true" allow="encrypted-media" className={styles.iframe}></iframe>
      <div className={styles.homepageContent}>
        <div>{documentToReactComponents(content)}</div>
        <div>
          <h4>Latest ep</h4>
          <span>{episodes.items[0].url}</span>
        </div>
        <div className={styles.episodes}>
          {episodes.items.map((ep, index) => (
            <div key={index}>{ep.title}</div>
          ))}
        </div>
      </div>
    </section>
  )
}