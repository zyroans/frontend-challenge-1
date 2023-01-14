import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="header__title">
        <h1>W.</h1>
      </div>
      <div className="header__navbar">
        <span className="header__navbar__element">Home</span>
        <span className="header__navbar__element">New</span>
        <span className="header__navbar__element">Popular</span>
        <span className="header__navbar__element">Trending</span>
        <span className="header__navbar__element">Categories</span>
      </div>
    </div>
  );
}
