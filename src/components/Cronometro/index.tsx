import React, { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import ButtonT from "../ButtonT";
import Relogio from "./Relogio";
import { CronStyled, CronTitle } from "./styles";
import { useMainContext } from "../../providers/MainProvider";

export default function Cronometro() {
    const { selected, setSelected, setTasks } = useMainContext()
    const [tempo, setTempo] = useState<number>(tempoParaSegundos("00:00:00"))


    const finalizarTarefa = () => {
        if (selected) {
            setSelected(undefined)
            setTasks((prevTasks: { id: any; }[]) =>
                prevTasks.map((task: { id: any; }) => {
                    if (task.id === selected.id) {
                        return {
                            ...task,
                            selecionado: false,
                            completado: true
                        }
                    }
                    return task
                })
            )
        }
    }

    useEffect(() => {
        if (selected) {
            setTempo(tempoParaSegundos(selected.tempo))
        }
    }, [selected])

    const regressiva = (contador: number = 0) => {
        setTimeout(() => {
            if (contador > 0 && tempo > 0) {
                setTempo(contador - 1)
                return regressiva(contador - 1)
            }
            finalizarTarefa()
        }, 1000)
    }
    const finishTask = () => {
        setTempo(0)
        regressiva(0)
    }

    return (
        <CronStyled>
            <CronTitle>Escolha um card e inicie o cronometro</CronTitle>
            <div>
                <Relogio tempo={tempo}></Relogio>
            </div>
            <ButtonT onClick={(e: React.FormEvent<HTMLFormElement>) => regressiva(tempo)}>Comecar!</ButtonT>
            <ButtonT onClick={(e: React.FormEvent<HTMLFormElement>) => finishTask()}>Finalizar!</ButtonT>
        </CronStyled>
    )
}