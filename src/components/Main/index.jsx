import { useContext, useState } from 'react';
import { ArtistsContext } from '../Header';
import ArtistCard from '../Artist'
import Card from '../Card';
import styles from './styles.module.css';

export default function Main() {
    const { artists } = useContext(ArtistsContext);

    console.log(artists)

    return (
        <>
            {artists.length > 0
                ?
                <div className={styles.playlist_container} id={styles.result_playlists}>
                    <h1>Resultados do Artista</h1>
                    <div className={styles.offer__scroll_container}>
                        <div className={styles.offer__list}>
                            <section className={styles.offer__list_item}>
                                {artists.map((artist) => (
                                    <ArtistCard key={artist.id} imgArtUrl={artist.urlImg} name={artist.name}></ArtistCard>
                                ))}
                            </section>
                        </div>
                    </div>
                </div>
                : (
                    <div className={styles.playlist_container}>
                        <div id={styles.result_playlists}>
                            <div className="playlist">
                                <h1 id="greeting">Boas vindas</h1>
                                <h2 className="session">Navegar por todas as seções</h2>
                            </div>
                            <div className={styles.offer__scroll_container}>
                                <div className={styles.offer__list}>
                                    <section className={styles.offer__list_item}>
                                        <Card imageUrl='./src/assets/playlist/1.jpeg' title='Happy Holidays' backgroundColor='rgb(0, 100, 80)'></Card>
                                        <Card imageUrl='./src/assets/playlist/2.png' title='Made for you' backgroundColor='rgb(132, 0, 231)'></Card>
                                        <Card imageUrl='./src/assets/playlist/3.jpeg' title='Releases' backgroundColor='rgb(30, 50, 100)'></Card>
                                        <Card imageUrl='./src/assets/playlist/4.jpeg' title='Creators' backgroundColor='rgb(140, 25, 50)'></Card>
                                        <Card imageUrl='./src/assets/playlist/5.jpeg' title='For training' backgroundColor='rgb(232, 17, 91)'></Card>
                                        <Card imageUrl='./src/assets/playlist/6.jpeg' title='Podcasts' backgroundColor='rgb(83, 122, 161)'></Card>
                                        <Card imageUrl='./src/assets/playlist/7.jpeg' title='Country' backgroundColor='rgb(142, 102, 172'></Card>
                                        <Card imageUrl='./src/assets/playlist/8.jpeg' title='Samba' backgroundColor='rgb(20, 138, 8)'></Card>
                                        <Card imageUrl='./src/assets/playlist/9.jpeg' title='Funk' backgroundColor='rgb(30, 50, 100)'></Card>
                                        <Card imageUrl='./src/assets/playlist/10.jpeg' title='POP' backgroundColor='rgb(233, 20, 41)'></Card>
                                        <Card imageUrl='./src/assets/playlist/11.jpeg' title='Rock' backgroundColor='rgb(80, 55, 80)'></Card>
                                        <Card imageUrl='./src/assets/playlist/12.jpeg' title='Hip Hop' backgroundColor='rgb(216, 64, 0)'></Card>
                                        <Card imageUrl='./src/assets/playlist/13.jpeg' title='Indie' backgroundColor='rgb(186, 93, 7)'></Card>
                                        <Card imageUrl='./src/assets/playlist/14.jpeg' title='Relax' backgroundColor='rgb(0, 30, 80)'></Card>
                                        <Card imageUrl='./src/assets/playlist/15.jpeg' title='Latin Music' backgroundColor='rgb(60, 30, 80)'></Card>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }

        </>
    )
}