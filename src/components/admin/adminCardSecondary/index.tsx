import styled from "styled-components";
import { BaseCard } from "@/components/shared";
import { colors } from "@/_variables.ts";
import IconEdit from "@/assets/svg/icon-edit.svg";
import IconTrash from "@/assets/svg/icon-trash.svg";
import { AdminCardSecondaryProps } from "@/interfaces/adminCardSecondary";

const Container = styled.div`
  display: flex;
  gap: 12px;
`;

const Figure = styled.figure`
  width: 64px;
  height: 64px;
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

const ProductPrice = styled.span`
  font-weight: 500;
  font-size: 12px;
  color: ${colors.mineShaft};
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Description = styled.p`
  font-weight: 500;
  font-size: 9px;
  line-height: 14px;
  color: ${colors.mountainMist};
`;

export const AdminCardSecondary = ({
  productImage,
  productName,
  productDescription,
  productPrice,
}: AdminCardSecondaryProps) => {
  return (
    <BaseCard>
      <Container>
        <Figure>
          <img src={productImage} alt={productName} />
        </Figure>
        <Content>
          <Header>
            <ProductName>{productName}</ProductName>
            <Icons>
              <img src={IconEdit} alt="Editar" />
              <img src={IconTrash} alt="Excluir" />
            </Icons>
          </Header>
          <Description>{productDescription}</Description>
          <ProductPrice>{productPrice}</ProductPrice>
        </Content>
      </Container>
    </BaseCard>
  );
};
