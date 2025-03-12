import { Logo, UserCardTertiary, UserTabBar } from "@/components";
import IconNotification from "@/assets/svg/icon-notification.svg";
import IconSearch from "@/assets/svg/icon-search.svg";
import IconLocation from "@/assets/svg/icon-location.svg";
import IconStart from "@/assets/svg/icon-star.svg";
import { colors } from "@/_variables";
import styled from "styled-components";
import { IconCircle } from "@/components/shared/svgComponents/IconCircle";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useCartContext } from "@/hooks/useCartContext";
import { useApi } from "@/hooks/useApi";
import { IRestaurant } from "@/interfaces/restaurant";
import { IProduct } from "@/interfaces/products";

const Wrapper = styled.div`
  width: 100%;
  max-width: 390px;
  margin: 0 auto;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background: ${colors.white};
  padding: 8px;
  z-index: 99;
`;
const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0 16px;
`;
const TextLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const DeliveryTo = styled.div`
  font-size: 10px;
  color: ${colors.masala};
`;
const Location = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: ${colors.mineShaft};
  margin-top: 8px;
`;
const RestaurantLogo = styled.div`
  font-family: Caveat;
  font-size: 32px;
  color: ${colors.mineShaft};
`;
const OpenRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Open = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 500;
  color: ${colors.mantis};
`;
const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
  font-size: 14px;
  color: ${colors.RobRoy};
`;
const Text = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: ${colors.mineShaft};
  margin: 8px 0 16px;

  span {
    color: ${colors.thunderbird70};
    margin-left: 4px;
  }

  &:nth-child(3) {
    margin-bottom: 32px;
  }
`;
const SearchContainer = styled.div`
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
const SearchInput = styled.input`
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
const ListProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: ${colors.alabaster};
  border-radius: 16px 16px 0 0;
  padding: 24px 16px 100px;
  margin: 0 auto;
`;

export const UserHome = () => {
  const { Calculate } = useCartContext()

  const [pageActive, setPageActive] = useState("home");
  const navigate = useNavigate();
  const params = useParams()

  const { data: restaurante } = useApi<IRestaurant>(`http://localhost:3000/public/restaurants/${params.restaurantID}`)
  const { data: products } = useApi<IProduct>(`http://localhost:3000/restaurant/products/${params.restaurantID}`, {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN0YXVyYW50SWQiOjMsImlhdCI6MTc0MTU2Nzk2MSwiZXhwIjoxNzQxNTc1MTYxfQ.XfwBn54mQxjl9NRJEKs2kpbSv-nj6ABsqhvjijdJNp8'
    }
  })

  const username = restaurante?.username?.replace('_', ' ')
  

  console.log("res", restaurante)
  console.log("par", params)
  console.log("prod", products)

  const handleNavigate = (page: string) => {
    setPageActive(page);
    navigate(`${params.restaurantID}/${page === "home" ? "" : page}`);
  };

  useEffect(() => {
    Calculate.totalItems()
  }, [])

  return (
    <Wrapper>
      <Header>
        <Logo />
        <img src={IconNotification} alt="icon notification" />
      </Header>

      <RestaurantInfo>
        <div>
          <TextLocation>
            <img src={IconLocation} alt="" />
            <DeliveryTo>Entregar em</DeliveryTo>
          </TextLocation>
          <Location>Av Principal, Vila Velha - ES</Location>
        </div>

        <RestaurantLogo>{ username }</RestaurantLogo>

        <div>
          <OpenRating>
            <Open>
              <IconCircle color={colors.mantis} />
              Aberto
            </Open>
            <Rating>
              <img src={IconStart} alt="icon star" />
              4.9
            </Rating>
          </OpenRating>

          <Text>
            Tempo de entrega:
            <span>40~60 minutos</span>
          </Text>

          <SearchContainer>
            <SearchInput type="search" placeholder="Buscar" autoFocus />
            <img src={IconSearch} />
          </SearchContainer>
        </div>
      </RestaurantInfo>

      <ListProducts>
        <UserCardTertiary />
        <UserCardTertiary />
        <UserCardTertiary />
        <UserCardTertiary />
        <UserCardTertiary />
        <UserCardTertiary />
        <UserCardTertiary />
        <UserCardTertiary />
        <UserCardTertiary />
        <UserCardTertiary />
        <UserCardTertiary />
      </ListProducts>

      <UserTabBar pageActive={pageActive} onNavigate={handleNavigate} itemCount={Calculate.totalItems()} />
    </Wrapper>
  );
};
