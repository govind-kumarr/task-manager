import React from "react";
import styled from "styled-components";
import { Task } from "./Task";

export const Table = ({ heading, tasks }) => {
  console.log(tasks);
  const myTasks = tasks.filter((task) => task.status == heading);
  return (
    <TableContainer heading={heading}>
      <div className="table-header">{heading}</div>
      <div className="tasks">
        {myTasks.map((task) => (
          <Task id={task.id} task={task} />
        ))}
      </div>
    </TableContainer>
  );
};

const TableContainer = styled.div`
  min-height: 80vh;
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
