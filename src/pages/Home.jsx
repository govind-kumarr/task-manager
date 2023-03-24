import styled from "styled-components";
import { Sprints } from "../components/Sprints";
import { TaskBox } from "../components/TaskBox";

export const Home = () => {
  return (
    <AppContainer>
      <Sprints />
      <TaskBox />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`;
