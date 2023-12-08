const Header = () => {
  return (
    <div className="header">
      <div className="logo-and-burgerIcon">
        <p className="logo">THE PLANETS</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
          <g fill="#FFF" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
          </g>
        </svg>
      </div>
      <div className="line"></div>
      <div className="navigation-div">
        <p className="navigation-word overview">OVERVIEW</p>
        <p className="navigation-word structure">STRUCTURE</p>
        <p className="navigation-word surface">SURFACE</p>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Header;
