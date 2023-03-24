import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { Task } from "./Task";

export const TodoTable = ({ heading, tasks }) => {
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
  border-radius: 5px;

  border: 1px solid;
  border-color: ${({ heading }) => {
    switch (heading) {
      case "Todo":
        return "#5BC0F8";
      case "Progress":
        return "#FFC93C";
      case "Done":
        return "#03C988";
      default:
        return "#5BC0F8";
    }
  }};

  .tasks {
    margin: 1rem 0rem;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: space-around;
  }
  .table-header {
    color: white;
    text-align: center;
    font-weight: bold;
    font-size: larger;
    background-color: ${({ heading }) => {
      switch (heading) {
        case "Todo":
          return "#5BC0F8";
        case "Progress":
          return "#FFC93C";
        case "Done":
          return "#03C988";
        default:
          return "#5BC0F8";
      }
    }};
    padding: 5px 10px;
    text-transform: capitalize;
  }
`;
