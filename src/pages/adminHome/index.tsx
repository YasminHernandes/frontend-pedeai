import { colors } from "@/_variables";
import { TabBarAdmin } from "@/components";
import { Button, Logo } from "@/components/shared";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 390px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 8px;
`;
const LogoContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background: ${colors.white};
  z-index: 99;
`;
const AdminInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${colors.mountainMist};
`;
const Username = styled.p`
  font-weight: 600;
  font-size: 18px;
  color: ${colors.masala};
  margin-top: 24px;
`;
const Email = styled.p`
  font-size: 16px;
  color: ${colors.masala};
`;
const Telephone = styled.p`
  font-size: 16px;
  color: ${colors.masala};
`;
const Content = styled.div`
  margin-top: 24px;
`;
const ProductContainer = styled.div`
  margin-bottom: 24px;
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
const Description = styled.p`
  width: 100%;
  font-size: 16px;
  color: ${colors.boulder};
  text-align: center;
  margin-top: 16px;
`;
const OrdersContainer = styled.div``;

export const AdminHome = () => {
  return (
    <Wrapper>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      <AdminInfo>
        <Username>oreidoparmigina</Username>
        <Email>oreidoparmigiana</Email>
        <Telephone>(11) 9 0000-0000</Telephone>
      </AdminInfo>
      <Content>
        <ProductContainer>
          <Header>
            <Title>Produtos</Title>
            {/* <VerTodos>ver todos</VerTodos> */}
            <Button radius="4px" padding="8px">
              Adicionar Novo Produto
            </Button>
          </Header>

          <Description>Você não possui nenhum produto</Description>
        </ProductContainer>
        <OrdersContainer>
          <Header>
            <Title>Pedidos</Title>
            {/* <VerTodos>ver todos</VerTodos> */}
          </Header>
          <Description>Você não possui nenhum pedido</Description>
        </OrdersContainer>
      </Content>
      <TabBarAdmin />
    </Wrapper>
  );
};
