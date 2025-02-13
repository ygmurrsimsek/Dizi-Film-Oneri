//izlenenler burada ayarlanıp WatchPageye
import { useSelector } from "react-redux"
import MovieControls from "./MovieControls";
function Watched() {
    const toWatchedList = useSelector((state) => state.watch.watched);
    console.log("To Watched List:", toWatchedList);

    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading">İzlenen Filmler</h1>

                    <div className="count-pill">
                        {toWatchedList.length} {toWatchedList.length < 2 ? "Movie" : "Movies"}
                    </div>
                </div>
                {
                    toWatchedList.length > 0 ? (
                        <div className="movie-grid">
                            {
                                toWatchedList.map((movie) => (
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
                                        <MovieControls movies={movie} type="watched" />
                                    </div>

                                ))
                            }
                        </div>
                    ) : ((
                        <h2 className="no-movies">Listenizde İzlenen Film Yok...</h2>
                    ))
                }
            </div>
        </div>
    )
}

export default Watched
