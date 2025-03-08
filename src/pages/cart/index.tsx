import { colors } from "@/_variables";
import styled from "styled-components";
import IconBack from "@/assets/svg/icon-back.svg";
import { UserCardSecondary, UserTabBar } from "@/components";
import { Button } from '../../components/shared/button/index';

const Wrapper = styled.div`
  width: 100%;
  max-width: 390px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 8px;
`;

const Back = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: sticky;
  top: 0;
  left:0;
  background: ${colors.white};
  padding: 24px 0;
`;
const Title = styled.p`
  width: 25%;
  margin: 0 auto;
  font-weight: 500;
  font-size: 14px;
  color: ${colors.masala};
`;

const OrderContainer = styled.div`
    border-bottom: 1px solid ${colors.alto};
    padding-bottom: 16px;
`
const OrderTitle = styled.p`
    font-weight: 600;
    font-size: 16px;
    color: ${colors.mineShaft};
    margin-bottom: 16px;
`
const OrderInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`
const Item = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
`
const Text = styled.p`
    width: 100%;
    font-size: 14px;
    color: ${colors.mineShaft};
`
const Data = styled.p`
    flex-basis: 100%;
    font-size: 14px;
    text-align: right;
    color: ${colors.mountainMist};
`

const ProductContainer = styled.div`
    margin-top: 16px;
`
const SummaryContainer = styled.div`
    height: 100%;
    align-content: flex-end;
    padding-bottom: 100px;
`

const SummaryTitle = styled.p`
    font-weight: 600;
    font-size: 16px;
    color: ${colors.mineShaft};
    margin-bottom: 24px;
`
const SummaryInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-bottom: 1px solid ${colors.alto};
    padding-bottom: 16px;
    margin-bottom: 16px;
`
const SubItem = styled.div`
    display: flex;
    justify-content: space-between;
`
const SubText = styled.p`
    width: 100%;
    font-size: 14px;
    color: ${colors.mountainMist};
`

const Total = styled.div`
    display: flex;
`

const TotalText = styled(SubText)`
    font-weight: 600;
    color: ${colors.mineShaft};
`
const TotalValue = styled(Data)`
    font-weight: 700;
    font-size: 18px;
    color: ${colors.mineShaft};
`


export const Cart = () => {
  return (
    <Wrapper>
      <Back>
        <img src={IconBack} alt="" width="42px" height="42px" />
        <Title>Carrinho</Title>
      </Back>
      
      <OrderContainer>
        <OrderTitle>Informações do Pedido</OrderTitle>
         <OrderInfo>
            <Item>
                <Text>Comprador</Text>
                <Data>Maria da Silva</Data>
            </Item>
            <Item>
                <Text>Telefone</Text>
                <Data>(11) 9 0000-0000</Data>
            </Item>
            <Item>
                <Text>Endereço de entrega</Text>
                <Data>Av. Principal, Vila Velha - Vitória</Data>
            </Item>
         </OrderInfo>
      </OrderContainer>

      <ProductContainer>
            <UserCardSecondary/>
      </ProductContainer>

      <SummaryContainer>
        <SummaryTitle>Resumo</SummaryTitle>

        <SummaryInfo>
            <SubItem>
                <SubText>Subtotal</SubText>
                <Data>R$ 134,80</Data>
            </SubItem>

            <SubItem>
                <SubText>Taxa de Serviço</SubText>
                <Data>R$ 13,48</Data>
            </SubItem>
            
            <SubItem>
                <SubText>Taxa de Entrega</SubText>
                <Data>R$ 5,00</Data>
            </SubItem>
            
            <Total>
                <TotalText>Total</TotalText>
                <TotalValue>R$ 153,28</TotalValue>
            </Total>
        </SummaryInfo>
        <Button isFill radius="50px" padding="12px">Escolher forma de pagamento</Button>
      </SummaryContainer>
      <UserTabBar/>
    </Wrapper>
  );
};
