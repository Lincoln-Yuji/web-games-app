import { Outlet, Link, useNavigate } from "react-router-dom";

import '../css/Layout.css'

const Layout = () => {
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const inputBar = e.target;
      navigate(`/search?q=${inputBar.value}`);
      navigate(0);
      inputBar.value = "";
    }
  };

  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="nav-content">
            <button id="side-toggle">Categorias</button>
          </div>
          <div className="nav-home">
            <Link to="/" className="nav-page">Home</Link>
          </div>
          <div className="nav-content">
            <input type="text" placeholder=" Pesquisa" onKeyDown={handleKeyDown}/>
          </div>
        </div>
      </nav>
      <div id="page-content">
        <Link to="/contact">CRUD Test</Link>
        <Outlet />
      </div>
    </>
  )
};

export default Layout;