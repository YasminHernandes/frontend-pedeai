import styled from "styled-components";
import { Button } from "@/components";
import { colors } from "@/_variables";
import IconSearch from "@/assets/svg/icon-search.svg";
import { Logo } from "@/components/shared";
import { useEffect, useState } from "react";
import { IRestaurant } from "@/interfaces/restaurant";
import axios from "axios";
import { useNavigate } from "react-router";

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
  margin-bottom: 8px;

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
const Message = styled.p`
  width: 100%;
  font-weight: 500;
  font-size: 10px;
  color: ${colors.thunderbird};
  margin-bottom: 16px;
`;
export const SearchRestaurant = () => {
  const [hasRestaurant, setHasRestaurant] = useState<boolean | null>(null)
  const [valueID, setValueID] = useState(0)
  const [data, setData] = useState<IRestaurant | null>()
  const navigate = useNavigate()
 
  useEffect(()=> {
      axios.get(`http://localhost:3000/public/restaurants/${valueID}`)
      .then(response => response.data)
      .then(data => {
        setHasRestaurant(true)
        setData(data)
      })
      .catch(error => console.log(error))

  },[valueID])

  const search = () => {
      data?.id ? navigate(`/${data?.id}`) : setHasRestaurant(false)
  }

  return (
    <Wrapper>
      <Logo/>
      <Title>Buscar restaurante</Title>
      <Description>Digite o ID de um restaurante</Description>

      <FieldContainer>
        <Field type="text" placeholder="Buscar" autoFocus onChange={(e) => setValueID(Number(e.target.value))} />
        <img src={IconSearch}/>
      </FieldContainer>

      { hasRestaurant == false && <Message> Restaurante não encontrado! </Message>}
     
     <Button isFill radius="50px" padding="12px" onClick={search} >
        Buscar
      </Button>
    </Wrapper>
  );
};
