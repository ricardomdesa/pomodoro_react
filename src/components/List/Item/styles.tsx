import styled from "styled-components";

interface ItemTypes {
    itSelecionado: boolean,
    itCompletado: boolean
}

export const ItemStyle = styled.li<ItemTypes>`
    background-color: #4D4D4D;
    border-radius: 8px;
    box-shadow: 2px 4px 4px #0000009F;
    padding: 12px;
    margin-bottom: 8px;
    position: relative;
    cursor: pointer;
  
    h3 {
      margin-bottom: 8px;
      word-break: break-all;
    }
  
    span {
      color: #D0D0D0;
    }
  
    @media screen and (min-width:1280px) {
      font-size: 1.8rem;
    }
    
    ${props => props.itSelecionado && `
        background-color: #292929;
        box-shadow: 2px 4px 4px #0000009F inset;
    `}

     ${props => props.itCompletado && `
        background-color: #566F42;
        cursor: auto;
    
        .concluido {
        display: block;
        background-image: url('../../assets/img/check-mark.svg');
        background-repeat: no-repeat;
        background-size: 38px 38px;
        position: absolute;
        top: 50%;
        right: 12px;
        transform: translateY(-50%);
        width: 42px;
        height: 43px;
        }
    `}
  
  .itemCompletado {
    background-color: #566F42;
    cursor: auto;
  
    .concluido {
      display: block;
      background-image: url('../../assets/img/check-mark.svg');
      background-repeat: no-repeat;
      background-size: 38px 38px;
      position: absolute;
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
      width: 42px;
      height: 43px;
    }
  }
    
    `