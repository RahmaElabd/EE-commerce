import { Link } from "react-router-dom";

const NavLink = ({ title, url }) => {
  return (
    <li className="nav-item">
      <Link className="nav-link active" aria-current="page" to={url}>
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
