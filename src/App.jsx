import { useState } from "react";

import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="container bg-green-500 p-4 mb-10 rounded-xl">
        Create tailwind Block
      </h1>

      <div className="flex justify-between gap-2">
        <Card userName="Lucy Grey" btnText="click me" />
        <Card userName="Radhey" btnText="visit me" />
      </div>
    </>
  );
}

export default App;
