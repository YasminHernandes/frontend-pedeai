import { StatusMessage } from "@/components/shared/StatusMessage"
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`

export const NotFound = () => {
    return (
        <Wrapper>
        <StatusMessage title="Página não encontrada" description="Desculpe, não encontramos a página que você está procurando." textButton="Voltar para a página inicial" />
        </Wrapper>
    )
}