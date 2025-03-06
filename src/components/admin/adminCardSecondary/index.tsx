import styled from "styled-components";
import { BaseCard } from "@/components/shared";
import { colors } from "@/_variables.ts";
import IconEdit from "@/assets/svg/icon-edit.svg";
import IconTrash from "@/assets/svg/icon-trash.svg";

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
  color: ${colors.thunderbird};
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

export const AdminCardSecondary = () => {
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
          <Header>
            <ProductName> Pizza de Mussarella </ProductName>
            <Icons>
              <img src={IconEdit} alt="" />
              <img src={IconTrash} alt="" />
            </Icons>
          </Header>
          <Description>
            Lorem ipsum dolor sit amet consectetur. Dignissim etiam ut egestas
            vulputate vitae et. Scelerisque et donec purus feugiat. Eu dignissim
            duis at facilisis donec est.
          </Description>
          <ProductPrice> R$ 134,80 </ProductPrice>
        </Content>
      </Container>
    </BaseCard>
  );
};
