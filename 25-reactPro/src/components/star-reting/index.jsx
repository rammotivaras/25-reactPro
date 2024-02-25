import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

// eslint-disable-next-line react/prop-types
const StarRating = ({ noOfStart = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleMouseClick(getCurrentIndex) {
    console.log(getCurrentIndex);
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    console.log(getCurrentIndex);
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div>
      {[...Array(noOfStart)].map((_, index) => {
        const currentIndex = index + 1;
        return (
          <FaStar
            key={currentIndex}
            className={
              currentIndex <= (hover || rating) ? "active" : "inActive"
            }
            onClick={() => handleMouseClick(currentIndex)}
            onMouseEnter={() => handleMouseEnter(currentIndex)}
            onMouseLeave={handleMouseLeave}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
