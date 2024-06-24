import { useRef } from "react";
import Form from "./components/Form";
import Input from "./components/Input";
import Button from "./components/Button";
function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: number };
    console.log(extractedData);
  }
  return (
    <main>
      <Form onSave={handleSave}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
