import { Link } from "react-router-dom";

import {
  Container,
  Headers,
  Head,
  Nav,
  ItemsNav,
  Profile,
} from "../../styles/styled";

function Header() {
  return (
    <Container>
      <Headers>
        <Head>
          <Nav>
            <ItemsNav>
              <Link to={"/"}>Main</Link>
            </ItemsNav>
            <ItemsNav>
              <Link to={"/joblist"}>Jobs</Link>
            </ItemsNav>
            <ItemsNav>
              <Link to={"/specialist"}>Specialist</Link>
            </ItemsNav>
            <ItemsNav>
              <Link to={"/companies"}>Companies</Link>
            </ItemsNav>
            <ItemsNav>
              <Link to={"/"}>Salaries</Link>
            </ItemsNav>
          </Nav>
          <Profile>
            <Link to={"/"}>SpecialistProfile</Link>
          </Profile>
        </Head>
      </Headers>
    </Container>
  );
}

export default Header;