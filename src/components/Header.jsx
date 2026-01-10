import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import '../styles/header.css'

export default function Header() {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 100) {
       
        setShowNav(true);
      } else if (currentScroll < lastScroll && currentScroll < 100) {
       
        setShowNav(false);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div className="header">

      <div className="navigation">
        <div className="container">
          <div className="menu-btn" onClick={() => navigate("/")}>
            <FaBars size={30} color="#fff" />
          </div>

          <svg viewBox="0 0 100% 0" height="100" width="100%" className="outline">
            <rect strokeWidth="5" fill="transparent" height="60" width="100%" pathLength="100" className="rect" />
          </svg>
        </div>
      </div>

     
      <div className={`nav-bar ${showNav ? "visible" : "hidden"}`}>
        <div className="container">
          <div className="nav-btn" onClick={() => navigate("/")}>Home</div>
          <div className="nav-btn" onClick={() => navigate("/Skills")}>Compétences</div>
          <div className="nav-btn" onClick={() => navigate("/Projects")}>Projets</div>
          <div className="nav-btn" onClick={() => navigate("/Contact")}>Contact</div>
          <div className="nav-btn">🇫🇷</div>

          <svg viewBox="0 0 100% 60" height="100" width="100%" className="outline">
            <rect strokeWidth="5" fill="transparent" height="60" width="100%" pathLength="100" className="rect" />
          </svg>
        </div>
      </div>

    </div>
  );
}