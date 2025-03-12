import styled from "styled-components";
import { colors } from "@/_variables.ts";
import { BaseCard, Quantity } from "@/components";
import IconMore from "@/assets/svg/icon-add-more.svg";
import { useState } from "react";
import { useCartContext } from "@/hooks/useCartContext";

const Container = styled.div`
  display: flex;
  background: ${colors.white};
  border-radius: 16px;
`;
const Figure = styled.figure`
  width: 118px;
  height: 118px;
  flex-shrink: 0;
  border-radius: 16px;
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
  padding: 12px;
`;
const ProductName = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: ${colors.mineShaft};
`;
const Description = styled.span`
  font-weight: 300;
  font-size: 10px;
  line-height: 14px;
  color: ${colors.mountainMist};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
`;
const PriceQuantity = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProductPrice = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: ${colors.stormDust};
`;

export const UserCardTertiary = () => {
  const [addToCart, setAddToCart] = useState<boolean>(false);
  const { count, Count} = useCartContext()

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
          <ProductName> Pizza de Mussarella </ProductName>
          <Description>
            Lorem ipsum dolor sit amet consectetur. Dignissim etiam ut egestas
            vulputate vitae et. Scelerisque et donec purus feugiat. Eu dignissim
            duis at facilisis donec est.
          </Description>
          <PriceQuantity>
            <ProductPrice> R$ 134,80 </ProductPrice>
            {addToCart ? <Quantity iconColor={colors.boulder} onDecrease={Count.decreaseCount(0)} onIncrease={Count.increaseCount(0)}>{count}</Quantity>
            : <img src={IconMore} alt="Icon Add More" onClick={() => setAddToCart(true)}/>
            }
          </PriceQuantity>
        </Content>
      </Container>
    </BaseCard>
  );
};
