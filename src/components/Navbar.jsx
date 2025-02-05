import recipeLogo from "../assets/recipe-logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">The Recipe App</h1>
      <img src={recipeLogo} className="logo" />
    </nav>
  );
};

export default Navbar;