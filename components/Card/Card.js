import clsx from 'clsx';
import styles from './card.module.scss';

export default function Card({children, className}) {
    return(
        <div className={clsx(styles.card, className)}>
            {children}
        </div>
    )
}