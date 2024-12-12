import React, { useState } from "react";
import Typography from "./components/typography";
import Button from "./components/button";
import Input from "./components/Input";
import Heading from "./components/heading/Heading";
import Tooltip from "./components/Tooltip";
import Accordion from "./components/accordion";

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
        <Heading level={1}>H1. Heading 1</Heading>
        <Heading level={2}>H2. Heading 2</Heading>
        <Heading level={3}>H3. Heading 3</Heading>
        <Heading level={4}>H4. Heading 4</Heading>
        <Heading level={5}>H5. Heading 5</Heading>
        <Heading level={6}>H6. Heading 6</Heading>
      </div>

      {/* Задание 5: Tooltip Component */}
      <div className="tooltip-wrapper">
        <h2 className="task-title">Tooltip Component</h2>
        <Tooltip text="This is a top tooltip" position="top">
          Top Tooltip
        </Tooltip>

        <Tooltip text="This is a left tooltip" position="left">
          Left Tooltip
        </Tooltip>

        <Tooltip text="This is a right tooltip" position="right">
          Right Tooltip
        </Tooltip>

        <Tooltip text="This is a bottom tooltip" position="bottom">
          Bottom Tooltip
        </Tooltip>
      </div>

        <div>
        <h2>Accordion Component</h2>
        <Accordion title="Accordion 1">
          Content for Accordion 1. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Accordion>
        <Accordion title="Accordion 2" defaultOpen>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </Accordion>
      </div>
    </div>
  );
}

export default App;
