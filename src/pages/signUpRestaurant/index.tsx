import styled from "styled-components";
import { Button } from "@/components";
import { colors } from "@/_variables";
import IconSuccess from '@/assets/svg/icon-success.svg'
import IconError from '@/assets/svg/icon-error.svg'
import { Logo } from "@/components/shared";

const Wrapper = styled.div`
  width: 100%;
  max-width: 390px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;
  padding: 0 8px;
`;
const Title = styled.p`
  font-size: 24px;
  color: ${colors.masala};
`;

const Form = styled.form`
  padding: 0 24px 24px;
  width: 100%;
`;
const FieldContainer = styled.div`
  position: relative;

  img {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`
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
  transition: all .2s ease-in;

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
const TaxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox"})`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`

const CheckboxSpan = styled.span`
  font-size: 12px;
  color: ${colors.masala};
`;

export const SignUpRestaurant = () => {
  return (
    <Wrapper>
      <Logo/>
      <Title>Cadastrar</Title>

      <Form>
        <FieldContainer>
          <Field type="text" placeholder="Username" autoFocus />
          {/* <img src={IconSuccess} alt="" />
          <img src={IconError} alt="" /> */}
        </FieldContainer>
        <Field type="email" placeholder="Email" />
        <Field type="password" placeholder="Senha" />
        <Field type="text" placeholder="Telefone" />
        <Field type="text" placeholder="Endereço" />

        <TaxContainer>
          <input type="checkbox" />
          <CheckboxSpan>Possui taxa de serviço</CheckboxSpan>
        </TaxContainer>
        <Button isFill radius="50px" padding="12px">
          Buscar
        </Button>
      </Form>
    </Wrapper>
  );
};
