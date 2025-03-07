import styled from "styled-components";
import { Button, TabBarAdmin } from "@/components";
import { colors } from "@/_variables";
import IconSuccess from "@/assets/svg/icon-success.svg";
import IconError from "@/assets/svg/icon-error.svg";
import { Logo } from "@/components/shared";
import IconBack from "@/assets/svg/icon-back.svg";

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
const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0;
  `;
const Back = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`
const Title = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: ${colors.masala};
`;
const Form = styled.form`
  width: 100%;
  padding-bottom: 92px;
`;
const FieldContainer = styled.div`
  position: relative;

  img,
  span {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
  span {
    color: ${colors.mountainMist};
  }
`;
const Field = styled.input`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 18px;
  border: 1px solid ${colors.mountainMist};
  border-radius: 8px;
  margin-bottom: 16px;
  background-color: transparent;
  transition: all 0.2s ease-in;

  &:nth-child(5) {
    margin-bottom: 24px;
  }
  &::placeholder {
    font-size: 14px;
    color: ${colors.mountainMist};
  }
  &:focus-visible {
    outline: none;
    border: 1px solid ${colors.thunderbird};
  }
`;
const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  border: 1px solid ${colors.mountainMist};
  border-radius: 8px;
  padding: 16px 18px;
  margin-bottom: 16px;
  resize: none;

  &:focus-visible {
    outline: none;
    border: 1px solid ${colors.thunderbird};
  }
`;
const ContainerSuccess = styled.div`
  width: 100%;
  flex-basis: 100%;
  align-content: center;
`;
const TitleSuccess = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: ${colors.mineShaft};
  text-align: center;
  margin-bottom: 12px;
`;
const Description = styled.p`
  font-weight: 300;
  font-size: 13px;
  color: ${colors.boulder};
  text-align: center;
  margin-bottom: 24px;
`;

export const AdminRegisterProducts = () => {
  return (
    <Wrapper>
      <Header>
        <Logo />
        <Back>
          <img src={IconBack} alt="" width="42px" height="42px" />
          <Title>Adicionar novo produto</Title>
        </Back>
      </Header>

      <Form>
        <FieldContainer>
          <Field
            type="text"
            placeholder="Nome do Produto*"
            required
            autoFocus
          />
          {/* <img src={IconSuccess} alt="" /> */}
          {/* <img src={IconError} alt="" /> */}
        </FieldContainer>
        <FieldContainer>
          <Field type="number" placeholder="Valor*" />
          <span>R$</span>
        </FieldContainer>
        <Textarea placeholder="Descrição" />
        <Field type="string" placeholder="Url da Imagem" />

        <Button isFill radius="50px" padding="12px">
          Cadastrar novo produto
        </Button>
      </Form>

        {/* <ContainerSuccess>
        <TitleSuccess>Produto cadastrado com sucesso!</TitleSuccess>
        <Description>
          Você cadastrou um novo produto! Gerencie seus produtos em{" "}
          <strong>Produtos</strong>
        </Description>
        <Button isFill radius="50px" padding="12px">
          Entendi!
        </Button>
      </ContainerSuccess> */}

      <TabBarAdmin />
    </Wrapper>
  );
};
