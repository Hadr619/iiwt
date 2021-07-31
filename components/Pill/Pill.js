import styles from './Pill.module.scss';

export default function Pill({content}) {
    return (
        <div className={styles.pill}>{content}</div>
    )
}