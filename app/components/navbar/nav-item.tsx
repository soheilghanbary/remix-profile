import { Link } from "@remix-run/react";
import { FC } from "react";

interface NavItemProps {
  to: string;
  title: string;
}

const NavItem: FC<NavItemProps> = ({ to, title }) => {
  return (
    <Link to={to}>
      <li className="nav-item">{title}</li>
    </Link>
  );
};

export default NavItem;
