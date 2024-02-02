import styles from './styles.module.css'

export default function LinkText(props) {
    return (
        <span className={styles.text}>{props.children}</span>
    )
}