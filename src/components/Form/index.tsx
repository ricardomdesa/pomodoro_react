import React, { useState } from "react";
import ButtonT from "../ButtonT";
import { FormStyle } from "./styles";
import { v4 as uuidv4 } from "uuid";
import { ITasks } from "../../types/iTasks";

interface Props{
    setTasks: React.Dispatch<React.SetStateAction<[] | ITasks[]>>
}

export default function Form({ setTasks }: Props) {
    const [time, setTime] = useState("00:00:00")
    const [task, setTask] = useState("")
    function addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setTasks(oldTasks => [...oldTasks,
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
        setTime("00:00:00")
    }
    return (
        <FormStyle onSubmit={addTask}>
            <div className="inputContainer">
                <label htmlFor="tarefa">
                    Tarefa
                </label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    value={task}
                    onChange={event => setTask(event.target.value)}
                    placeholder="O que voce quer estudar"
                    required
                />
            </div>
            <div className="inputContainer">
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input
                    type="time"
                    name="tempo"
                    id="tempo"
                    value={time}
                    onChange={event => setTime(event.target.value)}
                    step="1"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <ButtonT type="submit">Add</ButtonT>
        </FormStyle>
    )
}