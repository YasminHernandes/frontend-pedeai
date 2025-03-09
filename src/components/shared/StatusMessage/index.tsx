import { colors } from "@/_variables";
import styled from "styled-components";
import { Button } from "../button";
import { IStatusMessageProps } from "@/interfaces/statusMessage";

const ContainerSuccess = styled.div`
  width: 100%;
  max-width: 390px;
  flex-basis: 100%;
  align-content: center;
  margin: 0 auto;
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

  strong {
    margin-right: 4px;
  }
`;

export const StatusMessage = ({title, description, section, textButton}: IStatusMessageProps) => {
  return (
    <ContainerSuccess>
      <TitleSuccess>{title}</TitleSuccess>
      <Description>
        {description} 
        { section && <strong>{section}</strong> }
      </Description>
      <Button isFill radius="50px" padding="12px">
        {textButton}
      </Button>
    </ContainerSuccess>
  );
};
