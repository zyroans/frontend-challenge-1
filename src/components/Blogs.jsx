import React from "react";

export default function Blogs() {
  return (
    <div className="blogs">
      <div className="blogs__card">
        <img
          alt="blog card pic"
          src="/public/assets/image-retro-pcs.jpg"
          className="blogs__card__pic"
        />
        <div className="blogs__card__id">01</div>
        <h3 className="blogs__card__title">Reviving Retro PCs</h3>
        <p className="blogs__card__resume">
          What happens when old PCs are given modren upgrades?
        </p>
      </div>
      <div className="blogs__card">
        <img
          alt="blog card pic"
          src="/public/assets/image-top-laptops.jpg"
          className="blogs__card__pic"
        />
        <div className="blogs__card__id">02</div>
        <h3 className="blogs__card__title">Top 10 Laptops of 2022</h3>
        <p className="blogs__card__resume">
          Our best picks for various needs and budgets
        </p>
      </div>
      <div className="blogs__card">
        <img
          alt="blog card pic"
          src="/public/assets/image-gaming-growth.jpg"
          className="blogs__card__pic"
        />
        <div className="blogs__card__id">03</div>
        <h3 className="blogs__card__title">The Growth of Gaming</h3>
        <p className="blogs__card__resume">
          How the pandemic has sparked fresh opportunities.
        </p>
      </div>
    </div>
  );
}
