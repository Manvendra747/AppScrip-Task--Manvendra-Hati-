export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">LOGO</div>

        <div className="header-icons">
          <button className="icon-btn">🔍</button>
          <button className="icon-btn">♡</button>
          <button className="icon-btn">🛒</button>
          <button className="icon-btn">👤</button>
          <button className="lang-btn">ENG ▾</button>
        </div>
      </div>

      <nav className="nav-menu">
        <ul>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </nav>
    </header>
  );
}
