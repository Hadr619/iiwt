
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import { createClient} from 'contentful';
import EpisodeCard from '../components/Card/EpisodeCard';
import Logo from "../components/svg/Logo";
import Avatar from '../components/Avatar/Avatar';
import Pill from '../components/Pill/Pill';
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
  const blogRes = await client.getEntries({ content_type: 'blogPost' })
  return {
    props: {
      homePage: res.items[0],
      blogs: blogRes.items.length > 3 ? blogRes.items.splice(0,3) : blogRes.items,
      episodes: rss.items.splice(0,3)
      
    },
    revalidate: 1
  }

}
export default function Home({ homePage, episodes, blogs }) {
  console.log(blogs);
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
          <div className={clsx(styles.blogPosts, "inner")}>
			{blogs.map( blog => {
				return (
					<Link href={`/blog/${blog.fields.slug}`}>
						<div className={styles.blogCard}>
								<Image 
								src={`https:${blog.fields.featuredImage.fields.file.url}`}
								layout="fill"
								objectFit="cover"
								className={styles.image}
								/>
								<div className={styles.info}>
								<Pill content={blog.fields.blogType} className={styles.blogPill}/>
								<div>
									<div className={styles.blogTitle}>{blog.fields.title}</div>
									<div><Avatar author={blog.fields.author} className={styles.blogAvatar}/></div>
								</div>
								</div>
						</div>
					</Link>
				)
			})}
          </div>

          <div className={clsx(styles.episodes, 'inner')}>
            {episodes.map((ep, index) => (
              <EpisodeCard key={index} episode={ep}/>
            ))}
          </div>
          <div className={styles.donate}>
            <Image 
              className={styles.donateImage}
              src="/donate.jpg"
              layout="fill"
              objectFit="cover"
              alt="Podcast image from useproof.com"
              />
              <div className={styles.donateText}>
                <h2 className={styles.donateTitle}>Support the show</h2>
                <p className={styles.donateDescription}>if you would like to support the show so that we may keep comparing bands, that'd be great mmkay</p>
                <a href="https://anchor.fm/isitworsethan/support" target="_blank" rel="noreferrer" className={styles.donateBtn}><Logo /> Donate</a>
              </div>
          </div>
        </div>
      </section>
    </>

  )
}