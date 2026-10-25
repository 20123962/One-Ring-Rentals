// imported React and useState function(for managing state)
import React, { useState } from "react";
// imported createRoot for rendering the app component
import { createRoot } from "react-dom/client";

// imported reused components
import Header from "./components/header";
import Footer from "./components/footer";

// imported components used for this page
import RegionsInAustralia from "./components/regionsinaustralia";
import Regions from "./data/regions";

// component for the content section
const App = () => {
// stores the current logo and shares it between the header and footer
  const [logo, setLogo] = useState("/images/logo.png");

    return (
    <div id="wrapper">
      <Header logo={logo} setLogo={setLogo}/>
      <RegionsInAustralia Regions = {Regions}/>
      <Footer Regions = {Regions} logo={logo}/>
    </div>
    )
};
      
// finds the root element in index.html and renders the App component inside it
const root = createRoot(document.getElementById("root"));
root.render(<App />);