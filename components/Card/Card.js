import clsx from 'clsx';
import { motion} from "framer-motion";
import styles from './card.module.scss';

export default function Card({children, className, flipId}) {
    return(
        <motion.div  animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout className={clsx(styles.card, className)}>
            {children}
        </motion.div>
    )
}