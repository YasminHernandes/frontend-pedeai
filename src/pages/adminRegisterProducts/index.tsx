import styled from "styled-components";
import { Button, TabBarAdmin } from "@/components";
import { colors } from "@/_variables";
import IconSuccess from "@/assets/svg/icon-success.svg";
import IconError from "@/assets/svg/icon-error.svg";
import { Logo } from "@/components/shared";
import IconBack from "@/assets/svg/icon-back.svg";
import { IconHome, IconNotifications, IconOrders, IconProducts, IconProfile } from "@/components/shared/svgComponents";
import { useState } from "react";
import { redirect, useNavigate } from "react-router";

const Wrapper = styled.div`
  width: 100%;
  max-width: 390px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;
  padding: 0 8px;
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background: ${colors.white};
  gap: 16px;
  padding: 16px 0;
  z-index: 99;
`;
const Back = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const Title = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: ${colors.masala};
`;
const Form = styled.form`
  width: 100%;
  padding-bottom: 92px;
`;
const FieldContainer = styled.div`
  position: relative;

  img,
  span {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
  span {
    left: 20px;
    right: 0;
    color: ${colors.mountainMist};
  }
`;
const Field = styled.input`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 18px;
  border: 1px solid ${colors.mountainMist};
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: transparent;
  transition: all 0.2s ease-in;

  &:nth-child(5) {
    margin-bottom: 24px;
  }
  &::placeholder {
    font-size: 14px;
    color: ${colors.mountainMist};
  }
  &:focus-visible {
    outline: none;
    border: 1px solid ${colors.thunderbird};
  }

  &:nth-child(2) {
    padding: 8px 18px 8px 44px;
  }
`;
const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  border: 1px solid ${colors.mountainMist};
  border-radius: 8px;
  padding: 16px 18px;
  margin-bottom: 16px;
  resize: none;

  &:focus-visible {
    outline: none;
    border: 1px solid ${colors.thunderbird};
  }
`;

export const AdminRegisterProducts = () => {
  const [pageActive, setPageActive] = useState('home')
  const navigate = useNavigate()

  return (
    <Wrapper>
      <Header>
        <Logo />
        <Back>
          <img src={IconBack} alt="" width="42px" height="42px" />
          <Title>Adicionar novo produto</Title>
          
        </Back>
      </Header>

      <Form>
        <FieldContainer>
          <Field
            type="text"
            placeholder="Nome do Produto*"
            required
            autoFocus
          />
          {/* <img src={IconSuccess} alt="" /> */}
          {/* <img src={IconError} alt="" /> */}
        </FieldContainer>
        <FieldContainer>
          <span>R$</span>
          <Field type="number" placeholder="Valor*" />
        </FieldContainer>
        <Textarea placeholder="Descrição" />
        <Field type="string" placeholder="Url da Imagem" />

        <Button isFill radius="50px" padding="12px">
          Cadastrar novo produto
        </Button>
      </Form>

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
