import LinkButton from "../LinkButton";
import LinkText from "../LinkText";
import styles from './styles.module.css';
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SidebarNav(props) {
    return (
        <nav className={styles.sidebar__navigation}>
            <div className={styles.logo}>
                <a href="">
                    <img src="./src/assets/icons/logo-spotify.png" alt="Logo" />
                </a>
            </div>
            <ul>
                <li>
                    <a href="">
                        <LinkButton iconName={faHome}></LinkButton>
                        <LinkText>Início</LinkText>
                    </a>
                </li>
                <li>
                    <a href="">
                        <LinkButton iconName={faSearch}></LinkButton>
                        <LinkText>Buscar</LinkText>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
