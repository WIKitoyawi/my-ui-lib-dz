import React from 'react';
import './index.css';

const Tooltip = ({ text, position, children }) => {
  return (
    <div className="tooltip-container">
      <div className="tooltip-trigger">{children}</div>
      <div className={`tooltip ${position}`}>
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
