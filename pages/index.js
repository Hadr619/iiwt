import Link from 'next/link';
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
      episodes: rss.items.splice(0,3)
      
    },
    revalidate: 1
  }

}

export default function Home({ homePage, episodes }) {
  console.log(episodes);
  const {content} = homePage.fields;
  return (
    <section className={clsx(styles.homepageInner, 'inner')}>
      <iframe src="https://open.spotify.com/embed/show/1I7lI0F33YvpLuORxLp7Ar?theme=0" width="100%" height="152" frameBorder="0" allowtransparency="true" allow="encrypted-media" className={styles.iframe}></iframe>
      <div className={styles.homepageContent}>
        <div>{documentToReactComponents(content)}</div>
        <div className={styles.episodes}>
          {episodes.map(ep => (
            <Link href={ep.url}>
              <a key={ep.id} target="_blank">
                <div>
                {ep.title}
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}