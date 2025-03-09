import styled from "styled-components";
import { BaseCard } from "@/components/shared";
import { colors } from "@/_variables.ts";
import IconEdit from "@/assets/svg/icon-edit.svg";
import IconTrash from "@/assets/svg/icon-trash.svg";
import { AdminCardPrimaryProps } from "@/interfaces/adminCardPrimary";

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const Container = styled.div`
  display: flex;
  gap: 12px;
`;
const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: ${colors.mineShaft};
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
`;
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

export const AdminCardPrimary = ({
  phoneNumber,
  productImage,
  productQuantity,
  productName,
  orderDate,
  orderStatus,
  productPrice,
}: AdminCardPrimaryProps) => {
  return (
    <BaseCard hasBorder>
      <div>
        <Header>
          <Text>{phoneNumber}</Text>
          <Icons>
            <img src={IconEdit} alt="Editar" />
            <img src={IconTrash} alt="Excluir" />
          </Icons>
        </Header>
        <Container>
          <Figure>
            <img src={productImage} alt={productName} />
          </Figure>
          <Content>
            <div>
              <ProductQuantity> x{productQuantity}</ProductQuantity>
              <ProductName> {productName}</ProductName>
            </div>
            <DateStatusContainer>
              <ProductDate>{orderDate}</ProductDate>
              <ProductStatus>{orderStatus}</ProductStatus>
            </DateStatusContainer>
            <ProductPrice>{productPrice}</ProductPrice>
          </Content>
        </Container>
      </div>
    </BaseCard>
  );
};
