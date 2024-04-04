import { Link } from "react-router-dom";

const Home = () => {
    return (
    <>
      <h1>Jogos Populares</h1>
      <ul>
        <li><Link to="game/0">Jogo 1</Link></li>
        <li><Link to="game/1">Jogo 2</Link></li>
        <li>Jogo 3</li>
      </ul>
      <h1>Jogos Novos</h1>
      <ul>
        <li>Jogo 1</li>
        <li>Jogo 2</li>
        <li>Jogo 3</li>
      </ul>
    </>
    )
  };
  
  export default Home;