import { createClient} from 'contentful';
import BlogCard from '../../components/blogCard';

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
    return (
      <div className="blog-list">
        {posts.map(post => (
          <BlogCard key={post.sys.id} post={post}/>
        ))}
      </div>
    )
  }