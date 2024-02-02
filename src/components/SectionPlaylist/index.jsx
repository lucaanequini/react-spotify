import styles from './styles.module.css'

export default function SectionPlaylist(props) {
    const widthClass = props.small ? styles.small : styles.normal;
    return (
        <section className={styles.section_playlist}>
            <div className={styles.section_playlist__content}>
                <span className={styles.title}>{props.textTitle}</span>
                <span className={styles.subtitle}>{props.textSubTitle}</span>
            </div>
            <button className={`${styles.default_btn} ${widthClass}`}>
                {props.btnText}
            </button>
        </section>
    )
}