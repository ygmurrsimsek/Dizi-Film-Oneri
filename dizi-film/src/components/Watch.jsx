import { useSelector } from "react-redux";
import "../App.css";
import MovieControls from "./MovieControls";
function Watch() {
    const toWatchList = useSelector((state) => state.watch.toWatch);
    console.log("To Watch List:", toWatchList);

    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">İzlenecek Filmler</h1>

                    <div className="count-pill">
                        {toWatchList.length} {toWatchList.length < 2 ? "Movie" : "Movies"}
                    </div>
                </div>
                {toWatchList.length > 0 ? (//ilk olarak listemizi kontrol diyouz film var mı diye .Eğer listemizde film varsa
                    <div className="movie-grid">
                        {toWatchList.map((movie) => (
                            //eğer listemizde film varsa mapliyoruz çünkü bir dizi ilk larak dizi içindeki elemanlara map ile erişmeliyiz.
                            <div key={movie.id} className="movie-card">
                                <div className="overlay"></div>
                                {/* movie olark ulaştık dizi içindeki filmlere .Bu dizinin içinde görsele erişmemiz lazım bunu içinde movie.poster_path diyebiliriz şuan objedeyiz. */}
                                {movie.poster_path ? (
                                    <img
                                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                        alt={movie.title}
                                    />
                                ) : (
                                    <div className="filler-poster"></div>
                                )}
                                <MovieControls movie={movie} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No movies in the watch list.</p>
                )}
            </div>
        </div>
    );
}

export default Watch;
