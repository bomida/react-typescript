import styled from 'styled-components';
import './App.css';
import Circle from "./Circle";
import Forms from "./Forms";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.bgColor};
`;

const Title = styled.h1`
  font-size: 60px;
  color: ${props => props.theme.textColor};
`;

const Btn = styled.button`
  all: unset;
  margin-left: 20px;
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid ${props => props.theme.bgColor};
  border-radius: 20px;
  background-color: ${props => props.theme.btnColor};
    &:hover {
      color: tomato;
      border: 1px solid tomato;
      background-color: inherit;
    }
`;

function App() {
  return (
    <Container>
      <Title>Empty</Title>
      <Btn>Click me</Btn>
      {/* <Forms /> */}
      {/* <Circle bgColor="teal" />
      <Circle bgColor="tomato" />
      <Circle bgColor="orange" borderRradius="50%" />
      <Circle bgColor="lightgreen" borderRradius="50%" borderColor="red" /> */}
    </Container>
  );
}

export default App;