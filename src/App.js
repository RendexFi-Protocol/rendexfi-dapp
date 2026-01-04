import { useEffect, useState } from "react";

import './layout.css';

function App() {
  return (
    <div className="App">
      <TopButtons />
      <WalletCard />
      <BottomNav />
    </div>
  );
}

export default App;
