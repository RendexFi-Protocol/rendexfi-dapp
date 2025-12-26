import { useEffect, useState } from "react";


import TopButtons from "./components/chrome/TopButtons";
import BottomNav from "./components/chrome/BottomNav";
import WalletCard from "./components/wallet/WalletCard";

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
