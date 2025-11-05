import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import './BodyTypeDetail.css';

const bodyTypes = [
  {
    id: "hourglass",
    name: "Hourglass",
    img: "https://cdn.gymaholic.co/articles/5-ways-to-achieve-an-hourglass-figure-naturally/hourglass-structure.jpg",
    desc: "Balanced shoulders and hips with a defined waist. Flattering styles highlight the waistline.",
    tips: [
      "Highlight your waist with belts or wrap styles.",
      "Avoid shapeless or oversized fits.",
      "Choose V-necklines and fitted dresses."
    ],
    outfitSuggestions: [
      "Wrap dress",
      "Pencil skirt",
      "High-waisted jeans"
    ]
  },
  {
    id: "top-hourglass",
    name: "Top Hourglass",
    img: "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/60f12a025285e1675eb6871b_Hourglass%20Body%20Shape%20Title%20Image-p-500.webp",
    desc: "Similar to the hourglass but with slightly broader bust and shoulders than hips. Styles should balance top and bottom.",
    tips: [
      "Opt for A-line skirts and wide-leg pants.",
      "V-necklines soften the upper frame.",
      "Avoid heavy shoulder embellishments."
    ],
    outfitSuggestions: [
      "A-line skirt",
      "V-neck blouse",
      "High-rise trousers"
    ]
  },
  {
    id: "pear",
    name: "Pear",
    img: "https://i.pinimg.com/1200x/16/25/03/162503d7b8a9f7c0b10f4a3dc2f22941.jpg",
    desc: "Wider hips and thighs with narrower shoulders. Balance proportions by drawing attention upward.",
    tips: [
      "Structured jackets with shoulder details work well.",
      "A-line dresses flow nicely over hips.",
      "Avoid clingy fabrics on the lower half."
    ],
    outfitSuggestions: [
      "Boat-neck top",
      "A-line dress",
      "Wide-leg trousers"
    ]
  },
  {
    id: "rectangle",
    name: "Rectangle",
    img: "https://i.pinimg.com/736x/7d/e9/be/7de9befffca8bd2adb2bfc9ec636e04a.jpg",
    desc: "Shoulders, waist, and hips are fairly uniform. Outfits should create curves and waist definition.",
    tips: [
      "Use belts to define your waist.",
      "Peplum tops and ruffles add curves.",
      "Opt for flared pants or skirts."
    ],
    outfitSuggestions: [
      "Peplum top",
      "Belted jumpsuit",
      "Flared jeans"
    ]
  },
  {
    id: "apple",
    name: "Apple",
    img: "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/60f12ec55285e1aca7b6a437_Apple%20Body%20Shape%20Title%20Image-p-500.webp",
    desc: "Weight is carried around the midsection, with slimmer arms and legs. Elongating outfits work best.",
    tips: [
      "Empire-waist dresses flatter the figure.",
      "V-neck tops elongate the torso.",
      "Avoid clingy fabrics around the waist."
    ],
    outfitSuggestions: [
      "Empire-waist dress",
      "Straight-leg jeans",
      "Longline blazer"
    ]
  },
  {
    id: "inverted-triangle",
    name: "Inverted Triangle",
    img: "https://i.pinimg.com/736x/0f/dd/bc/0fddbc0285dad142395305886119e1fe.jpg",
    desc: "Broad shoulders and narrower hips. Outfits should add volume to the lower body.",
    tips: [
      "Choose A-line skirts and wide-leg pants.",
      "V-necklines soften broad shoulders.",
      "Avoid tops with shoulder pads."
    ],
    outfitSuggestions: [
      "A-line dress",
      "Palazzo pants",
      "Flowy skirts"
    ]
  },
  {
    id: "diamond",
    name: "Diamond",
    img: "https://www.clovia.com/blog/wp-content/uploads/2020/05/Diamond-Figure-300x300.jpg",
    desc: "Wider midsection with narrower bust and shoulders. Highlight the upper body while balancing proportions.",
    tips: [
      "Off-shoulder tops draw attention upward.",
      "Straight or bootcut pants elongate legs.",
      "Avoid clingy fabrics at the waist."
    ],
    outfitSuggestions: [
      "Off-shoulder blouse",
      "Bootcut jeans",
      "Empire-waist dress"
    ]
  },
  {
    id: "oval",
    name: "Oval",
    img: "https://i.pinimg.com/originals/33/d2/a1/33d2a1ac16b0f3e66ec25026b3134d39.jpg",
    desc: "Fuller bust and midsection with narrower hips. Styles that elongate and add waist definition are ideal.",
    tips: [
      "Empire-waist dresses create curves.",
      "Monochrome outfits elongate your shape.",
      "Avoid bulky layers around the stomach."
    ],
    outfitSuggestions: [
      "Wrap dress",
      "Long cardigans",
      "Straight pants"
    ]
  },
  {
    id: "skinny",
    name: "Skinny",
    img: "https://media.gettyimages.com/id/109864496/photo/fitness-work-out-on-clean-purple-background.jpg?s=1024x1024&w=gi&k=20&c=VnBK6yFME6dt4jjIrqvfnR8SkW2PI_F-7NIzzbs6Q-I=",
    desc: "Slender build with narrow frame. Outfits should add volume and create balance.",
    tips: [
      "Layer outfits for dimension.",
      "Opt for textured fabrics like denim and knits.",
      "Choose ruffles and patterns."
    ],
    outfitSuggestions: [
      "Layered tops",
      "Ruffled blouse",
      "Printed skirts"
    ]
  },
  {
    id: "athletic",
    name: "Athletic",
    img: "https://media.istockphoto.com/id/475122886/vector/set-of-various-woman-sports-silhouettes.jpg?s=1024x1024&w=is&k=20&c=kGGKxl-Tl6jMcPeKOmG_eGjuu9FLJ04TFtbr8Ve4rNU=",
    desc: "Toned, muscular build with broad shoulders. Styles that add femininity and curves work best.",
    tips: [
      "Fit-and-flare dresses add softness.",
      "Layered skirts balance the figure.",
      "Avoid overly boxy silhouettes."
    ],
    outfitSuggestions: [
      "Fit-and-flare dress",
      "Layered skirts",
      "Soft blouses"
    ]
  },
  {
    id: "lollipop",
    name: "Lollipop",
    img: "https://www.kingstalks.com/wp-content/uploads/2022/12/Lollipop-Body-Shape.jpg",
    desc: "Fuller bust with slimmer waist, hips, and legs. Styles should balance the bust with the rest of the body.",
    tips: [
      "Opt for scoop or square necklines.",
      "Choose flared skirts and A-line dresses.",
      "Avoid high necklines that emphasize bust size."
    ],
    outfitSuggestions: [
      "Square-neck dress",
      "A-line skirt",
      "Wide-leg pants"
    ]
  }
];

