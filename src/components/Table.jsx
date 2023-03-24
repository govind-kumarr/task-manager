import React from "react";
import styled from "styled-components";

export const Table = ({ heading }) => {
  return (
    <TableContainer heading={heading}>
      <div className="table-header">{heading}</div>
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
  .table-header {
    color: white;
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
