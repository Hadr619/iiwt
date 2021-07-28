
import Link from 'next/link';
import Image from 'next/image';
import Card from './Card';
import clsx from 'clsx';
import styles from './blogCard.module.scss';

export default function BlogCard({ post, className }) {
    const {title, slug, featuredImage, postDescription, blogType, author} = post.fields;

    return (
        <Card className={className}>
            <Link key={post.sys.id} href={`/blog/${slug}`}>
                <a className={styles.card}>
                <figure>
                <div className={styles.imageWrapper}>
                    <Image src={`https:${featuredImage.fields.file.url}`}
                        layout="responsive"
                        width={featuredImage.fields.file.details.image.width}
                        height={featuredImage.fields.file.details.image.height}
                        alt="Is It Worse Than blog image"
                        className={styles.image}/>
                    </div>
                <figcaption className={styles.info}>
                <div className={styles.blogPill}>{blogType}</div>
                <div className={styles.author}>{author}</div>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.description}>{postDescription}</p>
                </figcaption>
                <div>Read More</div>
                </figure>
                </a>   
            </Link>
        </Card>
    )
}