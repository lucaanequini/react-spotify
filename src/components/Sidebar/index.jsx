import Libraryy from "../Libraryy";
import SidebarNav from "../SidebarNav";
import styles from './styles.module.css';

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <SidebarNav></SidebarNav>
            <Libraryy></Libraryy>
        </div>
    )
}