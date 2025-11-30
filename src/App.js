import './App.css';

function App() {
  return (
    <div className="App">
        {/* Topbar */}
      <div className="topbar">
        <div className="topbar-content">
          {/* Links: Logo */}
          <div className="topbar-left">
            <div className="logo">RendexFi</div>
          </div>

          {/* Mitte: Suchleiste */}
          <div className="topbar-center">
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Tokens, Pools suchen..."
                className="search-input"
              />
              <button className="search-button">
                🔍
              </button>
            </div>
          </div>

          {/* Rechts: Settings + Connect Wallet */}
          <div className="topbar-right">
            <button className="settings-button">
              ⚙️
            </button>
            <button className="connect-wallet-button">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
