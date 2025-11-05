import React from "react";
import './Home.css'; // Reuse your main styles

const tips = [
  {
    name: "Hourglass",
    tip: "Showcase your waist with wrap dresses and fitted tops. Avoid boxy silhouettes."
  },
  {
    name: "Pear",
    tip: "Draw attention upwards with boat necks and bold necklaces. A-line skirts flatter your hips."
  },
  {
    name: "Rectangle",
    tip: "Use peplum tops, belts, and details to create curves. Layering works well for your shape."
  },
  {
    name: "Apple",
    tip: "Empire waistlines, V-neck tops, and flowy fabrics elongate your torso and flatter your bust."
  },
  {
    name: "Inverted Triangle",
    tip: "Balance your frame with flared pants and skirted bottoms. Soft, simple tops look best."
  },
  {
    name: "Diamond",
    tip: "Highlight your shoulders with off-shoulder styles. Go for pants and skirts with soft structures."
  },
  {
    name: "Oval",
    tip: "Vertical patterns and dark colors on top are slimming. Try empire waists and A-line silhouettes."
  },
  {
    name: "Top Hourglass",
    tip: "Wrap and belted styles accentuate your slim waist. Keep your look balanced on top and bottom."
  },
  {
    name: "Skinny",
    tip: "Layer with structured pieces and mix in bold prints. Try straight or slim-fit pants."
  },
  {
    name: "Athletic",
    tip: "Soft fabrics, ruching, and dresses with defined waists enhance curves."
  },
  {
    name: "Lollipop",
    tip: "Keep tops fitted and simple. Bootcut pants and long skirts elongate your figure."
  },
];

const Tips = () => (
  <div className="container">
    <h2 style={{marginTop:'2rem', marginBottom:'2rem', color:'#ad1457'}}>Body Type Style Tips</h2>
    <div className="cards">
      {tips.map(tip => (
        <div className="card" key={tip.name}>
          <h4>{tip.name}</h4>
          <p>{tip.tip}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Tips;
