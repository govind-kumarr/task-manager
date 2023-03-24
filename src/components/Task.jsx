import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { Tag } from "./Tag";

export const Task = ({ task, index }) => {
  const { heading, status, desc, assignee, type, id } = task;
  return (
    <Draggable  draggableId={id} index={index}>
      {(provided) => (
        <TaskCard
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          heading={heading}
          status={status}
        >
          <div className="task-heading">
            <p>{heading}</p>
            <span className="tag">
              <Tag type={type} />
            </span>
          </div>
          <p>{desc}</p>
        </TaskCard>
      )}
    </Draggable>
  );
};
const TaskCard = styled.div`
  width: 90%;
  border: 2px solid;
  border-color: ${({ status }) => {
    switch (status) {
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
  border-radius: 5px;
  padding: 2px;
  cursor: grab;
  :active {
    cursor: grabbing;
  }

  .task-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px 5px;
    p {
      text-decoration: underline;
      text-decoration: underline solid;
      cursor: pointer;
    }
    /* background-color: ${({ status }) => {
      switch (status) {
        case "Todo":
          return "#5BC0F8";
        case "Progress":
          return "#FFC93C";
        case "Done":
          return "#03C988";
        default:
          return "#5BC0F8";
      }
    }}; */
  }
`;
