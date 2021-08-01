
import Link from 'next/link';
import Image from 'next/image';
import Card from './Card';
import clsx from 'clsx';
import Logo from '../svg/Logo';
import Avatar from '../Avatar/Avatar';
import Pill from "../Pill/Pill";
import styles from './blogCard.module.scss';

export default function BlogCard({ post, className }) {

    const {title, slug, featuredImage, postDescription, blogType, author} = post.fields;

    const stringCheck = "MID-WEEK REVIEW";
    const newTitle = () => {
        if(title.includes(stringCheck)){
            return title.replace(stringCheck, "")
        } else {
            return title
        }
    }


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
                <Pill content={blogType}/>
                <Avatar author={author}/>
                <h4 className={styles.title}>{newTitle()}</h4>
                <p className={styles.description}>{postDescription}</p>
                </figcaption>
                <div>Read More</div>
                </figure>
                </a>   
            </Link>
        </Card>
    )
}