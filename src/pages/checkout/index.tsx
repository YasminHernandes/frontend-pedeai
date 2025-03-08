import styled from "styled-components";
import { colors } from "@/_variables";
import IconBack from "@/assets/svg/icon-back.svg";
import IconCash from "@/assets/svg/icon-cash.svg";
import IconPix from "@/assets/svg/icon-pix.svg";
import { Button } from "@/components";
import { StatusMessage } from "@/components/shared/StatusMessage";

const Wrapper = styled.div`
  width: 100%;
  max-width: 390px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;
  padding: 0 8px;
`;
const Back = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  background: ${colors.white};
  padding: 24px 8px;
`;

const Title = styled.p`
  width: 25%;
  margin: 0 auto;
  font-weight: 500;
  font-size: 14px;
  color: ${colors.masala};
`;

const CheckoutWrapper = styled.div`
  padding-bottom: 24px;
`;
const CheckoutTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.mineShaft};
  margin-bottom: 16px;
`;
const Card = styled.div`
  border: 1px solid ${colors.alto};
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;

  &:nth-child(3) {
    margin-top: 16px;
  }
`;
const OptionContainer = styled.div`

  p {
    line-height: 12px;
  }
`;
const Option = styled.p`
    font-weight: 600;
    font-size: 14px;
    color: ${colors.masala};
`;
const OptionDescription = styled.span`
    font-size: 12px;
    color: ${colors.boulder};
`;
const AddCard = styled.div`
  border-bottom: 1px solid ${colors.alto};
  padding: 16px 0;
  margin-bottom: 16px;
`;
const TitleCard = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: ${colors.masala};
  margin-bottom: 4px;
`;
const DescriptionCard = styled.span`
  display: block;
  font-size: 12px;
  color: ${colors.boulder};
  margin-bottom: 16px;
`;
const Field = styled.input`
  width: 100%;
  border: 1px solid ${colors.boulder};
  border-radius: 4px;
  font-size: 10px;
  color: ${colors.boulder};
  padding: 8px;

  &:focus-visible {
    border: 1px solid ${colors.thunderbird};
    outline: none;
  }

  &.error {
    border: 1px solid ${colors.thunderbird};
    color: ${colors.thunderbird};

    &::placeholder {
      color: ${colors.thunderbird};
    }
  }
`;

const SummaryTitle = styled.p`
    font-weight: 600;
    font-size: 16px;
    color: ${colors.mineShaft};
    margin: 24px 0;
`

const SummaryInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-bottom: 1px solid ${colors.alto};
    padding-bottom: 16px;
    margin: 16px 0;
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
const Data = styled.p`
    flex-basis: 100%;
    font-size: 14px;
    text-align: right;
    color: ${colors.mountainMist};
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

export const Checkout = () => {
  return (
    <Wrapper>
      <Back>
        <img src={IconBack} alt="" width="42px" height="42px" />
        <Title>Pagamento</Title>
      </Back>

      <CheckoutWrapper>
        <CheckoutTitle>Forma de Pagamento</CheckoutTitle>
        <Card>
          <img src={IconCash} alt="" />
          <Option>
            Dinheiro
          </Option>
        </Card>

        <Card>
          <img src={IconPix} alt="" />
          <OptionContainer>
            <Option>Pague com Pix</Option>
            <OptionDescription>Use o QR Code ou copie e cole o código</OptionDescription>
          </OptionContainer>
        </Card>

        <AddCard>
          <TitleCard>Adicione um cartão</TitleCard>
          <DescriptionCard>É prático, seguro e você não perde nenhum minuto a mais quando seu
            pedido chegar.</DescriptionCard>
          <Button radius="4px" padding="12px">Adicionar novo cartão</Button>
        </AddCard>

        <Field type="text" placeholder="CPF/CNPJ na nota" autoFocus/>

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
        <Button isFill radius="50px" padding="12px">Confirmar Pedido</Button>
      </CheckoutWrapper>

      <StatusMessage title="Pedido realizado com sucesso!" description="Falta pouco! Seu pedido foi enviado restaurante. Você pode acompanhar seu pedidos em" section="Pedidos" textButton="Entendi!"/>
    </Wrapper>
  );
};
