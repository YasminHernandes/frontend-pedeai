import { colors } from "@/_variables";
import styled from "styled-components";

const Text = styled.h1`
  font-family: Agbalumo;
  font-weight: 400;
  font-size: 56px;
  color: ${colors.thunderbird};
`;

export const Logo = () => {
    return (
        <Text>PedeAí</Text>
    )
}