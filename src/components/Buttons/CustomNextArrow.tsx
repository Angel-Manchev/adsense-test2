import React from "react";

// Define the type for props
interface CustomArrowProps {
  onClick?: () => void;
}

const CustomNextArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="slick-next slick-arrow"
      aria-label="Next"
      type="button"
      style={{ top: "-2rem", right: "0.2rem" }}
    >
      Next
    </button>
  );
};

export default CustomNextArrow;
