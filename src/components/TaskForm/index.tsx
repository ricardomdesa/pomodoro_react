import React, { useState } from "react";
import ButtonT from "../ButtonT";
import { FormStyle } from "./styles";
import { v4 as uuidv4 } from "uuid";
import { useMainContext } from "../../providers/MainProvider";

export default function TaskForm() {
    const {setTasks} = useMainContext()

    const [time, setTime] = useState(0)
    const [task, setTask] = useState("")
    function addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setTasks((oldTasks: any) => [...oldTasks,
        {
            id: uuidv4(),
            tarefa: task,
            tempo: time,
            selecionado: false,
            completado: false
        }

        ])
        // Clear fields
        setTask("")
        setTime(0)
    }
    return (
        <FormStyle onSubmit={addTask}>
            <div className="inputContainer">
                <label htmlFor="tarefa">
                    Tarefa
                </label>
                <input
                    style={{width: "60vw"}}
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    value={task}
                    onChange={event => setTask(event.target.value)}
                    placeholder="O que voce quer estudar"
                    required
                />
            </div>
            <div className="inputContainer" >
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input
                style={{width: "20vw"}}
                type="number"
                name="tempo"
                id="tempo"
                value={time}
                onChange={event => setTime(parseInt(event.target.value))}
                step="1"
                required
                />
            </div>
            <ButtonT type="submit">Add</ButtonT>
        </FormStyle>
    )
}