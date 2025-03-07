import { colors } from "@/_variables";
import { TabBarAdmin, Logo, AdminCardPrimary} from "@/components";
import IconSearch from "@/assets/svg/icon-search.svg";
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
`
const FieldContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 16px;

  img {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
`;
const Field = styled.input`
  width: 100%;
  display: flex;
  align-items: center;
  background: ${colors.alabaster};
  border-radius: 8px;
  border: none;
  padding: 12px 16px;
  transition: all 0.2s ease-in;

  &::placeholder {
    font-size: 14px;
    color: ${colors.mountainMist};
  }

  &:focus-visible {
    outline: none;
    border: 1px solid ${colors.thunderbird};
  }
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
`
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

export const AdminOrders = () => {
  return (
    <Wrapper>
        <Header>
          <Logo />

          <FieldContainer>
            <Field type="search" placeholder="Buscar por nome ou telefone do comprador" autoFocus />
            <img src={IconSearch}/>
          </FieldContainer>
        </Header>
      
      <Content>
        <div>
          <Container>
            <Title>Seus Pedidos</Title>
            <VerTodos>ver todos</VerTodos>
          </Container>

          <List>
            <li><AdminCardPrimary/></li>
            <li><AdminCardPrimary/></li>
            <li><AdminCardPrimary/></li>
            <li><AdminCardPrimary/></li>
            <li><AdminCardPrimary/></li>
          </List>
        </div>
      </Content>
      <TabBarAdmin />
    </Wrapper>
  );
};