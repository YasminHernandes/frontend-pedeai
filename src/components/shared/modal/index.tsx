import { ReactNode, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../button";
import { colors } from "@/_variables";

interface IModal {
  children?: ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonTextSecondary?: string;
}

const Dialog = styled.dialog`
    width: max-content;
    max-width: 370px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: ${colors.white};
    border-radius: 16px;
    padding: 16px;

    &::backdrop {
        background: ${colors.black50};
        backdrop-filter: blur(3px);
    }
`;
const Title = styled.p`
    font-weight: 500;
    font-size: 16px;
    color: ${colors.masala};
    margin-bottom: 12px;
`;
const Description = styled.p`
    font-weight: 300;
    font-size: 12px;
    color: ${colors.masala};
    text-align: center;
    margin-bottom: 24px;
`;

const Actions = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const Modal = ({
  children,
  title,
  description,
  buttonText,
  buttonTextSecondary,
}: IModal) => {

    const dialog: HTMLDialogElement | null = document.querySelector('#dialog-primary')

    useEffect(() => {
        dialog && dialog.showModal()
    }, [])

  return (
    <Dialog id="dialog-primary">
      <Title> {title} </Title>
      <Description>{description}</Description>

      {children && children}
      
      <Actions>
          <Button isFill radius="50px" padding="12px">
            {buttonText}
          </Button>
          
          {buttonTextSecondary != undefined && (
            <Button radius="50px" padding="12px">
              {buttonTextSecondary}
            </Button>
          )}
      </Actions>
    </Dialog>
  );
};
