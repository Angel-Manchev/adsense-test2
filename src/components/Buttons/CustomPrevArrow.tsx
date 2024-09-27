import React from "react";

// Define the type for props
interface CustomArrowProps {
  onClick?: () => void;
}

const CustomPrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="slick-prev slick-arrow"
      type="button"
      style={{ top: "-2rem", left: "65.5rem" }}
    >
      Previous
    </button>
  );
};

export default CustomPrevArrow;
