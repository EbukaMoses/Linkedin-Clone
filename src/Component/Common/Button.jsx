import React from 'react'
import "../../App.css"

const Button = ({ btnColor, title, onClick, disabled, icon }) => {
    return (
      <button
        className={`btn ${btnColor}`}
        onClick={onClick}
        disabled={disabled}
      >
       {icon && icon} {title}
      </button>
    );
};

export default Button