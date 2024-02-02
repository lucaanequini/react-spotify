import styles from './styles.module.css';

export default function Card({ imageUrl, title, backgroundColor }) {
    const cardStyle = {
        backgroundColor: backgroundColor,
    };

    return (
        <a href="" className={styles.cards}>
            <div className={styles.cards} style={cardStyle}>
                <img className={styles.cardImg} src={imageUrl} alt="" />
                <span>{title}</span>
            </div>
        </a>
    )
}