import styled from "styled-components";
import { BaseCard } from "@/components/shared";
import { colors } from "@/_variables.ts";

const Container = styled.div`
  display: flex;
  gap: 12px;
`;
const Figure = styled.figure`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const ProductQuantity = styled.span`
  font-size: 14px;
  color: ${colors.mineShaft};
`;
const ProductName = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: ${colors.mineShaft};
`;
const DateStatusContainer = styled.div`
    display: flex;
    align-items: center;
`
const ProductDate = styled.span`
  font-size: 11px;
  color: ${colors.stormDust};
  margin-right: 16px;
`;
const ProductStatus = styled.span`
  font-weight: 600;
  font-size: 12px;
  color: ${colors.yellowSea};
`;
const ProductPrice = styled.span`
  font-weight: 500;
  font-size: 12px;
  color: ${colors.thunderbird};
`;

export const UserCardPrimary = () => {
  return (
    <BaseCard hasBorder>
      <Container>
        <Figure>
          <img
            src="https://plus.unsplash.com/premium_photo-1661762555601-47d088a26b50?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </Figure>
        <Content>
          <div>
            <ProductQuantity> x2</ProductQuantity>
            <ProductName> Pizza de Mussarella</ProductName>
          </div>
          <DateStatusContainer>
            <ProductDate> 01 Março 2025 </ProductDate>
            <ProductStatus> Em andamento </ProductStatus>
          </DateStatusContainer>
          <ProductPrice> R$ 134,80 </ProductPrice>
        </Content>
      </Container>
    </BaseCard>
  );
};
