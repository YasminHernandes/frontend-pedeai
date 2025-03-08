import styled from "styled-components";
import {
  IconHome,
  IconNotifications,
  IconOrders,
  IconProfile,
} from "@/components/shared/svgComponents";
import { colors } from "../../../_variables";
import IconOrder from "@/assets/svg/icon-order.svg";

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
const Item = styled.li`
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  font-size: 12px;
  color: ${colors.mineShaft};
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
  return (
    <Wrapper>
      <List>
        <Item>
          <IconHome color="#333" />
          Home
        </Item>
        <Item>
          <IconOrders color="#333" />
          Pedidos
        </Item>
        <ItemHighlighted>
          <Highligh>
            <img src={IconOrder} alt="" />
          </Highligh>
          <Count>1</Count>
          Pedir
        </ItemHighlighted>
        <Item>
          <IconNotifications color="#333" />
          Notificações
        </Item>
        <Item>
          <IconProfile color="#333" />
          Perfil
        </Item>
      </List>
    </Wrapper>
  );
};
