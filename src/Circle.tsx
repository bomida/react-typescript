import styled from "styled-components"

interface ContainerProps {
  bgColor: string;
  borderRradius?: string;
  borderColor: string;
}

const Container = styled.div< ContainerProps >`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background-color: ${props => props.bgColor};
  border-radius: ${props => props.borderRradius};
  border: 2px solid ${props => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderRradius?: string;
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderRradius, borderColor, text = "Empty here" }: CircleProps) {
  return <Container bgColor={bgColor} borderRradius={borderRradius} borderColor={borderColor ?? bgColor}>{text}</Container>
}

export default Circle;

// 🚨 interface
// 인터페이스란 object shape(객체 모양)을 TypeScript에게 설명해주는 TypeScript의 개념
