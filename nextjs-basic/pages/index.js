import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "d0f275c0a96c3c0542cd3149a66bee14";

export default function Home() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        (async () => {
            const { results } = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko`)).json();
            setMovies(results);
        })();
    }, []);
    return (
        <div>
            <Seo title="Home" />
            {!movies && <h4>Loading...</h4>}
            {movies?.map((movie) => (
                <div key={movie.id}>
                    <h4>{movie.title}</h4>
                </div>
            ))}
        </div>
    );
}