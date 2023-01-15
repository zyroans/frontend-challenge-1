import React from "react";

export default function New() {
  return (
    <div className="newscolumn">
      <h2 className="newscolumn__header">New</h2>
      <h3 className="newscolumn__title">Hydrogen VS Electric Cars</h3>
      <p className="newscolumn__content">
        Will hydroigen-fueled cars ever catch up to EVs?
      </p>
      <hr className="newscolumn__linebreak" />
      <h3 className="newscolumn__title">The Downsides of AI Artistry</h3>
      <p className="newscolumn__content">
        What arte the possible adverse effects of on-demand AI image generation?
      </p>
      <hr className="newscolumn__linebreak" />
      <h3 className="newscolumn__title">Is VC Funding Drying Up?</h3>
      <p className="newscolumn__content">
        Private funding by VC firms is down 50% YOY. We take a look at what that
        means
      </p>
    </div>
  );
}
