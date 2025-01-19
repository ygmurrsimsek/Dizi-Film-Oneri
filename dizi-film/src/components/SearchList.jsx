// Film arama kısmına film girince arananları burada göstereceğiz
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addToWatch, addWatched } from "../state/WatchSlice";
function SearchList({ movies }) {
    const dispatch = useDispatch();

    const addToWatchList = () => {
        dispatch(addToWatch(movies));
    };
    const addToWatched = () => {
        dispatch(addWatched(movies));
    }
    return (
        <div>
            <div className="result-card">
                <div className="poster-wrapper">
                    {movies.poster_path ? (
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movies.poster_path}`}
                            alt={movies.title}
                        />
                    ) : (
                        <div className="filler-poster"></div>
                    )}
                </div>
                <div className="info">
                    <div className="header">
                        <h3 className="title">{movies.title}</h3>
                        <h4 className="release-date">
                            {movies.release_date.substr(0, 4)}
                        </h4>
                        <h4 className="release-date">IMDB : {movies.vote_average ? <b>{movies.vote_average}</b> : "-"}</h4>
                    </div>
                    <div className="controls">
                        <button className="btn" onClick={() => addToWatchList(movies)}>Add To WatchList</button>
                        <button className="btn" onClick={() => addToWatched(movies)}>Add The Watched</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
//şimdi izleme listemize ekleyeceğiz state yönetiminiyapacağız ToWatchListimizde sonrasında bunu Watched componentinde kullanacağız ve componenti de HomePagemizde göstericem .

// PropTypes tanımlaması
SearchList.propTypes = {
    movies: PropTypes.shape({
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string,
        title: PropTypes.string,
        release_date: PropTypes.string,
        vote_average: PropTypes.number,
    }).isRequired, // movies prop'unun bir obje ve zorunlu olduğunu belirtiyoruz
};


export default SearchList;