const BodyTypeDetail = () => {
  const { typeId } = useParams();
  const navigate = useNavigate();

  const selected = bodyTypes.find(bt => bt.id === typeId);

  if (!selected) {
    return (
      <div className="container" style={{padding: '2rem', textAlign: 'center'}}>
        <h2>Body type not found.</h2>
        <button onClick={() => navigate('/')} style={{
          padding: '0.6rem 1.2rem',
          fontSize: '1rem',
          borderRadius: '8px',
          cursor: 'pointer',
          background: '#f8bbd0',
          border: 'none',
          color: '#880e4f',
          marginTop: '1rem'
        }}>
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <aside className="sidebar">
        <h2>Body Shapes</h2>
        <nav>
          <ul>
            {bodyTypes.map(type => (
              <li key={type.id} className={type.id === selected.id ? 'active' : ''}>
                <Link to={`/bodytypes/${type.id}`}>{type.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main className="content">
        <h1>{selected.name} Body Type</h1>
        <img src={selected.img} alt={`${selected.name} body`} className="detail-img" />
        <p className="description">{selected.desc}</p>

        <section>
          <h3>Styling Tips</h3>
          <ul>
            {selected.tips.map((tip, idx) => <li key={idx}>{tip}</li>)}
          </ul>
        </section>

        <section>
          <h3>Outfit Suggestions</h3>
          <ul>
            {selected.outfitSuggestions.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default BodyTypeDetail;
