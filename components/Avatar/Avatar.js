import Logo from "../svg/Logo";
import styles from './Avatar.module.scss';
export default function Avatar({author}) {
    const displayAvatar = () => {
        return <div className={styles.avatarSvg}><Logo /></div>
    }
    return (
        <div className={styles.author}>{displayAvatar()} {author}</div>
    )
}