import styled from "styled-components";
import {
  IconHome,
  IconNotifications,
  IconOrders,
  IconProfile,
} from "@/components/shared/svgComponents";
import { colors } from "../../../_variables";
import IconOrder from "@/assets/svg/icon-order.svg";
import { useState } from "react";
import { useNavigate } from "react-router";

const Wrapper = styled.div`
  width: 100%;
  max-width: 390px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 18px;
  margin: 0 auto;
  background: ${colors.white};
`;
const List = styled.ul`
  height: 50px;
  display: flex;
  justify-content: space-between;
`;
const Item = styled.li<{$active?: boolean}>`
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-size: 12px;
  color: ${(props) => props.$active ? colors.thunderbird : colors.mineShaft};
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    opacity: 0.6;
  }
`;

const ItemHighlighted = styled(Item)`
  position: relative;
  bottom: 30px;
  gap: 8px;
`;

const Highligh = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.thunderbird};
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

const Count = styled.span`
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -2px;
    right: 0;
    background: ${colors.yellowSea};
    border-radius: 50%;
    font-size: 9px;
    font-weight: 600;
    color: ${colors.white};
`

export const UserTabBar = () => {
  const [pageActive, setPageActive] = useState('home')
  const navigate = useNavigate()

  return (
    <Wrapper>
      <List>
        <Item $active={pageActive === 'home' && true} onClick={() => { setPageActive('home'), navigate(`/resto`)}}>
          <IconHome  color={pageActive === 'home' ? '#D71A1A' : '#333333' } />
          Home
        </Item>
        <Item $active={pageActive === 'pedidos' && true} onClick={() => { setPageActive('pedidos'), navigate(`/resto/orders`)}}>
          <IconOrders  color={pageActive === 'pedidos' ? '#D71A1A' : '#333333' } />
          Pedidos
        </Item>
        <ItemHighlighted onClick={() => { setPageActive('pedir'), navigate(`/resto/cart`)}}>
          <Highligh>
            <img src={IconOrder} alt="" />
          </Highligh>
          <Count>1</Count>
          Pedir
        </ItemHighlighted>
        <Item $active={pageActive === 'notificacao' && true} onClick={() => { setPageActive('notificacao')}}>
          <IconNotifications  color={pageActive === 'notificacao' ? '#D71A1A' : '#333333' } />
          Notificações
        </Item>
        <Item $active={pageActive === 'perfil' && true} onClick={() => { setPageActive('perfil')}}>
          <IconProfile  color={pageActive === 'perfil' ? '#D71A1A' : '#333333' } />
          Perfil
        </Item>
      </List>
    </Wrapper>
  );
};
