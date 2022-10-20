import React from "react";
import ButtonT from "../ButtonT";
import Relogio from "./Relogio";
import { CronStyled, CronTitle } from "./styles";

export default function Cronometro(){
    return(
        <CronStyled>
            <CronTitle>Escolha um card e inicie o cronometro</CronTitle>
            <div>
                <Relogio></Relogio>
            </div>
            <ButtonT texto="Comecar!"></ButtonT>
        </CronStyled>
    )
}