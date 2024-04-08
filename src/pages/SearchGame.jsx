import { useLocation } from 'react-router-dom';

const SearchGame = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q');

    return <>
        <h1>Hello there!</h1>
        <p>You searched for: <b>{query ? query : ""}</b></p>
    </>
};

export default SearchGame;