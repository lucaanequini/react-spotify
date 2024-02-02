import LinkButton from "../LinkButton";
import LinkText from "../LinkText";
import SectionPlaylist from "../SectionPlaylist";
import styles from './styles.module.css';
import { faBook, faPlus, faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
    return (
        <div className={styles.library}>
            <div className={styles.library__content}>
                <button className={styles.library__button}>
                    <LinkButton iconName={faBook}></LinkButton>
                    <LinkText>Sua Biblioteca</LinkText>
                </button>
                <LinkButton iconName={faPlus} small></LinkButton>
            </div>
            <div className={styles.scrollContainer}>
                <SectionPlaylist
                    textTitle="Crie sua primeira playlist"
                    textSubTitle="É fácil, vamos te ajudar."
                    btnText="Criar playlist"
                    small
                ></SectionPlaylist>
                <SectionPlaylist
                    textTitle="Que tal seguir um podcast novo?"
                    textSubTitle="Avisaremos você sobre novos episódios."
                    btnText="Explore podcasts"
                ></SectionPlaylist>
            </div>
            <div className={styles.cookies}>
                <a href="">Cookies</a>
            </div>
            <div className={styles.languages}>
                <button className={styles.languages__button}>
                    <LinkButton iconName={faGlobe}></LinkButton>
                    <LinkText>Português do Brasil</LinkText>
                </button>

            </div>
        </div>
    )
}