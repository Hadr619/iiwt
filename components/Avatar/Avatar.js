import Logo from "../svg/Logo";
import styles from './Avatar.module.scss';
export default function Avatar({author}) {
    const displayAvatar = () => {
        if(author){
            if(author.toLowerCase() == 'hadr'){
                return <img src="/avatars/perry.jpeg" className={styles.avatar}/>
            } else{
                return <div className={styles.avatarSvg}><Logo /></div>
            }
        }
    }
    return (
        <div className={styles.author}>{displayAvatar()} {author}</div>
    )
}