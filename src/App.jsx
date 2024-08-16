import "./App.css";
import Trick from "./Trick.jsx";
import { dogTricks, categories } from "./constants.js";
import { useState } from "react";

function App() {
  const [filteredTricks, setFilteredTricks] = useState(dogTricks);

  const handleClick = (category) => {
    console.log(category);
    if (category === "All") {
      setFilteredTricks(dogTricks);
    } else {
      const newTricks = dogTricks.filter(
        (trick) => trick.category === category
      );
      setFilteredTricks(newTricks);
    }
  };

  return (
    <>
      <div className="main-nav">
        <h1>Find The Best Dog Tricks</h1>
        <p>The Ultimate Collection of Dog Tricks</p>
        <p>The Ultimate Collection of Dog Tricks</p>
        <div className="category-nav">
          {categories.map((category) => {
            return (
              <button
                key={category}
                onClick={() => {
                  handleClick(category);
                }}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
      <div className="content">
        <div className="cardsContainer">
          {filteredTricks.map((trick) => {
            return (
              <Trick
                key={trick.title}
                category={trick.category}
                title={trick.title}
                description={trick.description}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
