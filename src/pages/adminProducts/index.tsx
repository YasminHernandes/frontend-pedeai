import { colors } from "@/_variables";
import { TabBarAdmin, Logo, Button, AdminCardSecondary } from "@/components";
import { IconHome, IconNotifications, IconOrders, IconProducts, IconProfile } from "@/components/shared/svgComponents";
import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 390px;
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
  z-index: 99;
`;
const NovoProduto = styled.div`
  width: 136px;
  justify-self: right;
`;
const Content = styled.div`
  margin-top: 24px;
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
  margin-bottom: 16px;
`;

export const AdminProducts = () => {
  const [pageActive, setPageActive] = useState('produtos')
  const navigate = useNavigate()

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
          <Title>Produtos</Title>

          <List>
            <li>
              <AdminCardSecondary
                productImage="https://plus.unsplash.com/premium_photo-1661762555601-47d088a26b50?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                productName="Pizza de Mussarella"
                productDescription="Lorem ipsum dolor sit amet consectetur. Dignissim etiam ut egestas vulputate vitae et. Scelerisque et donec purus feugiat. Eu dignissim
  duis at facilisis donec est."
                productPrice="R$ 134,80"
              />
            </li>
            <li>
              <AdminCardSecondary
                productImage="https://plus.unsplash.com/premium_photo-1661762555601-47d088a26b50?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                productName="Pizza de Mussarella"
                productDescription="Lorem ipsum dolor sit amet consectetur. Dignissim etiam ut egestas vulputate vitae et. Scelerisque et donec purus feugiat. Eu dignissim
  duis at facilisis donec est."
                productPrice="R$ 134,80"
              />
            </li>
            <li>
              <AdminCardSecondary
                productImage="https://plus.unsplash.com/premium_photo-1661762555601-47d088a26b50?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                productName="Pizza de Mussarella"
                productDescription="Lorem ipsum dolor sit amet consectetur. Dignissim etiam ut egestas vulputate vitae et. Scelerisque et donec purus feugiat. Eu dignissim
  duis at facilisis donec est."
                productPrice="R$ 134,80"
              />
            </li>
            <li>
              <AdminCardSecondary
                productImage="https://plus.unsplash.com/premium_photo-1661762555601-47d088a26b50?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                productName="Pizza de Mussarella"
                productDescription="Lorem ipsum dolor sit amet consectetur. Dignissim etiam ut egestas vulputate vitae et. Scelerisque et donec purus feugiat. Eu dignissim
  duis at facilisis donec est."
                productPrice="R$ 134,80"
              />
            </li>
            <li>
              <AdminCardSecondary
                productImage="https://plus.unsplash.com/premium_photo-1661762555601-47d088a26b50?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                productName="Pizza de Mussarella"
                productDescription="Lorem ipsum dolor sit amet consectetur. Dignissim etiam ut egestas vulputate vitae et. Scelerisque et donec purus feugiat. Eu dignissim
  duis at facilisis donec est."
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
