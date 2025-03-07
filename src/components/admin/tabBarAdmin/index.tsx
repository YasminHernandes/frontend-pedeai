import styled from 'styled-components';
import { IconHome, IconNotifications, IconOrders, IconProducts, IconProfile } from '@/components/shared/svgComponents';
import { colors } from '@/_variables';

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
`
const List = styled.ul`
    display: flex;
    justify-content: space-between;
`
const Item = styled.li`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: ${colors.mineShaft};
    cursor: pointer;
    transition: all .2s ease-in;

    &:hover {
        opacity: .6;
    }
`


export const TabBarAdmin = () => {

    return (
        <Wrapper>
            <List>
                <Item>
                    <IconHome color='#333'/>
                    Home
                </Item>
                <Item>
                    <IconOrders color='#333'/>
                    Pedidos
                </Item>
                <Item>
                    <IconProducts color='#333'/>
                    Produtos
                </Item>
                <Item>
                    <IconNotifications color='#333'/>
                    Notificação
                </Item>
                <Item>
                    <IconProfile color='#333'/>
                    Perfil
                </Item>
            </List>
        </Wrapper>
    )
}