import React from "react";
import styled from "styled-components";

export const Task = ({ task }) => {
  const { heading, status, desc, assignee } = task;
  return (
    <TaskCard heading={heading} status={status}>
      <div className="task-heading">{heading}</div>
      <p>{desc}</p>
    </TaskCard>
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
