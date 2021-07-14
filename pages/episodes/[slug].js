import Feed from 'rss-to-json';

export const getStaticPaths = async () => {

    const rss = await Feed.load('https://anchor.fm/s/4041b370/podcast/rss');

  
    const paths = rss.items.map(item => {
      return {
        params: { slug: item.title.replace(/\s/g , "-")}
      }
    })
  
    return {
      paths,
      fallback: true
    }
  }
  export async function getStaticProps({ params }) {
    // const { items } = await client.getEntries({
    //   content_type: 'blogPost',
    //   'fields.slug': params.slug
    // })
    

    const rss = await Feed.load('https://anchor.fm/s/4041b370/podcast/rss');
    const items = rss.items.filter(item => {
        return item.title.replace(/\s/g , "-") == params.slug;
    })
 
    if(!items.length){
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }
 
    return {
      props: { episode: items[0] },
      revalidate: 1
    }
 }

export default function Episode({episode}){
    console.log(episode);
    return(
        <div>
        <div>{episode.title}</div>
        <div>{episode.description}</div>
        </div>
    )
}