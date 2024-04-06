import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../app_config";
import { useEffect, useState } from "react";

import '../css/Game.css'

const Game = () => {
    const { id } = useParams();

    const [game, setGame] = useState({});

    const fetchGame = async () => {
        const response = await fetch(BACKEND_URL + `/game/${id}`);
        const data = await response.json();
        setGame(data.game);
    };

    useEffect(() => {
      fetchGame()
    }, []);

    return (
        <>
            <h1 className="game-title">{game.title}</h1>
            <iframe src={game.url} width="1080" height="720" frameborder="no" className="game-frame"></iframe>
        </>
    )
}

export default Game;