import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from './styles.module.css';

export default function Artist({ imgArtUrl, name }) {
    return (
        <div className={styles.artist_card}>
            <div className={styles.card_img}>
                <img className={styles.artist_img} src={imgArtUrl} />
                <div className={styles.play}>
                    <FontAwesomeIcon icon={faPlay} className={styles.faPlayBtn}></FontAwesomeIcon>
                </div>
            </div>
            <div className={styles.card_text}>
                <span className={styles.artist_name}>{name}</span>
                <span className={styles.artist_categorie}>Artista</span>
            </div>
        </div >
    )
}