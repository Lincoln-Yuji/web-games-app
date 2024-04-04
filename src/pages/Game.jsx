import { useParams } from "react-router";

const Game = () => {
    const { id } = useParams();

    const game1 = {
        id: 0,
        name: "Cut the Rope",
        url: "https://play.famobi.com/wrapper/cut-the-rope"
    }

    const game2 = {
        id: 1,
        name: "Cursed Marbles",
        url: "https://play.famobi.com/totemia-cursed-marbles"
    }

    const games = [
        game1,
        game2
    ];

    return (
        <>
            <h1>{games[id].name}</h1>
            <iframe src={games[id].url} width="1280" height="720" frameborder="no" scrolling="no"></iframe>
        </>
    )
}

export default Game;