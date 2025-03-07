import styled from "styled-components";
import { Button } from "@/components";
import { colors } from "@/_variables";
import IconSearch from "@/assets/svg/icon-search.svg";
import { Logo } from "@/components/shared";

const Wrapper = styled.div`
  width: 100%;
  max-width: 390px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 8px;
`;
const Title = styled.p`
  font-weight: 500;
  font-size: 24px;
  color: ${colors.masala};
  margin: 24px 0 8px ;
`;
const Description = styled.p`
  font-weight: 300;
  font-size: 12px;
  color: ${colors.boulder};
  text-align: center;
  margin-bottom: 24px;
`;
const FieldContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 16px;

  img {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
`;
const Field = styled.input`
  width: 100%;
  display: flex;
  align-items: center;
  background: ${colors.alabaster};
  border-radius: 8px;
  border: none;
  padding: 12px 16px;
  transition: all 0.2s ease-in;

  &::placeholder {
    font-size: 14px;
    color: ${colors.mountainMist};
  }

  &:focus-visible {
    outline: none;
    border: 1px solid ${colors.thunderbird};
  }
`;

export const SearchRestaurant = () => {
  return (
    <Wrapper>
      <Logo/>
      <Title>Buscar restaurante</Title>
      <Description>Digite o nome de um restaurante</Description>

      <FieldContainer>
        <Field type="search" placeholder="Buscar" autoFocus />
        <img src={IconSearch}/>
      </FieldContainer>

      <Button isFill radius="50px" padding="12px">
        Buscar
      </Button>
    </Wrapper>
  );
};
