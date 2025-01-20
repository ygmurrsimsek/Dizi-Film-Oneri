//izlenecekler burada yapılıp HomePageye
import { useSelector } from "react-redux";

function Watch() {
    const toWatchList = useSelector((state) => state.watch.toWatch);
    console.log("To Watch List:", toWatchList);
    return (
        <div>
            {toWatchList.map((film) => (
                <div key={film.id}>
                    <h3>{film.title}</h3>
                </div>
            ))}


        </div>
    )
}

export default Watch
