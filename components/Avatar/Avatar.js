import Logo from "../svg/Logo";
import styles from './Avatar.module.scss';
import clsx from "clsx";
export default function Avatar({author, className}) {
    const displayAvatar = () => {
        return <div className={styles.avatarSvg}><Logo /></div>
    }
    return (
        <div className={clsx(styles.author, className)}>{displayAvatar()} {author}</div>
    )
}