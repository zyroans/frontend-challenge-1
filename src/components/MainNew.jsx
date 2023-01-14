import React from "react";

export default function MainNew() {
  return (
    <div className="mainnew">
      <img
        alt="news image"
        className="mainnew__picture"
        src="/public/assets/image-web-3-desktop.jpg"
      />
      <h1 className="mainnew__title">The Bright Future of Web 3.0?</h1>
      <p className="mainnew__content">
        We dive into the next evolution of the web that claaims too put the
        power of the platforms back into the hands of the people. But is it
        really fulfilling its promise?
      </p>
      <button className="mainnew__button">READ MORE</button>
    </div>
  );
}
