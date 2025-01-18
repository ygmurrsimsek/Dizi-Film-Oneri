import { useState } from 'react';
import '../App.css';
import axios from 'axios';
import search from '../assets/images/search.png';
function SearchBar() {
    //inputa girilen değeri bir statede tutucaz
    const [input, setInput] = useState('');
    //film aratınca axiostan gelen veriler için  bir dizi tutacağız
    async function onChange(e) {
        setInput(e.target.value);
        const apiKey = "b5e1b3557476f9bcb4d1f26f0aa89763";
        const language = "en-US";
        const page = 1;
        const includeAdult = false;
        const query = e.target.value;

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=${language}&page=${page}&include_adult=${includeAdult}&query=${query}`;

        try {
            const response = await axios.get(url);
            console.log(response.data);

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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
