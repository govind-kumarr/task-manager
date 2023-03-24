import React from "react";
import styled from "styled-components";

export const Tag = ({ type }) => {
  return <TagCard type={type}>{type}</TagCard>;
};

const TagCard = styled.div`
  font-size: 12px;
  background-color: ${({ type }) => {
    switch (type) {
      case "Bug":
        return "#FF0303";
      case "Feature":
        return "#16FF00";
      case "Story":
        return "#A31ACB";
      default:
        return "FF0303";
    }
  }};
  color: white;
  font-weight: bold;
  padding: 2px 10px;
  border-radius: 10px;
`;
