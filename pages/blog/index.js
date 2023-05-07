import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useFlip } from 'react-easy-flip'
import Filter from "../../components/Filter/Filter";
import { createClient} from 'contentful';
import BlogCard from '../../components/Card/BlogCard/BlogCard';
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
  const [activeType, setActiveType] = useState("All");
	const [filtered, setFiltered] = useState([]);
  
  const blogTypes = [];
	posts.forEach((post) => {
	  blogTypes.push(post.fields.blogType)
	})
	const uniqueTypes = [...new Set(blogTypes)]

  useEffect(() => {
    if(activeType === "All"){
        setFiltered(posts)
        return
    }
    const filtered = posts.filter(post =>
        post.fields.blogType.toLowerCase().includes(activeType.toLowerCase())
        )
    setFiltered(filtered);

},[activeType])
  const handleClick = (label) => {
    setActiveType(label)
  }

const displayPostCount = (blogType) => {
  return posts.filter(post => post.fields.blogType == blogType).length
}

    return (
      <div className={styles.blogPage}>
      <NextSeo 
      title="Is It Worse Than - Blog"
      description="The only site that asks the real question about bands, are they worse than 311?"
      />
        <section className={styles.blogWrapper}>
        <h4 className="h4">Blog Posts</h4>
        <Filter 
          types={uniqueTypes} 
          activeType={activeType} 
          setActiveType={setActiveType} 
          setFiltered={setFiltered}
          className={styles.filter}
          />
          <div className={clsx(styles.blogGrid, "inner")}>
          
            <motion.div className={clsx(styles.blogContainer)} >
              <AnimatePresence>
                {filtered.map(item => (
                  <BlogCard key={item.sys.id} post={item} className={styles.blogPost}/>
                ))}
              </AnimatePresence>
            </motion.div>
            <aside className={styles.aside}>
              <section className={styles.asideSection}>
              <h4 className={styles.asideTitle}>Categories</h4>
              <div className={clsx(styles.latestPosts, styles.categories)}>
                <div onClick={(e) => handleClick("All")} className={clsx(styles.catItems)}>All <span className={styles.count}>({posts.length})</span></div>
                {uniqueTypes.map(label => {
                  return (
                    <div key={label} onClick={(e) => handleClick(label)} className={clsx(styles.catItems)}>{label} <span className={styles.count}>({displayPostCount(label)})</span></div>
                  )                  
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
                                    layout="fill"
                                    objectFit="cover"
                                    objectPosition="center"
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