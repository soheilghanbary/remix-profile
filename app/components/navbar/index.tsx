import { Link } from "@remix-run/react";
import NavItem from "./nav-item";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="nav">
        <div className="nav-logo">
          <img src="/images/site.svg" />
          <h3 className="">Hamkari</h3>
        </div>
        <ul className="nav-list">
          <NavItem to="/" title="Home" />
          <NavItem to="/" title="Blog" />
          <NavItem to="/users" title="Users" />
          <NavItem to="/" title="About" />
          <NavItem to="/" title="Regiter" />
        </ul>
        <ul className="nav-icons">
          <li>
            <img src="/images/rocket.svg" />
          </li>
          <Link to={"/auth/login"}>
            <li>
              <img src="/images/signin.svg" />
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
