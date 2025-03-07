import styled from "styled-components";
import { Modal } from "../modal";
import { colors } from "@/_variables";

const Form = styled.form`
  width: 100%;
`;
const FieldContainer = styled.div`
  &:first-child {
    margin-bottom: 12px;
  }
  &:last-child {
    margin-bottom: 24px;
  }
`;

const Field = styled.input`
  width: 100%;
  border: 1px solid ${colors.boulder};
  border-radius: 4px;
  font-size: 10px;
  color: ${colors.boulder};
  text-align: center;
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

const Message = styled.p`
  font-weight: 300;
  font-size: 10px;
  color: ${colors.thunderbird};
  margin-top: 8px;
`;

export const ModalSecondary = () => {

  return (
    <Modal
      title="Informações"
      description="Insira suas informações abaixo para prosseguir com seu pedido."
      buttonText="Enviar dados"
      buttonTextSecondary="Cancelar"
    >
      <Form>
        <FieldContainer>
          <Field type="text" placeholder="Nome" autoFocus/>
          {/* <Message> Campo Obrigatório! </Message> */}
        </FieldContainer>
        <FieldContainer>
          <Field type="string" placeholder="Celular" />
          {/* <Message> Campo Obrigatório! </Message> */}
        </FieldContainer>
      </Form>
    </Modal>
  );
};
