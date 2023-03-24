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
  const [todo, setTodo] = useState(initialTodo);
  const [progress, setProgress] = useState(initialProgress);
  const [done, setDone] = useState(initialDone);

  const handleOnDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    const { droppableId: dest_droppableId, index: dest_index } = destination;
    const { droppableId: src_droppableId, index: src_index } = source;
    if (dest_droppableId == src_droppableId && dest_index == src_index) return;
    console.log(result);

    let add = null,
      active = null;
    switch (src_droppableId) {
      case "Todo":
        active = todo;
      case "Progress":
        active = progress;
      case "Done":
        active = done;
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
