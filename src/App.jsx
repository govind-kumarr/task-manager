import "./App.css";
import { Table } from "./components/Table";
import { todo } from "./db/tasks";

function App() {
  return (
    <div className="App">
      <Table heading={"Todo"} tasks={todo} />
      <Table heading={"Progress"} tasks={todo} />
      <Table heading={"Done"} tasks={todo} />
    </div>
  );
}

export default App;
