import styled from "styled-components";

export const RelogioStyled = styled.div`
    align-items: center;
    background-color: #7687A1;
    border-radius: 10px;
    box-shadow: 2px 4px 4px #0000009F;
    box-sizing: border-box;
    display: flex;
    font-size: 5rem;
    justify-content: center;
    margin-bottom: 24px;
    padding: 16px 12px;
    width: 100%;

    .relogioDivisao {
        height: 4.2rem;

        @media screen and (min-width:1280px) {
            height: 12.6rem;
        }
}
`

export const NumberStyled = styled.span`
    background-color: #5D677C;
    box-shadow: 2px 2px 4px #2B2B2B inset;
    width: 3rem;
    padding: 8px 4px;
    border-radius: 10px;
    align-items: center;

    @media screen and (min-width:1280px) {
        height: 10.8rem;
        width: 9rem;
    }
`