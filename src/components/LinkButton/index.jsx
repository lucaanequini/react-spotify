import styles from './styles.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function LinkButton(props) {
    const fontSizeClass = props.small ? styles.small : styles.normal;
    return (
        <FontAwesomeIcon className={`${styles.icon} ${fontSizeClass}`} icon={props.iconName} />
    )
}