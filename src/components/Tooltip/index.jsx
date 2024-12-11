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

const App = () => {
  return (
    <div className="task">
      <h2 className="task-title">Tooltip Component Example</h2>

      <Tooltip text="This is a top tooltip" position="top">
        Hover over me (Top)
      </Tooltip>

      <Tooltip text="This is a bottom tooltip" position="bottom">
        Hover over me (Bottom)
      </Tooltip>

      <Tooltip text="This is a left tooltip" position="left">
        Hover over me (Left)
      </Tooltip>

      <Tooltip text="This is a right tooltip" position="right">
        Hover over me (Right)
      </Tooltip>
    </div>
  );
};

export default App;
