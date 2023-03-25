import { useState } from "react";
import "./TaskBox.css";
import { DragDropContext } from "react-beautiful-dnd";
import { DoneTable } from "./Done";
import { ProgressTable } from "./Progress";
import { TodoTable } from "./TodoTable";
import {
  done as initialDone,
  progress as initialProgress,
  todo as initialTodo,
} from "../db/tasks";

export const TaskBox = () => {
  // console.log(initialTodo, initialProgress, initialDone);
  const [todo, setTodo] = useState(initialTodo);
  const [progress, setProgress] = useState(initialProgress);
  const [done, setDone] = useState(initialDone);

  const addTodo = (data) => {
    if (data) setTodo([...todo, data]);
  };

  const addProgress = (data) => {
    if (data) setProgress([...progress, data]);
  };

  const addDone = (data) => {
    if (data) setDone([...done, data]);
  };

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
    //Doing operations
    add = active[src_index];
    active.splice(src_index, 1);

    switch (dest_droppableId) {
      case "Todo":
        add.status = dest_droppableId;
        completed = todo;
        break;
      case "Progress":
        add.status = dest_droppableId;
        completed = progress;
        break;
      case "Done":
        add.status = dest_droppableId;
        completed = done;
        break;
    }

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
      <div className="task_box">
        <TodoTable heading={"Todo"} tasks={todo} addTodo={addTodo} />
        <ProgressTable
          heading={"Progress"}
          tasks={progress}
          addProgress={addProgress}
        />
        <DoneTable heading={"Done"} tasks={done} addDone={addDone} />
      </div>
    </DragDropContext>
  );
};
