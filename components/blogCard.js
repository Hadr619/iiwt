
import Link from 'next/link';

export default function BlogCard({ post }) {
    const {title, slug, featuredImage} = post.fields

    return (
        <div>
        <Link href={`/blog/${slug}`}>
            <a><h4>{title}</h4></a>
        </Link>
        </div>
    )
}