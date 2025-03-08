import styled from "styled-components";
import IconBack from "@/assets/svg/icon-back.svg";
import { colors } from "@/_variables";
import { Button, Quantity } from "@/components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 390px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;
`;

const Back = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  left:0;
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
const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
`;
const Text = styled.div`
  font-size: 12px;
  color: ${colors.masala};
  margin-bottom: 4px;
`;
const ProductName = styled.div`
  font-weight: 500;
  font-size: 24px;
  color: ${colors.thunderbird};
`;
const ProductWrapper = styled.div`
  width: 100%;
  max-width: 390px;
  background: ${colors.alabaster};
  border-radius: 44px 44px 0 0;
`;
const Figure = styled.figure`
  width: 100%;
  height: 226px;
  border-radius: 44px 44px 0 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const DescriptionContainer = styled.div`
    padding: 16px;
`;
const DescriptionTitle = styled.p`
    font-weight: 500;
    font-size: 18px;
    color: ${colors.mineShaft};
    margin-bottom: 16px;
`;
const DescriptionText = styled.p`
    font-weight: 300;
    font-size: 14px;
    color: ${colors.stormDust};
    line-height: 22px;
`;
const PriceWrapper = styled.div`
    padding: 16px;
`
const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
`
const PriceText = styled.p`
    font-size: 14px;
    color: ${colors.mineShaft};
`
const PriceValue = styled.p`
    font-weight: 600;
    font-size: 18px;
    color: ${colors.mineShaft};
`

export const ProductDetails = () => {
  return (
    <Wrapper>
      <Back>
        <img src={IconBack} alt="" width="42px" height="42px" />
        <Title>Detalhes</Title>
      </Back>

      <ProductInfo>
        <div>
          <Text>Seu Pedido</Text>
          <ProductName>Pizza de Mussarella</ProductName>
        </div>
        <div>
          <Text>Quantidade</Text>
          <Quantity iconColor={colors.boulder}>2</Quantity>
        </div>
      </ProductInfo>

      <ProductWrapper>
        <Figure>
          <img
            src="https://plus.unsplash.com/premium_photo-1661762555601-47d088a26b50?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </Figure>
        <DescriptionContainer>
          <DescriptionTitle>Descrição</DescriptionTitle>
          <DescriptionText>Lorem ipsum dolor sit amet consectetur. Proin eget pulvinar risus nisi nibh amet est dignissim diam. Suscipit dui nisl faucibus odio.</DescriptionText>
        </DescriptionContainer>

        <PriceWrapper>
             <PriceContainer>
                    <PriceText>Preço</PriceText>
                    <PriceValue>R$ 67,40</PriceValue>
             </PriceContainer>
             <PriceContainer>
                    <PriceText>Preço Total</PriceText>
                    <PriceValue>R$ 134,80</PriceValue>
             </PriceContainer>
             <Button isFill hasIcon radius="50px" padding="12px">Adicionar ao carrinho</Button>
        </PriceWrapper>
      </ProductWrapper>
    </Wrapper>
  );
};
