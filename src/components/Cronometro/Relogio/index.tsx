import React from "react"
import { RelogioStyled } from "./styles"

interface Props {
    tempo: number | undefined
}

export default function Relogio({ tempo = 0 }: Props) {
    const min = Math.floor(tempo / 60)
    const sec = tempo % 60
    const [minDezena, minUnidade] = String(min)
    const [secDezena, secUnidade] = String(sec)
    console.log(minDezena, minUnidade, secDezena, secUnidade)
    return (
        <>
            <RelogioStyled>
                <span className="relogioNumero">{minDezena}</span>
                <span className="relogioNumero">{minUnidade}</span>
                <span>:</span>
                <span className="relogioNumero">{secDezena}</span>
                <span className="relogioNumero">{secUnidade}</span>
            </RelogioStyled>
        </>
    )
}