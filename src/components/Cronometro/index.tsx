import React, { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITasks } from "../../types/iTasks";
import ButtonT from "../ButtonT";
import Relogio from "./Relogio";
import { CronStyled, CronTitle } from "./styles";

interface Props {
    selected: ITasks | undefined
}

export default function Cronometro({ selected }: Props) {
    const [tempo, setTempo] = useState<number>(tempoParaSegundos("00:00:00"))

    useEffect(() => {
        if (selected) {
            setTempo(tempoParaSegundos(selected.tempo))
        }
    }, [selected])

    return (
        <CronStyled>
            <CronTitle>Escolha um card e inicie o cronometro</CronTitle>
            <div>
                <Relogio tempo={tempo}></Relogio>
            </div>
            <ButtonT texto="Comecar!"></ButtonT>
        </CronStyled>
    )
}