import { createClient} from 'contentful';
import BlogCard from '../../components/Card/blogCard';
import clsx from 'clsx';
import styles from './blog.module.scss';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: 'blogPost' }) //whatever content type is set up in content model

  return {
    props: {
      posts: res.items
    },
    revalidate: 1
  }

}
export default function BlogPage({ posts }) {
  console.log(posts)
    return (
      <div className="TACO">
        {posts.map(post => (
          <BlogCard key={post.sys.id} post={post}/>
        ))}
      </div>
    )
  }