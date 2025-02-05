import githubLogo from "../assets/github-icon.png"

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        <a href="https://github.com/PonyTailExpress/mini-project-recipe" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" className="github-logo" />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
