import styled from "styled-components"
import { IconHome, IconNotifications, IconOrders, IconProfile } from "@/components/shared/svgComponents"
import { colors } from "../../../_variables"
import IconOrder from "@/assets/svg/icon-order.svg"




const Wrapper = styled.div`
height: max-content;
background-color: ${colors.white};
padding: 16px 18px;
position: relative;
`
const List = styled.ul`
    height: 50px;
    display: flex;
    justify-content: space-between;
`
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
    transition: all .2s ease-in;

    &:hover {
    opacity: .6;
    }
`

const ItemHighlighted = styled(Item)`
position: relative;
bottom: 30px;
gap: 8px;
`

const Highligh = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: ${colors.thunderbird};
width: 64px;
height: 64px;
border-radius: 50%;
`

export const UserTabBar = () => {
    return (
        <Wrapper>
            <List>
                <Item>
                    <IconHome color='#333' />
                    Home
                </Item>
                <Item>
                    <IconOrders color='#333' />
                    Pedidos
                </Item>
                <ItemHighlighted>
                    <Highligh>
                     <img src={IconOrder} alt="" />
                    </Highligh>
                    Pedir
                </ItemHighlighted>
                <Item>
                    <IconNotifications color='#333' />
                    Notificações
                </Item>
                <Item>
                    <IconProfile color='#333' />
                    Perfil
                </Item>
            </List>
        </Wrapper>
    )
}