import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 md:px-12 py-5">
        <Link to="/" className="text-lg font-semibold tracking-tight text-foreground">
          Promin Studio
        </Link>
        <nav className="flex gap-8 text-sm tracking-wide">
          <Link
            to="/"
            className={`transition-colors duration-200 ${
              location.pathname === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Портфоліо
          </Link>
          <Link
            to="/contacts"
            className={`transition-colors duration-200 ${
              location.pathname === "/contacts" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Зв'язатись
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
