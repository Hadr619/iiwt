import { NextSeo } from 'next-seo';
import Header from '../../components/Header/Header';
import { createClient} from 'contentful';
import BlogCard from '../../components/Card/BlogCard';
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
const props = {
  title: "Blog",
  description: "A blog page description"
}

export default function BlogPage({ posts }) {

    return (
      <div>
      <Header props={props}/>
      <NextSeo 
      title="Is It Worse Than - Blog"
      description="The only site that asks the real question about bands, are they worse than 311?"
      />
        <section className={styles.blogWrapper}>
        <div className={clsx(styles.blogContainer, "inner")}>
          {posts.map(post => (
            <BlogCard key={post.sys.id} post={post}/>
          ))}
          </div>
        </section>
      </div>
    )
  }