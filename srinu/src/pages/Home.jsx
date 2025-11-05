import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

const bodyTypes = [
  {
    id: "hourglass",
    name: "Hourglass",
    img: "https://cdn.gymaholic.co/articles/5-ways-to-achieve-an-hourglass-figure-naturally/hourglass-structure.jpg",
    desc: "Balanced shoulders and hips with a defined waist."
  },
  {
    id: "pear",
    name: "Pear",
    img: "https://i.pinimg.com/1200x/16/25/03/162503d7b8a9f7c0b10f4a3dc2f22941.jpg",
    desc: "Narrower shoulders with wider hips."
  },
  {
    id: "rectangle",
    name: "Rectangle",
    img: "https://i.pinimg.com/736x/7d/e9/be/7de9befffca8bd2adb2bfc9ec636e04a.jpg",
    desc: "Straight silhouette with similar bust, waist, and hips."
  },
  {
    id: "apple",
    name: "Apple",
    img: "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/60f12ec55285e1aca7b6a437_Apple%20Body%20Shape%20Title%20Image-p-500.webp",
    desc: "Broader shoulders and bust with narrower hips."
  },
  {
    id: "inverted-triangle",
    name: "Inverted Triangle",
    img: "https://i.pinimg.com/736x/0f/dd/bc/0fddbc0285dad142395305886119e1fe.jpg",
    desc: "Wider shoulders compared to hips."
  },
  {
    id: "diamond",
    name: "Diamond",
    img: "https://www.clovia.com/blog/wp-content/uploads/2020/05/Diamond-Figure-300x300.jpg",
    desc: "Narrow bust and shoulders, broader hips."
  },
  {
    id: "oval",
    name: "Oval",
    img: "https://i.pinimg.com/originals/33/d2/a1/33d2a1ac16b0f3e66ec25026b3134d39.jpg",
    desc: "Fuller bust and midsection, narrower hips."
  },
  {
    id: "top-hourglass",
    name: "Top Hourglass",
    img: "https://cdn.prod.website-files.com/5eca30fd2b50b671e2107b06/60f12a025285e1675eb6871b_Hourglass%20Body%20Shape%20Title%20Image-p-500.webp",
    desc: "Larger bust than hips with narrow waist."
  },
  {
    id: "skinny",
    name: "Skinny",
    img: "https://media.gettyimages.com/id/109864496/photo/fitness-work-out-on-clean-purple-background.jpg?s=1024x1024&w=gi&k=20&c=VnBK6yFME6dt4jjIrqvfnR8SkW2PI_F-7NIzzbs6Q-I=",
    desc: "Lean frame with low body fat and muscle mass."
  },
  {
    id: "athletic",
    name: "Athletic",
    img: "https://media.istockphoto.com/id/475122886/vector/set-of-various-woman-sports-silhouettes.jpg?s=1024x1024&w=is&k=20&c=kGGKxl-Tl6jMcPeKOmG_eGjuu9FLJ04TFtbr8Ve4rNU=",
    desc: "Muscular, toned build with broad shoulders."
  },
  {
    id: "lollipop",
    name: "Lollipop",
    img: "https://www.kingstalks.com/wp-content/uploads/2022/12/Lollipop-Body-Shape.jpg",
    desc: "Large bust, narrow waist, slim hips, and long legs."
  },
];

const Home = () => (
  <div className="container">
    <nav className="navbar">
      <h1>Fashion Fusion</h1>
      <ul>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/bodytypes/hourglass" className="nav-link">Body Shapes</Link></li>
        <li><Link to="/calculator" className="nav-link">Body Shape Calculator</Link></li>
        <li><Link to="/tips" className="nav-link">Tips</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
    </nav>

    <header className="hero">
      <h2>Welcome to Fashion Fusion</h2>
      <p>
        Discover outfits tailored for your body type, explore the latest fashion trends, 
        and get personalized style suggestions. Fashion Fusion is your style companion.
      </p>
    </header>

    <section className="body-types">
      <h3>Different Body Shapes</h3>
      <div className="cards">
        {bodyTypes.map(type => (
          <div className="card" key={type.id}>
            <Link to={`/bodytypes/${type.id}`}>
              <img src={type.img} alt={`${type.name} Body`} />
              <h4>{type.name}</h4>
              <p>{type.desc}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>

    <footer className="footer">
      <p>© {new Date().getFullYear()} Fashion Fusion | All Rights Reserved</p>
    </footer>
  </div>
);

export default Home;
