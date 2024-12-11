import React, { useState } from "react";
import Typography from "./components/typography";
import Button from "./components/button";
import Input from "./components/Input";
import Heading from "./components/heading/Heading";
import Tooltip from "./components/Tooltip";

function App() {
  const [inputValue, setInputValue] = useState("Ivan Ivanov");

  return (
    <div>
      {/* Задание 1: Button Component */}
      <div className="task">
        <h2 className="task-title">Button Component</h2>
        <div>
          <Button size="lg">Button</Button>
          <Button size="md">Button</Button>
          <Button size="sm">Button</Button>
        </div>
        <div className="button-group--spaced">
          <Button size="lg" variant="bordered">Button</Button>
          <Button size="md" variant="bordered">Button</Button>
          <Button size="sm" variant="bordered">Button</Button>
        </div>
      </div>

      {/* Задание 2: Input Component */}
      <div className="task">
        <h2 className="task-title">Input Component</h2>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          label="Name"
        />
        <Input
          type="text"
          value="Focus"
          label="Name"
        />
        <Input
          type="text"
          value="Danger"
          danger
          label="Name"
        />
      </div>

      {/* Задание 3: Typography Component */}
      <div className="task">
        <h2 className="task-title">Typography Component</h2>
        <Typography textSize="sm">
          SM. Our mission is to redefine the model of learning and re-engineer
          its process by providing innovative administrative and instructional
          technologies. Click here for our beliefs. If you are a school
          administrator and would like to use ecourse.org for your classes,
          please create school profiles. Instructors and students may signup
          independent user account. For questions, contact us.
        </Typography>
        <Typography textSize="md">
          MD. Our mission is to redefine the model of learning and re-engineer
          its process by providing innovative administrative and instructional
          technologies. Click here for our beliefs. If you are a school
          administrator and would like to use ecourse.org for your classes,
          please create school profiles. Instructors and students may signup
          independent user account. For questions, contact us.
        </Typography>
        <Typography textSize="lg">
          LG. Our mission is to redefine the model of learning and re-engineer
          its process by providing innovative administrative and instructional
          technologies. Click here for our beliefs. If you are a school
          administrator and would like to use ecourse.org for your classes,
          please create school profiles. Instructors and students may signup
          independent user account. For questions, contact us.
        </Typography>
      </div>

      {/* Задание 4: Heading Component */}
      <div className="task">
        <Heading level={2} className="task-title">Heading Component</Heading>
        <Heading level={1}>Heading 1</Heading>
        <Heading level={2}>Heading 2</Heading>
        <Heading level={3}>Heading 3</Heading>
        <Heading level={4}>Heading 4</Heading>
        <Heading level={5}>Heading 5</Heading>
        <Heading level={6}>Heading 6</Heading>
      </div>

      {/* Задание 5: Tooltip Component */}
      <div className="task">
        <h2 className="task-title">Tooltip Component</h2>
        <Tooltip text="This is a top tooltip" position="top">
          Hover me (Top)
        </Tooltip>

        <Tooltip text="This is a bottom tooltip" position="bottom">
          Hover me (Bottom)
        </Tooltip>

        <Tooltip text="This is a left tooltip" position="left">
          Hover me (Left)
        </Tooltip>

        <Tooltip text="This is a right tooltip" position="right">
          Hover me (Right)
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
