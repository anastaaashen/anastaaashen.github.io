import { Link } from "react-router-dom";

export function Home () {
    return (
        <div>
        <h1>Anastasia Belosludceva</h1>
        <Link to="threads">Threads</Link>
        <Link to="threads-home">Threads Home</Link>
      </div>
    )
}