import { createClient} from 'contentful';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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

//   if(!recipe){
//    return <Skeleton />
//   }
//   else{

  const { featuredImage, title, content } = post.fields;

  return (
    <div>
    <Image src={`https:${featuredImage.fields.file.url}`}
        width={featuredImage.fields.file.details.image.width} 
        height={featuredImage.fields.file.details.image.height}/>
    <h2>{title}</h2>
        <div>{documentToReactComponents(content)}</div>
    </div>
  )
//}
}