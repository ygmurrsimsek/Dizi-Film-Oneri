import { useState } from 'react';
import '../App.css';
import axios from 'axios';
import search from '../assets/images/search.png';
function SearchBar() {
    //inputa girilen değeri bir statede tutucaz
    const [input, setInput] = useState('');
    //film aratınca axiostan gelen veriler için  bir dizi tutacağız
    const [films, setFilms] = useState([]);
    async function onChange(e) {
        setInput(e.target.value);
        const apiKey = import.meta.env.VITE_TMDB_KEY;
        const language = "en-US";
        const page = 1;
        const includeAdult = false;
        const query = e.target.value;

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=${language}&page=${page}&include_adult=${includeAdult}&query=${query}`;

        try {
            const response = await axios.get(url);
            setFilms(response.data.results);
        }
        catch (error) {
            console.error("Hata:", error.message || error);
        }
    }
    return (
        <div>
            <div className="add-page">
                <div className="container">
                    <div className="add-content">
                        <img src={search}></img>
                        <div className="titles"><h1>Hoş Geldiniz.</h1>
                            <h2>
                                Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.
                            </h2>
                        </div>
                        <div className="input-wrapper">
                            <input value={input} onChange={onChange} type='text' placeholder='Film, dizi, kişi ara...'></input>
                        </div>
                        <div style={{ marginTop: '320px' }}>
                            {films.map((movie) => {
                                console.log(movie.title);  // Console'a yazdırma işlemi
                                return <div key={movie.id}>{movie.title}</div>;
                            })}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SearchBar
