import { Container } from "../../styles/styled";

import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}

export default Layout;