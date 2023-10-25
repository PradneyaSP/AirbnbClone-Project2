import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img
        src="/assets/images/airbnb-logo.png"
        alt="airbnb logo"
        className="navbar--logo"
      />

      <div className="navbar--search">
        <input type="text" placeholder="Search" />

        <button>
          <img
            src="/assets/images/search.svg"
            alt="search-icon"
            className="navbar--search--icon"
          />
        </button>
      </div>
    </nav>
  );
}
