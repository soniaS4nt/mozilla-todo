import { createRoot } from "react-dom/client";
import App from "./App";

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];
/***
 *** Note: ALL_CAPS constant names have no special meaning
 *** in JavaScript; they're a convention that tells other
 *** developers "this data will never change after being defined here".
 ***/
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App tasks={DATA} />);
