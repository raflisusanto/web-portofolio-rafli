import { useState, useEffect, useRef } from "react";
import classes from "./TextSlider.module.css";

function TextSlider({ texts }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(0);

  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoSlide(); // Start the automatic interval for text movement
    return stopAutoSlide; // Clear the interval when the component unmounts
  }, []);

  function handleIndicatorClick(index) {
    setActiveIndex(index);
    setSliderPosition(index * -100); // Assuming each text takes 100% width
    resetAutoSlide(); // Reset the automatic interval on indicator click
  }

  function startAutoSlide() {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setSliderPosition(
        (prevPosition) => (prevPosition - 100) % (-100 * texts.length)
      );
    }, 5000);
  }

  function stopAutoSlide() {
    clearInterval(intervalRef.current);
  }

  function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  return (
    <div className={classes.textSliderContainer}>
      <div
        className={classes.textSlider}
        style={{ transform: `translateX(${sliderPosition}%)` }}
      >
        {texts.map((text, index) => (
          <div key={index} className={classes.textSliderItem}>
            <h1 className={classes.titleName}>{text}</h1>
          </div>
        ))}
      </div>
      <div className={classes.circleIndicators}>
        {texts.map((_, index) => (
          <div
            key={index}
            className={`${classes.circleIndicator} ${
              index === activeIndex ? classes.active : ""
            }`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default TextSlider;
