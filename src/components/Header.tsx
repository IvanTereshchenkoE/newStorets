import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 1080px;
`;

const Headers = styled.div`
  background-color: black;
  height: 100px;
  position: sticky;
`;

const Wrapper = styled.div`
  max-width: 1350px;
  margin: 0px auto;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Profile = styled.div`
  width: 80px;
  height: 15px;
  background: white;
  list-style: none;
  padding: 30px;
  margin-right: 20px;
  margin-left: 20px;
  border-radius: 10px;
`;

const Nav = styled.ul`
  display: flex;
  align-items: center;
`;

const Items = styled.li`
  width: 80px;
  height: 15px;
  background: white;
  list-style: none;
  padding: 30px;
  margin-right: 20px;
  border-radius: 10px;
  color: red;
`;

function Header() {
  return (
    <Container>
      <Headers>
        <Wrapper>
          <Head>
            <Nav>
              <Items>
                <Link to={"/"}>Main</Link>
              </Items>
              <Items>
                <Link to={"/joblist"}>Jobs</Link>
              </Items>
              <Items>
                <Link to={"/specialist"}>Specialist</Link>
              </Items>
              <Items>
                <Link to={"/companies"}>Companies</Link>
              </Items>
              <Items>
                <Link to={"/"}>Salaries</Link>
              </Items>
            </Nav>
            <Profile>
              <Link to={"/"}>SpecialistProfile</Link>
            </Profile>
          </Head>
        </Wrapper>
      </Headers>
    </Container>
  );
}

export default Header;
