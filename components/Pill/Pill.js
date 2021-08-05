import clsx from 'clsx';
import styles from './Pill.module.scss';

export default function Pill({content, className}) {
    return (
        <div className={clsx(styles.pill, className)}>{content}</div>
    )
}