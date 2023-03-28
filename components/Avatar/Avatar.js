import Logo from "../svg/Logo";
import Image from 'next/image';
import styles from './Avatar.module.scss';
import clsx from "clsx";
export default function Avatar({author, className}) {
    const cleanName = author.split(' ').join('').toLowerCase();
    const displayAvatar = () => {
        console.log(cleanName == 'rcro' ? 'jpg' : 'jpeg')
            return (
            <div className={clsx(styles.avatar)}>
                <Image 
                src={`/avatar-${cleanName}.${cleanName == 'rcro' ? 'jpg' : 'jpeg'}`}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                />
            </div>
            )
    }
    return (
        <div className={clsx(styles.author, className)}>{displayAvatar()} {author}</div>
    )
}