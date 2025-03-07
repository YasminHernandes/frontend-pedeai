import styled from "styled-components";
import { TabBarAdmin, AdminCardPrimary, AdminCardSecondary, UserCardPrimary, UserCardSecondary, UserCardTertiary, Button, UserTabBar } from "@/components";
import { Logo, ModalSecondary } from "./components/shared";

const Div = styled.div`
  width: 390px;
  padding: 16px 8px;
  margin: 0 auto;
`;

export const App = () => {
  return (
    <>
      <Div>
        <Logo/>
        Admin
        <br />
        <br />
        <AdminCardPrimary />
        <br />
        <AdminCardSecondary />
        <br />
        <Button isFill radius="50px" padding="12px">
          Buscar
        </Button>
        <br/>
        <Button radius="4px" padding="8px">
          Cancelar
        </Button>
        
        <br/>
        <TabBarAdmin />
        <br />
        <br />
        User
        <br />
        <br />
        <UserCardPrimary/>
        <br/>
        <UserCardSecondary/>
        <br/>
        <UserCardTertiary/>
        <br/>
        <UserTabBar/>
        {/* <ModalSecondary/> */}
        <br/>
      </Div>
    </>
  );
};