import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import personCircle from "../../assets/person-circle.svg";

function Sidebar({ open }) {
  return (
    <section className={`sidebar ${open ? "open" : ""}`}>
      <div className="sidebar-profile">
        <img src={personCircle} alt="profile photo" />
        <p>Joanna Lisburg</p>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="#">Favourites</Link>
          </li>
          <li>
            <Link to="#">Locked notes</Link>
          </li>
          <li>
            <Link to="#">Recycle bin</Link>
          </li>
        </ul>
      </nav>
      <div className="bottom-links">
        <ul>
          <li>Support</li>
          <span>|</span>
          <li>About</li>
          <span>|</span>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </section>
  );
}

export default Sidebar;
