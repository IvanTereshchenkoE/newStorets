import { Container } from "../../styles/styled";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <Container>
      <Header></Header>
      {children}
    </Container>
  );
}

export default Layout;
