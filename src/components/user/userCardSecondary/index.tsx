import styled from "styled-components";
import { colors } from "@/_variables.ts";
import IconTrash from "@/assets/svg/icon-trash.svg";
import { BaseCard, Quantity } from '@/components';

const Container = styled.div`
  display: flex;
  gap: 12px;
`;
const Figure = styled.figure`
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProductName = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: ${colors.mineShaft};
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const Description = styled.span`
  font-weight: 300;
  font-size: 10px;
  line-height: 14px;
  color: ${colors.mountainMist};
`;
const PriceQuantity = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ProductPrice = styled.span`
  font-weight: 600;
  font-size: 16px;
  color: ${colors.mineShaft};
`;

export const UserCardSecondary = () => {
  return (
    <BaseCard>
      <Container>
        <Figure>
          <img
            src="https://plus.unsplash.com/premium_photo-1661762555601-47d088a26b50?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </Figure>
        <Content>
          <Header>
            <ProductName> Pizza de Mussarella </ProductName>
            <Icons>
              <img src={IconTrash} alt="" />
            </Icons>
          </Header>
          <Description>
            Lorem ipsum dolor sit amet consectetur. Dignissim etiam ut egestas
            vulputate vitae et. Scelerisque et donec purus feugiat. Eu dignissim
            duis at facilisis donec est.
          </Description>
          <PriceQuantity>
            <ProductPrice> R$ 134,80 </ProductPrice>
            <Quantity iconColor={colors.boulder}> 2 </Quantity>
          </PriceQuantity>
        </Content>
      </Container>
    </BaseCard>
  );
};
