import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { matchColor } from "../utils/functions";
import { Task } from "./Task";

export const DoneTable = ({ heading, tasks }) => {
  return (
    <TableContainer heading={heading}>
      <div className="table-header">{heading}</div>
      <Droppable droppableId={heading}>
        {(provided) => (
          <div
            className="tasks"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} index={index} task={task} />
            ))}
            {provided.placeholder}
            <form className="addTask">
              <input
                type="text"
                className="heading"
                placeholder="Enter Heading..."
              />
              <input
                type="text"
                className="desc"
                placeholder="Enter Description..."
              />
              <select name="tag" id="tag">
                <option value="">select tag</option>
                <option value="Bug">bug</option>
                <option value="Feature">feature</option>
                <option value="Story">story</option>
              </select>
              <input
                type="text"
                className="assignee"
                placeholder="Enter Assignee Name..."
              />
            </form>
            <button className="createTodo">Add Task</button>
          </div>
        )}
      </Droppable>
    </TableContainer>
  );
};

const TableContainer = styled.div`
  /* min-height: 80vh; */
  /* border-top-left-radius: 5px;
  border-top-right-radius: 5px; */
  .addTask {
    border: 1px solid ${matchColor};
    border-radius: 5px;
    width: 90%;
    background: ${matchColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    outline: none;
    gap: 5px;

    font-size: large;

    input {
      width: 90%;
      padding: 3px;
      border: 2px solid ${matchColor};
      border-radius: 5px;
    }

    input:focus {
      outline: none;
    }

    select {
      width: 90%;
    }
  }
  border-radius: 5px;

  border: 1px solid;
  border-color: ${matchColor};

  .tasks {
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: space-around;

    .createTodo {
      justify-self: flex-end;
      background-color: ${matchColor};
      width: 90%;
      border: 2px solid white;
      border-radius: 5px;
      padding: 2px 5px;
      color: white;
      font-weight: bold;
      font-size: larger;

      cursor: pointer;
    }
    .createTodo:hover {
      opacity: 0.7;
    }
  }
  .table-header {
    color: white;
    text-align: center;
    font-weight: bold;
    font-size: larger;
    background-color: ${matchColor};
    padding: 5px 10px;
    text-transform: capitalize;
  }
`;
