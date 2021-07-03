
import styles from './NavIcon.module.scss';

export default function NavIcon() {
    return (
        <>
            <span className={styles.navIcon}>
            <i className="menu-background top"></i>
            <i className="menu-background middle"></i>
            <i className="menu-background bottom"></i>
            </span>
        </>
    )
}