import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image';
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
    },
    revalidate: 1
  }

}

export default function BlogPage({ posts }) {
  console.log(posts);
  const rawItems = posts;
  const [items, setItems] = useState(rawItems);

  const labelList = [];
  const albumReviews = [];
  const artistReviews = [];
  const shitPost = [];

  const upsert = (array, item) => { // (1)
    const i = array.findIndex(_item => _item === item);
    if (i > -1) array[i] = item; // (2)
    else array.push(item);
  }
  posts.map(post => {
    upsert(labelList, post.fields.blogType )
  })

  posts.map(post => {
    if(post.fields.blogType.toLowerCase() == 'artist review'){
      artistReviews.push(post.fields.blogType)
    }else if(post.fields.blogType.toLowerCase() == 'album review'){
      albumReviews.push(post.fields.blogType)
    } else if(post.fields.blogType.toLowerCase() == 'shit post'){
      shitPost.push(post.fields.blogType)
    }
  })
  
  const handleClick = (label) => {
    const newLabel = label ? label.toLowerCase() : "";
    if(newLabel == 'shit post'){
      setItems(items => rawItems.filter(item => item.fields.blogType.toLowerCase().includes("shit post")))
    } else if(newLabel == 'artist review'){
      console.log(items);
      setItems(items => rawItems.filter(item => item.fields.blogType.toLowerCase().includes("artist review")))

    } else if(newLabel == 'album review'){
      setItems(items => rawItems.filter(item => item.fields.blogType.toLowerCase().includes("album review")))
    }
    else{
      setItems(rawItems);
    }
  }

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
            {items.map(item => (
              <BlogCard key={item.sys.id} post={item} className={styles.blogPost}/>
            ))}
            </div>
            <aside className={styles.aside}>
              <section className={styles.asideSection}>
              <h4 className={styles.asideTitle}>Categories</h4>
              <div className={styles.latestPosts}>
                <div onClick={() => handleClick()} className={styles.catItems}>All</div>
                {labelList.map(label => {
                  return <div key={label} onClick={() => handleClick(label)} className={styles.catItems}>{label}</div>
                })}
              
              </div>
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
        </section>
      </div>
    )
  }