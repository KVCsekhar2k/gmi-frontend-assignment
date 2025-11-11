import React from "react";
import "./header.css";
import { FaSearch, FaUser } from "react-icons/fa";

export default function Header() {
  return (
    <header className="header">
      {/* Top small links */}
      <div className="header-top">
        <ul>
          <li>About</li>
          <li>News</li>
          <li>Events</li>
          <li>Programmes</li>
          <li>Help centre</li>
        </ul>
      </div>

      {/* Main navbar */}
      <div className="header-main">
        <div className="logo">iea</div>

        <div className="search-box">
          <input type="text" placeholder="Search everything" />
          <button className="search-btn">
            <FaSearch size={14} color="#555" />
          </button>
        </div>

        <nav className="main-nav">
          <span>Energy system</span>
          <span>Topics</span>
          <span>Countries</span>
          <span>Data</span>
          <span>Reports</span>
        </nav>

        <div className="user-icon">
          <FaUser size={18} />
        </div>
      </div>
    </header>
  );
}
