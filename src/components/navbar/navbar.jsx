import { useState } from "react";
import "./navbar.scss";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="left">
        <ul>
          <li>
            <a href="">React</a>
          </li>
          <li>
            <a href="">Practice</a>
          </li>
          <li>
            <a href="">Ground</a>
          </li>
          <li>
            <a href="">More</a>
          </li>
        </ul>
      </div>
      <div className="right">
        <div className="menuIcon">
          <button onClick={() => setOpen((prev) => !prev)}>MenuIcon</button>
          <ul className={open ? "menu active" : "menu"}>
            <button onClick={() => setOpen((prev) => !prev)}>Close Menu</button>
            <li>
              <a href="">React</a>
            </li>
            <li>
              <a href="">Practice</a>
            </li>
            <li>
              <a href="">Ground</a>
            </li>
            <li>
              <a href="">More</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
