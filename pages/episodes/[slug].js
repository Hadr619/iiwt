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
    const buildIframe = (em)  => {
        return (<iframe src="https://anchor.fm/isitworsethan/episodes/MID-WEEK-REVIEW---Inhaler---It-Wont-Always-Be-Like-This-e14fmbv" height="102px" width="400px" frameBorder="0" scrolling="no" allow="encrypted-media" allowtransparency="true"></iframe>);
    }
    // console.log(episode);
    const embed = 'https://anchor.fm/isitworsethan/episodes/MID-WEEK-REVIEW---Inhaler---It-Wont-Always-Be-Like-This-e14fmbv';
    return(
        <div>
        <div>{episode.title}</div>
        <div dangerouslySetInnerHTML={{__html:episode.description}}></div>
        {/* <iframe src={`${embed}`} height="102px" width="400px" frameBorder="0" scrolling="no" allow="encrypted-media" allowtransparency="true"></iframe> */}
        {buildIframe()}
        </div>
    )
}