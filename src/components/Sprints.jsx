import React from "react";
import styled from "styled-components";

export const Sprints = () => {
  return (
    <SprintContainer>
      <div className="sprint-heading">All Sprints</div>
    </SprintContainer>
  );
};

const SprintContainer = styled.div`
  padding: 1rem;

  .sprint-heading {
    background-color: #865dff;
    color: white;
    text-align: center;
    font-size: larger;
    font-weight: bold;

    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    padding: 5px 10px;
  }
`;
