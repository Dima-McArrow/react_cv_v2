import "./Header.css";
import { Navbar } from "./Navbar";
import { MobileNav } from "./MobileNav";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header>
      <div className="header_container-desktop">
        <div className="logo_container">
          <a href="/index.html">
            <Logo />
          </a>
        </div>
        <Navbar />
      </div>
      <div className="header_container-mobile">
        <div className="logo_container">
          <a href="/index.html">
            <Logo />
          </a>
        </div>
        <MobileNav />
      </div>
    </header>
  );
};
