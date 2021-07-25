import { NextSeo } from 'next-seo';
import { createClient} from 'contentful';
import clsx from 'clsx';
import Image from 'next/image';
import Skeleton from '../../components/Skeleton';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
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

   if(!items.length){
     return {
       redirect: {
         destination: '/',
         permanent: false
       }
     }
   }

   return {
     props: { post: items[0] },
     revalidate: 1
   }
}

export default function BlogDeets({ post }) {

  if(!post){
   return <Skeleton />
  }
  else{

  const { slug, featuredImage, title, metaDescription, postDescription, content } = post.fields;

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
      <h2>{title}</h2>
      <div className={styles.image}>
      <Image src={`https:${featuredImage.fields.file.url}`}
          width={featuredImage.fields.file.details.image.width} 
          height={featuredImage.fields.file.details.image.height} />
          </div>
      <div>{documentToReactComponents(content)}</div>
      </div>
      </section>
    </div>
  )
}
}