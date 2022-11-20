import React, { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITasks } from "../../types/iTasks";
import ButtonT from "../ButtonT";
import Relogio from "./Relogio";
import { CronStyled, CronTitle } from "./styles";

interface Props {
    selected: ITasks | undefined,
    finalizarTarefa: () => void
}

export default function Cronometro({ selected, finalizarTarefa }: Props) {
    const [tempo, setTempo] = useState<number>(tempoParaSegundos("00:00:00"))

    useEffect(() => {
        if (selected) {
            setTempo(tempoParaSegundos(selected.tempo))
        }
    }, [selected])

    const regressiva = (contador: number = 0) => {
        setTimeout(() => {
            if(contador > 0){
                setTempo(contador - 1)
                return regressiva(contador - 1)
            }
            finalizarTarefa()
        }, 1000)
    }

    return (
        <CronStyled>
            <CronTitle>Escolha um card e inicie o cronometro</CronTitle>
            <div>
                <Relogio tempo={tempo}></Relogio>
            </div>
            <ButtonT onClick={(e: React.FormEvent<HTMLFormElement>) => regressiva(tempo)}>Comecar!</ButtonT>
        </CronStyled>
    )
}