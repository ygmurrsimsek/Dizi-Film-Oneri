// bu sayfamız watch.jsx ve watched.jsx sayfamız için eklenmiştir.
//görsellerin üstünde bulunan delete butonumuz için gibi tuşlar için eklenmiştir.

import '@fortawesome/fontawesome-free/css/all.min.css';
import { useDispatch } from 'react-redux';
import { removeFilms, moveToWatch, moveToWatched } from '../state/WatchSlice';
import PropTypes from "prop-types";

function MovieControls({ movies, type }) {
    const dispatch = useDispatch();

    const remove = (movie) => {
        console.log("Dispatching removeFilms with:", { id: movie.id });
        dispatch(removeFilms({ id: movie.id }));
    };

    const moveHandler = (movie) => {
        if (type === "toWatch") {
            console.log("Moving to watched:", movie.id); // Kontrol için log ekleyin
            dispatch(moveToWatched(movie.id)); // `movie.id` doğru olduğundan emin olun
        } else if (type === "watched") {
            console.log("Moving to toWatch:", movie.id); // Kontrol için log ekleyin
            dispatch(moveToWatch(movie.id));
        }
    };

    return (
        <div className="inner-card-controls">
            <button className="ctrl-btn" onClick={() => moveHandler(movies)}><i className="fa-fw far fa-eye"></i></button>
            <button className="ctrl-btn" onClick={() => remove(movies)}><i className="fa-fw fa fa-times" ></i></button>
        </div>
    )
}
// PropTypes tanımlaması
MovieControls.propTypes = {
    movies: PropTypes.shape({
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string,
        title: PropTypes.string,
        release_date: PropTypes.string,
        vote_average: PropTypes.number,
    }).isRequired, // movies prop'unun bir obje ve zorunlu olduğunu belirtiyoruz
};

export default MovieControls
