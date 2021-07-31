import { NextSeo } from 'next-seo';
import { createClient} from 'contentful';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import Skeleton from '../../components/Skeleton';
import Pill from "../../components/Pill/Pill";
import Avatar from '../../components/Avatar/Avatar';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import styles from './slug.module.scss';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'blogPost'
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
   const { items } = await client.getEntries({
     content_type: 'blogPost',
     'fields.slug': params.slug
   })
   const res = await client.getEntries({ content_type: 'blogPost' })

   if(!items.length){
     return {
       redirect: {
         destination: '/',
         permanent: false
       }
     }
   }

   return {
     props: { post: items[0],
              posts: res.items },
     revalidate: 1
   }
}

export default function BlogDeets({ post, posts }) {
console.log(post);
  const options = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields }}}) =>
            <img src={`https:${fields.file.url}`} height={`${fields.file.details.image.height}`} width={`${fields.file.details.image.width}`} alt={`${fields.description}`}/>,
    },
};
  if(!post){
   return <Skeleton />
  }
  else{

  const { slug, featuredImage, title, metaDescription, blogType, author, content } = post.fields;

  return (
    <div>
      <NextSeo 
      title={`Is It Worse Than - ${title}`}
      description={``}
      openGraph={{
        type: 'website',
        url: `https://www.isitworsethan.com/blog/${slug}`,
        title: `${title}`,
        description: `${metaDescription}`,
        images: [
          {
            url: `https:${featuredImage.fields.file.url}`,
            width: `${featuredImage.fields.file.details.image.width}`,
            height: `${featuredImage.fields.file.details.image.width}`,
            alt: 'Blog Featured Image',
          },
        ],
      }}
      />
      <section className={styles.slugPage}>

      <div className={clsx(styles.slugContainer, "inner")}>   
      <div className={styles.slugGrid}>
      <main>
        <div className={styles.banner}>
          <Pill content={blogType}/>
          <h2 className={styles.title}>{title}</h2>
          <Avatar author={author}/>
        </div>
        <div className={styles.content}>{documentToReactComponents(content, options)}</div>
      </main>
      <aside className={styles.aside}>
              <section className={styles.asideSection}>
                <Link href={'/blog'}><a className={styles.link}><i className="fa fa-arrow-left" aria-hidden="true"></i> Back to blogs</a></Link>
              </section>
              <section className={styles.asideSection}>
              <h4 className={styles.asideTitle}>Recent Posts</h4>
              <div className={styles.latestPosts}>
                {posts.slice(0,2).map(ep => {
                  return (<Link key={ep.sys.id} href={`/blog/${ep.fields.slug}`}>
						                  <div className={styles.postCard}>
                                <div className={styles.imageWrapper}>
                                  <Image 
                                    src={`https:${ep.fields.featuredImage.fields.file.url}`}
                                    width="150px"
                                    height="100px"
                                    className={styles.image}
                                  />
                                </div>
                                <div className={styles.textWrap}>{ep.fields.title}</div>
							                </div>
                              </Link>)
                })}
              
              </div>
              </section>
            </aside>
            </div>
      </div>

      </section>
    </div>
  )
}
}