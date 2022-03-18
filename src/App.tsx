import './App.css';
import ControlPanel from 'pages/ControlPanel';
import 'bulma/css/bulma.min.css';

function App() {
  return (
      <>
        <nav className="navbar">
          <div className="container">
            <div className="navbar-menu">
              <div className="navbar-start">
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
