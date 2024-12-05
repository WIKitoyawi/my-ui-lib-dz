import Button from "./components/button";

function App() {
  return (
    <div>
      <Button size = "lg">Confirm</Button>
      <Button size = "md">Confirm</Button>
      <Button size = "sm">Confirm</Button>
      <br />
      <Button size = "sm" variant="bordered">Cancel</Button>
      <Button size = "md" variant="bordered">Cancel</Button>
      <Button size = "lg" variant="bordered">Cancel</Button>
    </div>
  );
}

export default App;
