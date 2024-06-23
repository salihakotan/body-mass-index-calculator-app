import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WhatIsBmi from "./pages/WhatIsBmi";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="pageContentArea">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whatIsBmi" element={<WhatIsBmi />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
