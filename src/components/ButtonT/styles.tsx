import styled from "styled-components";

export const ButtonStyle = styled.button`
    align-self: center;
    background-color: #88bcd1;
    border-radius: 5px;
    box-shadow: 2px 4px 4px #0000009F;
    color: #272626;
    cursor: pointer;
    font-size: 1.25rem;
    padding: 16px;
    width: 150px;

    &:active {
        background-color: #7CA6B7;
        box-shadow: 2px 2px 4px #0000009F inset;
  }
`