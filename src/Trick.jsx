import PropTypes from "prop-types";
import { useState } from "react";

function Trick({ category, title, description }) {
  const [flippedCard, setFlippedCard] = useState(false);

  function handleCardFlip() {
    console.log(flippedCard);
    setFlippedCard(!flippedCard);
  }

  return (
    <div onClick={handleCardFlip}>
      {!flippedCard && (
        <>
          <div className="card">
            {/* Front of Card  */}
            <div className="top">
              <p>{category}</p>
            </div>
            <div className="bottom">
              <h2>{title}</h2>
            </div>
          </div>
        </>
      )}

      {/* Back of Card */}
      {flippedCard && (
        <div className="card-back">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}

Trick.propTypes = {
  category: PropTypes.string.isRequired, // Category must be a string
  title: PropTypes.string.isRequired, // Title must be a string
  description: PropTypes.string.isRequired, // Description must be a string
};

export default Trick;
