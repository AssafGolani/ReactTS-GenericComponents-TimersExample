import Button from "./components/Button";
function App() {
  return (
    <main>
      <p>
        <Button el="button">Button</Button>
      </p>
      <p>
        <Button el="anchor" href="https://google.com">
          A link
        </Button>
      </p>
    </main>
  );
}

export default App;
