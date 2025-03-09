import styled from "styled-components"
import { colors } from "@/_variables"
import { IBaseCard } from "@/interfaces/baseCard"

const Wrapper = styled.div<{ $hasBorder?: boolean }>`
    border: ${(props) => props.$hasBorder ? `1px solid ${colors.alto}` : 'none'};
    border-radius: ${(props) => props.$hasBorder ? '8px' : 'none'};
    padding: ${(props) => props.$hasBorder && '8px' };
`

export const BaseCard = ({ children, hasBorder }: IBaseCard) => {

    return (
        <Wrapper $hasBorder={hasBorder}>
            { children }
        </Wrapper>
    )
}