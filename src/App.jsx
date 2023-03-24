import "./App.css";
import { Table } from "./components/Table";

function App() {
  return (
    <div className="App">
      <Table heading={"Todo"} />
      <Table heading={"Progress"} />
      <Table heading={"Done"} />
    </div>
  );
}

export default App;
