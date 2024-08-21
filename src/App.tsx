import React, { useState } from "react";
import logo from "./pictures/logo.svg";
import catOne from "./pictures/catOne.svg";
import dogOne from "./pictures/dogOne.svg";
import "./App.css";
import HomeSection from "./sections/HomeSection/Home";
import ProductSection from "./sections/ProductsSection/ProductsSection";
import PlayToWinSection from "./sections/PlayToWinSection/PlayToWinSection";
import AboutUsSection from "./sections/AboutUsSection/AboutUsSection";

function App() {
  const [selectedMenu, setSelectedMenu] = useState<string>("Home");

  return (
    <div className="App">
      <header className="App-header">
        <img src={catOne} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={dogOne} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={catOne} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <p className="shop-name">React Zoo shop</p>
        <img src={logo} className="App-logo-reverse" alt="logo" />
        <img src={catOne} className="App-logo-reverse" alt="logo" />
        <img src={logo} className="App-logo-reverse" alt="logo" />
        <img src={dogOne} className="App-logo-reverse" alt="logo" />
        <img src={logo} className="App-logo-reverse" alt="logo" />
        <img src={catOne} className="App-logo-reverse" alt="logo" />
      </header>

      <MenuSection
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      />

      {selectedMenu === "Home" && <HomeSection />}
      {selectedMenu === "Products" && <ProductSection />}
      {selectedMenu === "Play to win" && <PlayToWinSection />}
      {selectedMenu === "About us" && <AboutUsSection />}
    </div>
  );
}

function MenuSection({
  selectedMenu,
  setSelectedMenu,
}: {
  selectedMenu: string;
  setSelectedMenu: React.Dispatch<React.SetStateAction<string>>;
}) {
  const menuItems = ["Home", "Products", "Play to win", "About us"];

  return (
    <div className="Menu-section">
      {menuItems.map((item) => (
        <span
          key={item}
          className={
            selectedMenu === item
              ? selectedMenu === "Play to win"
                ? "section-option__selected_gold"
                : "section-option__selected"
              : item === "Play to win"
              ? "section-option_gold"
              : "section-option"
          }
          onClick={() => setSelectedMenu(item)}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default App;
