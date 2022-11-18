import React from "react"
import { prepare_min_sec } from "../../../common/utils/time"
import { NumberStyled, RelogioStyled } from "./styles"

interface Props {
    tempo: number | undefined
}

export default function Relogio({ tempo = 0 }: Props) {

    const { secDezena, secUnidade, minDezena, minUnidade } = prepare_min_sec(tempo)

    return (
        <>
            <RelogioStyled>
                <NumberStyled>{minDezena}</NumberStyled>
                <NumberStyled>{minUnidade}</NumberStyled>
                <span>:</span>
                <NumberStyled>{secDezena}</NumberStyled>
                <NumberStyled>{secUnidade}</NumberStyled>
            </RelogioStyled>
        </>
    )

}