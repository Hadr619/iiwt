
import Link from 'next/link';

export default function BlogCard({ post }) {
    const {title, slug, featuredImage} = post.fields;

    return (
        <Link href={`/blog/${slug}`}>
            <a>{title}</a>
        </Link>
    )
}