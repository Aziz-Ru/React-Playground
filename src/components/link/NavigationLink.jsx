import { NavLink } from "react-router-dom";
import "./navigationLink.scss";

// eslint-disable-next-line react/prop-types
const NavigationLink = ({ href, title }) => {
  return (
    <NavLink className="nav-link" to={href}>
      {title}
    </NavLink>
  );
};

export default NavigationLink;
