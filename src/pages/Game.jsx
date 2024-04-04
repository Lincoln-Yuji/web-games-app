import { useParams } from "react-router-dom";
import data from '../data/games.json';

import '../css/Game.css'

const Game = () => {
    const { id } = useParams();

    return (
        <>
            <h1 className="game-title">{data[id].name}</h1>
            <iframe src={data[id].url} width="1080" height="720" frameborder="no" className="game-frame"></iframe>
        </>
    )
}

export default Game;