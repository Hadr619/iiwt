import clsx from "clsx";
import styles from "./GridRow.module.scss";

export default function GridRow({name, content}) {
    return (
        <div className={styles.tierRow}>
        <div className={clsx(styles.tierName, `tierName-${name}`)}>{name}</div>
            <div className={styles.tierContent}>
            {content.map((band, index) => {
                return (
                        <div className={styles.bandName} key={index}>
                            <span> {band}</span>
                            <span className={styles.separator}>-</span>
                        </div>

                )
            })}
            </div>
        </div>
    )
}