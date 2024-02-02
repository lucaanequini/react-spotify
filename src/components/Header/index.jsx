import React, { useState, createContext } from 'react';
import ArtistCard from '../Artist'
import Card from '../Card';
import styles from './styles.module.css';

export const ArtistsContext = createContext();

export default function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const [artists, setArtists] = useState([]);
    const [resultArtistVisible, setResultArtistVisible] = useState(false);

    const showSearchResults = () => {
        setResultArtistVisible(true);
    };

    const hideSearchResults = () => {
        setResultArtistVisible(false);
        setSearchTerm('');
    };

    const handleInputChange = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);

        if (value === '') {
            hideSearchResults();
            return;
        }

        requestApi(value);
    };

    const requestApi = (searchTerm) => {
        const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
        fetch(url)
            .then((response) => response.json())
            .then((result) => displayResults(result));
    };

    const displayResults = (result) => {
        setArtists(result);
        setResultArtistVisible(true);
    };


    return (
        <div className={styles.main_container}>
            <nav className={styles.header__navigation}>
                <div className={styles.navigation}>
                    <button className={styles.arrow_left}>
                        <img src="./src/assets/icons/small-left.png" alt="" />
                        <a href=""></a>
                    </button>
                    <button className={styles.arrow_right}>
                        <img src="./src/assets/icons/small-right.png" alt="" />
                        <a href="/index.html"></a>
                    </button>
                </div>
                <div className={styles.header__search}>
                    <img src="./src/assets/icons/search.png" alt="" />
                    <input
                        id="search-input"
                        maxLength="800"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        placeholder="O que você quer ouvir?"
                        onChange={handleInputChange}
                        onFocus={showSearchResults}
                        onBlur={hideSearchResults}
                    />
                </div>
                <div className={styles.header__login}>
                    <button className={styles.subscribe}>Inscreva-se</button>
                    <button className={styles.login}>Entrar</button>
                </div>
            </nav>
            {artists.length > 0
                ?
                <div className={styles.playlist_container} id={styles.result_playlists}>
                    <div className={styles.result_artist}>
                        <div className={styles.offer__scroll_container}>
                            <div className={styles.offer__list}>
                                <section className={styles.offer__list_item}>
                                    <div className={styles.grid_container}>
                                        {artists.map((artist) => (
                                            <ArtistCard key={artist.id} imgArtUrl={artist.urlImg} name={artist.name}></ArtistCard>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                : (
                    <div className={styles.playlist_container}>
                        <div id={styles.result_playlists}>
                            <div className={styles.playlist}>
                                <h1 id={styles.greeting}>Boas vindas</h1>
                                <h2 className={styles.session}>Navegar por todas as seções</h2>
                            </div>
                            <div className={styles.offer__scroll_container}>
                                <div className={styles.offer__list}>
                                    <section className={styles.offer__list_item}>
                                        <Card imageUrl='./src/assets/playlist/1.jpeg' title='Boas Festas' backgroundColor='rgb(0, 100, 80)'></Card>
                                        <Card imageUrl='./src/assets/playlist/2.png' title='Feitos para você' backgroundColor='rgb(132, 0, 231)'></Card>
                                        <Card imageUrl='./src/assets/playlist/3.jpeg' title='Lançamentos' backgroundColor='rgb(30, 50, 100)'></Card>
                                        <Card imageUrl='./src/assets/playlist/4.jpeg' title='Creators' backgroundColor='rgb(140, 25, 50)'></Card>
                                        <Card imageUrl='./src/assets/playlist/5.jpeg' title='Para treinar' backgroundColor='rgb(232, 17, 91)'></Card>
                                        <Card imageUrl='./src/assets/playlist/6.jpeg' title='Podcasts' backgroundColor='rgb(83, 122, 161)'></Card>
                                        <Card imageUrl='./src/assets/playlist/7.jpeg' title='Sertanejo' backgroundColor='rgb(142, 102, 172'></Card>
                                        <Card imageUrl='./src/assets/playlist/8.jpeg' title='Samba e pagode' backgroundColor='rgb(20, 138, 8)'></Card>
                                        <Card imageUrl='./src/assets/playlist/9.jpeg' title='Funk' backgroundColor='rgb(30, 50, 100)'></Card>
                                        <Card imageUrl='./src/assets/playlist/10.jpeg' title='MPB' backgroundColor='rgb(233, 20, 41)'></Card>
                                        <Card imageUrl='./src/assets/playlist/11.jpeg' title='Rock' backgroundColor='rgb(80, 55, 80)'></Card>
                                        <Card imageUrl='./src/assets/playlist/12.jpeg' title='Hip Hop' backgroundColor='rgb(216, 64, 0)'></Card>
                                        <Card imageUrl='./src/assets/playlist/13.jpeg' title='Indie' backgroundColor='rgb(186, 93, 7)'></Card>
                                        <Card imageUrl='./src/assets/playlist/14.jpeg' title='Relax' backgroundColor='rgb(0, 30, 80)'></Card>
                                        <Card imageUrl='./src/assets/playlist/15.jpeg' title='Música Latina' backgroundColor='rgb(60, 30, 80)'></Card>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    )
}
