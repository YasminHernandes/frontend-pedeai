import { colors } from "@/_variables";
import { Logo, UserCardPrimary, UserCardSecondary, UserTabBar } from "@/components"
import styled from "styled-components";
import IconNotification from '@/assets/svg/icon-notification.svg';

const Wrapper = styled.div`
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
  padding: 0 8px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background: ${colors.white};
  padding: 8px;
  z-index: 99;
`;

const OrdersTitle = styled.p`
    font-weight: 500;
    font-size: 18px;
    color: ${colors.masala};
    margin: 18px 0 16px;
`

const OrdersList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const UserOrders = () => {

    return (
        <Wrapper>
            <Header>
                <Logo />
                <img src={IconNotification} alt="icon notification" />
          </Header>

          <div>
            <OrdersTitle>Seus Pedidos</OrdersTitle>
            <OrdersList>
                <UserCardPrimary/>
                <UserCardPrimary/>
                <UserCardPrimary/>
            </OrdersList>
          </div>

          <UserTabBar/>
        </Wrapper>
    )
}