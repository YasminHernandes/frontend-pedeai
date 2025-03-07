import { colors } from "@/_variables";
import { TabBarAdmin, Logo, AdminCardPrimary, Button } from "@/components";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 390px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 8px;
`;
const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background: ${colors.white};
  padding-bottom: 8px;
`;
const NovoProduto = styled.div`
    width: 136px;
    justify-self: right ;
`
const Content = styled.div`
  margin-top: 24px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 90px;
`;
const Title = styled.p`
  flex-basis: 100%;
  font-weight: 600;
  font-size: 18px;
  color: ${colors.masala};
`;
const VerTodos = styled.a`
  width: 100%;
  font-size: 14px;
  color: ${colors.thunderbird70};
  text-align: end;
`;

export const AdminProducts = () => {
  return (
    <Wrapper>
      <Header>
        <Logo />

        <NovoProduto>
          <Button radius="4px" padding="16px">
            Novo Produto
          </Button>
        </NovoProduto>
      </Header>

      <Content>
        <div>
          <Container>
            <Title>Produtos</Title>
            <VerTodos>ver todos</VerTodos>
          </Container>

          <List>
            <li>
              <AdminCardPrimary />
            </li>
            <li>
              <AdminCardPrimary />
            </li>
            <li>
              <AdminCardPrimary />
            </li>
            <li>
              <AdminCardPrimary />
            </li>
            <li>
              <AdminCardPrimary />
            </li>
          </List>
        </div>
      </Content>
      <TabBarAdmin />
    </Wrapper>
  );
};
