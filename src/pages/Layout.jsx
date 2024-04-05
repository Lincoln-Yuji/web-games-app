import { Outlet, Link } from "react-router-dom";

import '../css/Layout.css'

const Layout = () => {
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
            <input type="text" placeholder=" Pesquisa"/>
          </div>
        </div>
      </nav>
      <Link to="/contact">CRUD Test</Link>
      <Outlet />
    </>
  )
};

export default Layout;