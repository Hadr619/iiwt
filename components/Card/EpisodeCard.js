import Link from 'next/link';

export default function EpisodeCard({ episode }) {


    return (
        <li>
            <Link href={`${episode.url}`}>
                <a target="_blank"><h4>{episode.title}</h4></a>
            </Link>
        </li>

    )
}