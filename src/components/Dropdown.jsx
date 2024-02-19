import { useState } from "react";
import classes from "./Dropdown.module.css";

function Dropdown({ setSelectedOption }) {
  const options = [
    "Mobile/ Front-end Development",
    "Machine Learning",
    "Graphic Design",
  ];
  const [selectedOption, setSelectedOptionInternal] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOptionInternal(option);
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={classes.dropdown}>
      <button className={classes.dropdownToggle} onClick={toggleDropdown}>
        {selectedOption ? selectedOption : "Select an Option"}
        <span className={isOpen ? classes.arrowUp : classes.arrowDown}></span>
      </button>
      {isOpen && (
        <ul className={classes.dropdownMenu}>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
