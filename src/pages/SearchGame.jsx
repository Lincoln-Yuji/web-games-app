import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { BACKEND_URL } from '../app_config';

const SearchGame = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q');

    const [games, setGames] = useState([]);

    const fetchGames = async () => {
      const response = await fetch(BACKEND_URL + `/search/${query}`);
      const data = await response.json();
      setGames(data.games);
    }

    useEffect(() => {
      fetchGames();
    }, []);

    return (
    <>
      <h1>Results for: {query ? query : ""}</h1>
      <ul>
        { games.map((game) => (<li><Link to={`/game/${game.id}`}>{game.title}</Link></li>)) }
      </ul>
    </>
    )
};

export default SearchGame;