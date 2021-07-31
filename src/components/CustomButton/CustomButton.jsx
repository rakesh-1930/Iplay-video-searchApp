import React from "react";
import "./CustomButton.styles.scss";

export default function CustomButton({ children }) {
  return (
    <div className="button-container">
      <button className="custom-button">{children}</button>
    </div>
  );
}
