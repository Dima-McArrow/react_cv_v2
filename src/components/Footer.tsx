import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__copyright">
          <p>Dimitri Makarov &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};
