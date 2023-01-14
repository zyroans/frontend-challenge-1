import React from "react";

export default function Header() {
  return (
    <div className="header">
      <img className="header__logo" alt="logo" src="/public/assets/logo.svg" />
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
