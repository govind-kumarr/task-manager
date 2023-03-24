import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import "./App.css";
import { DoneTable } from "./components/Done";
import { ProgressTable } from "./components/Progress";
import { TodoTable } from "./components/TodoTable";
import {
  done as initialDone,
  progress as initialProgress,
  todo as initialTodo,
} from "./db/tasks";

function App() {
  // console.log(initialTodo, initialProgress, initialDone);
  const [todo, setTodo] = useState(initialTodo);
  const [progress, setProgress] = useState(initialProgress);
  const [done, setDone] = useState(initialDone);

  const handleOnDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    const { droppableId: dest_droppableId, index: dest_index } = destination;
    const { droppableId: src_droppableId, index: src_index } = source;
    if (dest_droppableId == src_droppableId && dest_index == src_index) return;
    // console.log(result);

    let add = null,
      active = [],
      completed = [];

    //Identifying from where the task was dragged and what is its destination
    switch (src_droppableId) {
      case "Todo":
        active = todo;
        break;
      case "Progress":
        active = progress;
        break;
      case "Done":
        active = done;
        break;
    }

    switch (dest_droppableId) {
      case "Todo":
        completed = todo;
        break;
      case "Progress":
        completed = progress;
        break;
      case "Done":
        completed = done;
        break;
    }
    //Doing operations
    add = active[src_index];
    active.splice(src_index, 1);
    completed.splice(dest_index, 0, add);

    //setting up new changes
    switch (src_droppableId) {
      case "Todo":
        setTodo(active);
        break;
      case "Progress":
        setProgress(active);
        break;
      case "Done":
        setDone(active);
        break;
    }
    switch (dest_droppableId) {
      case "Todo":
        setTodo(completed);
        break;
      case "Progress":
        setProgress(completed);
        break;
      case "Done":
        setDone(completed);
        break;
    }
  };
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="App">
        <TodoTable heading={"Todo"} tasks={todo} />
        <ProgressTable heading={"Progress"} tasks={progress} />
        <DoneTable heading={"Done"} tasks={done} />
      </div>
    </DragDropContext>
  );
}

export default App;
