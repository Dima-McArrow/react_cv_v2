import "./Navbar.css";

import navigation from "../content/navigation.json";

export const Navbar = () => {
  return (
    <nav id="desktop_nav">
      {navigation.links.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  );
};
