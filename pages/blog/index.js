import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useState, useEffect } from 'react';
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
      posts: res.items,
      latest: res.items.length > 5 ? res.items.splice(4) : res.items
    },
    revalidate: 1
  }

}

export default function BlogPage({ posts, latest }) {

  const taco = [];

  posts.map(post => {
    taco.push(post.fields.blogType);
  })

    return (
      <div className={styles.blogPage}>
      <NextSeo 
      title="Is It Worse Than - Blog"
      description="The only site that asks the real question about bands, are they worse than 311?"
      />
        <section className={styles.blogWrapper}>
        <h4 className="h4">Shit we Sometimes write about</h4>
          <div className={clsx(styles.blogGrid, "inner")}>
          
            <div className={clsx(styles.blogContainer)}>
            {posts.map(post => (
              <BlogCard key={post.sys.id} post={post} className={styles.blogPost}/>
            ))}
            </div>
            <aside className={styles.aside}>
              <h4 className={styles.asideTitle}>Latest Posts</h4>
              <div className={styles.latestPosts}>
              {latest.map((post) => (
                <Link key={post.sys.id} href={`/blog/${post.fields.slug}`}>
                  <a className={styles.latestLink}>
                    {post.fields.title}
                  </a>
                </Link>
              ))}
              </div>
            </aside>
          </div>
        </section>
      </div>
    )
  }