
import Link from 'next/link';
import Image from 'next/image';
import Card from './Card';
import clsx from 'clsx';
import styles from './blogCard.module.scss';

export default function BlogCard({ post, className }) {
    const {title, slug, featuredImage, postDescription} = post.fields;

    return (
        <Card className={className}>
            <Link key={post.sys.id} href={`/blog/${slug}`}>
                <a className={styles.card}>
                <div className={styles.imageWrapper}>
                    <Image src={`https:${featuredImage.fields.file.url}`}
                        layout="responsive"
                        width={featuredImage.fields.file.details.image.width}
                        height={featuredImage.fields.file.details.image.height}
                        alt="Is It Worse Than blog image"
                        className={styles.image}/>
                    </div>
                <h4>{title}</h4>
                <p>{postDescription}</p>
                </a>   
            </Link>
        </Card>
    )
}