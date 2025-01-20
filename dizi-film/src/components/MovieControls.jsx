// bu sayfamız watch.jsx ve watched.jsx sayfamız için eklenmiştir.
//görsellerin üstünde bulunan delete butonumuz için gibi tuşlar için eklenmiştir.

import '@fortawesome/fontawesome-free/css/all.min.css';

function MovieControls() {
    return (
        <div className="inner-card-controls">
            <button className="ctrl-btn"><i className="fa-fw far fa-eye"></i></button>
        </div>
    )
}

export default MovieControls
