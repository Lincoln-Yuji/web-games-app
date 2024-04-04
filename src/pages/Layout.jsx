import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
          <button>Categories</button>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <input type="text" placeholder="Pesquisa"/>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;