import styled from "styled-components";


import Header from "../components/Header";

import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 0 12px;
  margin: 0 auto;
  max-width: 1100px;
  background-image: url(../image/1593729918_29-p-foni-s-veshchami-39.jpg);
`;

const Content = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const Main = styled.div`
  flex: 1 1;
  min-width: 0;
`;



function Salaries() {
  return (
    <>
      <Container>
        <Header />

        <Content>
          <Main></Main>
        </Content>
      </Container>
    </>
  );
}

export default Salaries;
