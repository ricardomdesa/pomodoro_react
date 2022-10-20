import React from "react"
import { RelogioStyled } from "./styles"

export default function Relogio(){
    return(
        <>
        <RelogioStyled>
            <span className="relogioNumero">0</span>
            <span className="relogioNumero">0</span>
            <span>:</span>
            <span className="relogioNumero">0</span>
            <span className="relogioNumero">0</span>
        </RelogioStyled>
        </>
    )
}