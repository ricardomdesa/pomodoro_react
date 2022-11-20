import React, { useState } from "react";
import { ITasks } from "../../types/iTasks";
import Cronometro from "../Cronometro";
import Form from "../Form";
import List from "../List";


import {
    Container
} from "./styles"

export default function MainContainer() {
    const [tasks, setTasks] = useState<ITasks[] | []>([])
    const [selected, setSelected] = useState<ITasks>()

    const selectTask = (selectedTask: ITasks) => {
        setSelected(selectedTask)
        setTasks(oldT => oldT.map(tasks => ({
            ...tasks,
            selecionado: tasks.id === selectedTask.id ? true : false
        })))
    }

    const finalizarTarefa = () => {
        if(selected){
            setSelected(undefined)
            setTasks(prevTasks => 
                prevTasks.map(task => {
                    if(task.id === selected.id){
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

    return (
        <>
            <Container>
                <Form setTasks={setTasks}></Form>
                <Cronometro 
                  selected={selected}
                  finalizarTarefa={finalizarTarefa} />
                <List
                    tasks={tasks}
                    selectTask={selectTask}
                />
            </Container>
        </>
    )
}
