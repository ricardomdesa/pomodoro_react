import React from "react";
import ButtonT from "../ButtonT";
import Relogio from "./Relogio";
import { CronStyled } from "./styles";

export default function Cronometro(){
    return(
        <CronStyled>
            <p>Escolha um card e inicie o cronometro</p>
            <div>
                <Relogio></Relogio>
            </div>
            <ButtonT texto="Comecar!"></ButtonT>
        </CronStyled>
    )
}