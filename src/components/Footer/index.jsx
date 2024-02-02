import styles from './styles.module.css';

export default function Footer() {
    return (
        <footer className={styles.disclaimer_premium}>
            <div className={styles.text}>
                <p className={styles.disclaimer_premium__title}>Testar o Premium de graça</p>
                <p className={styles.disclaimer_premium__subtitle}>
                    Inscreva-se para curtir música ilimitada e podcasts só com alguns
                    anúncios. Não precisa de cartão de crédito.
                </p>
            </div>
            <div className={styles.button}>
                <button type="button">Inscreva-se grátis</button>
            </div>
        </footer>
    )
}