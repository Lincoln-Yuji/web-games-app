import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../app_config";

const Home = () => {

    const [games, setGames] = useState([])

    const fetchGames = async () => {
      const response = await fetch(BACKEND_URL + "/home_games")
      const data = await response.json()
      setGames(data.games)
    }

    useEffect(() => {
      fetchGames()
      console.log("Fetching Games...");
    }, []);

    return (
    <>
      <h1>Jogos</h1>
      <ul>
        { games.map((game) => (<li><Link to={`game/${game.id}`}>{game.title}</Link></li>)) }
      </ul>
    </>
    )
  };
  
  export default Home;