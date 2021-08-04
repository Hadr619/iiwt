import clsx from 'clsx';
import styles from './card.module.scss';

export default function Card({children, className, flipId}) {
    return(
        <div className={clsx(styles.card, className)} data-flip-id={flipId}>
            {children}
        </div>
    )
}