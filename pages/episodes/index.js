import Link from 'next/link';
import Feed from 'rss-to-json';

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
        <div>
        <h2>EPISODES</h2>  
        {episodes.items.map((ep, index) => (
          <Link key={index} href={`/episodes/${ep.title.replace(/\./g,"").replace(/\s/g , "-")}`}>
            <div>{ep.title}</div>
          </Link>
        ))}
      </div>
    )
}