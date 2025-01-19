//izlenenler burada ayarlanıp WatchPageye
import { useSelector } from "react-redux"

function Watched() {
    const toWatchedList = useSelector((state) => state.watch.watched);
    console.log("To Watched List:", toWatchedList);

    return (
        <div>
            İzlenenler sayfasıyım
            <ul>
                {toWatchedList.map((film) => (
                    <h3 key={film.id}>
                        {film.title}
                    </h3>
                ))}
            </ul>


        </div>
    )
}

export default Watched
