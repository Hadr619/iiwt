import Link from 'next/link';
import { useRouter } from "next/router";

export default function Nav(){ 
    const router = useRouter();
        return (
            <ul>
            <li><Link href="/">TEST</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <style jsx> {`
                .active{
                    background-color:aqua;
                }
            `}</style>
            </ul>
        )
    }