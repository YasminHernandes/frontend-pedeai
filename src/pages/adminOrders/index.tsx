import { colors } from "@/_variables";
import { TabBarAdmin, Logo, AdminCardPrimary } from "@/components";
import IconSearch from "@/assets/svg/icon-search.svg";
import styled from "styled-components";
import { IconHome, IconNotifications, IconOrders, IconProducts, IconProfile } from "@/components/shared/svgComponents";
import { useState } from "react";
import { redirect, useNavigate } from "react-router";

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
`;
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

export const AdminOrders = () => {
  const [pageActive, setPageActive] = useState('pedidos')
  const navigate = useNavigate()

  return (
    <Wrapper>
      <Header>
        <Logo />

        <FieldContainer>
          <Field
            type="search"
            placeholder="Buscar por nome ou telefone do comprador"
            autoFocus
          />
          <img src={IconSearch} />
        </FieldContainer>
      </Header>

      <Content>
        <div>
          <Container>
            <Title>Pedidos</Title>
            <VerTodos>ver todos</VerTodos>
          </Container>

          <List>
            <li>
              <AdminCardPrimary
                phoneNumber="(11) 9 0000-0000"
                productImage="https://plus.unsplash.com/premium_photo-1661762555601-47d088a26b50?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                productQuantity={2}
                productName="Pizza de Mussarella"
                orderDate="01 Março 2025"
                orderStatus="Em andamento"
                productPrice="R$ 134,80"
              />
            </li>
            <li>
              <AdminCardPrimary
                phoneNumber="(11) 9 0000-0000"
                productImage="https://plus.unsplash.com/premium_photo-1661762555601-47d088a26b50?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                productQuantity={2}
                productName="Pizza de Mussarella"
                orderDate="01 Março 2025"
                orderStatus="Em andamento"
                productPrice="R$ 134,80"
              />
            </li>
            <li>
              <AdminCardPrimary
                phoneNumber="(11) 9 0000-0000"
                productImage="https://plus.unsplash.com/premium_photo-1661762555601-47d088a26b50?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                productQuantity={2}
                productName="Pizza de Mussarella"
                orderDate="01 Março 2025"
                orderStatus="Em andamento"
                productPrice="R$ 134,80"
              />
            </li>
          </List>
        </div>
      </Content>
      <TabBarAdmin
        items={[
          { 
            active: pageActive === 'home' && true,
            label: "Home", 
            icon: <IconHome color={pageActive === 'home' ? '#D71A1A' : '#333333' }/>,
            onclick:() => {
              setPageActive('home')
              // navigate(`/admin/${restaurant.id}`)
              navigate(`/admin/resto`)
            }
          },
          { 
            active: pageActive === 'pedidos' && true,
            label: "Pedidos", 
            icon: <IconOrders color={pageActive === 'pedidos' ? '#D71A1A' : '#333333' }/>,
            onclick:() =>{
              setPageActive('pedidos')
              navigate("/admin/orders")
            }
          },
          { 
            active: pageActive === 'produtos' && true,
            label: "Produtos", 
            icon: <IconProducts color={pageActive === 'produtos' ? '#D71A1A' : '#333333' }/>,
            onclick:() =>{
              setPageActive('produtos')
              navigate("/admin/products")
            }
          },
          { 
            active: pageActive === 'notificacao' && true,
            label: "Notificação",
            icon: <IconNotifications color={pageActive === 'notificacao' ? '#D71A1A' : '#333333' }/>,
            onclick:() =>setPageActive('notificacao')
          },
          { 
            active: pageActive === 'perfil' && true,
            label: "Perfil", 
            icon: <IconProfile color={pageActive === 'perfil' ? '#D71A1A' : '#333333' }/>, 
            onclick:() =>setPageActive('perfil') 
          },
        ]}
      />
    </Wrapper>
  );
};
