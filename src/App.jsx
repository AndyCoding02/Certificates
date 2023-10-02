import './App.css';
import styled from "styled-components";
import WebDev from "./components/WebDev";
import JavaScrpt from "./components/JavaScrpt";
import Python from "./components/Python";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
      background-image: linear-gradient(180deg, #1f2b85 0%, #9dcbe7 100%);
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <WebDev />
      <JavaScrpt />
      <Python />
    </Container>
  );
}

export default App;
