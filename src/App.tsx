import React, {useState} from 'react';
import ControlPanel from 'pages/ControlPanel';
import 'bulma/css/bulma.min.css';

function App() {
  const [active, setActive] = useState(false);

  const handleNavBurger = (e: React.MouseEvent<HTMLAnchorElement>) => setActive(!active);


  return (
      <>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="container">
          <div className="navbar-brand">
                <a role="button" className={`navbar-burger ${active && "is-active"}`}
                  aria-label="menu" aria-expanded="false"
                  data-target="app-navbar-menu"
                  onClick={handleNavBurger}
                >
                  <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                      </a>
          </div>
            <div id="app-navbar-menu" className={`navbar-menu ${active && "is-active"}`}>
              <div className="navbar-start">

                <a className="navbar-item">
                  Home
                </a>
                <a className="navbar-item">
                  Documentation
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main>
          <div className="container">
            <ControlPanel />
          </div>
        </main>
      </>
  );
}

export default App;
