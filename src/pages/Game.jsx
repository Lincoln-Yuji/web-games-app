import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../app_config";
import { useCallback, useEffect, useState } from "react";

import '../css/Game.css'

const Game = () => {
    const { id } = useParams();

    const [game, setGame] = useState({});
    const [fullscreen, setFullscreen] = useState(false);

    const fetchGame = async () => {
        const response = await fetch(BACKEND_URL + `/game/${id}`);
        const data = await response.json();
        setGame(data.game);
    };

    const toggleFullscreen = () => {
        setFullscreen(!fullscreen);
    };

    const toggleEscFullscreen = useCallback((event) => {
        if (event.key === "Escape") {
            toggleFullscreen();
        }
    }, [toggleFullscreen]);

    useEffect(() => {
        document.addEventListener("keydown", toggleEscFullscreen, true);
        fetchGame();
    }, [fetchGame, toggleEscFullscreen]);

    return (
        <>
            <h1 className="game-title">{game.title}</h1>
            <div style={
                fullscreen ?
                    {backgroundColor:"black", width:"100%", height:"100%", top:"0", left:"0", position:"absolute"} :
                    {width: "1080px", margin: "0 auto"}
            }>
                <button className="toggle-button" onClick={toggleFullscreen}>Toggle Fullscreen</button>
                <iframe src={game.url + "/A1000-10"} width="100%" height={fullscreen ? "95%" : "720"} frameborder="no" className="game-frame"></iframe>
            </div>
            <h2>Descrição do jogo:</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis lectus magna fringilla urna porttitor rhoncus. Eu sem integer vitae justo eget magna fermentum iaculis eu. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Nibh praesent tristique magna sit amet purus gravida. Tincidunt augue interdum velit euismod. Ultrices eros in cursus turpis massa tincidunt dui ut. Sit amet consectetur adipiscing elit pellentesque habitant. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Neque gravida in fermentum et sollicitudin ac orci phasellus. Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat. Velit ut tortor pretium viverra suspendisse potenti. Cras pulvinar mattis nunc sed blandit libero.</p>
            <p>Vestibulum morbi blandit cursus risus at ultrices. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Fusce ut placerat orci nulla pellentesque. Phasellus faucibus scelerisque eleifend donec pretium. Sit amet purus gravida quis blandit turpis cursus. Velit ut tortor pretium viverra suspendisse potenti. Elit duis tristique sollicitudin nibh sit amet commodo. Luctus accumsan tortor posuere ac ut. Pellentesque dignissim enim sit amet. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Rhoncus urna neque viverra justo nec ultrices dui sapien eget. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Mi sit amet mauris commodo quis imperdiet massa.</p>
        </>
    )
}

export default Game;