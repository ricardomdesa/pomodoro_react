import React, { useState } from "react";
import ButtonT from "../ButtonT";
import { FormStyle } from "./styles";

export default function Form({setTasks}: {setTasks: React.Dispatch<React.SetStateAction<{
    tarefa: string;
    tempo: string;
}[]>>}){
    const [time, setTime] = useState("00:00:00")
    const [task, setTask] = useState("")
    function addTask(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        setTasks(oldTasks => [...oldTasks, {tarefa: task, tempo: time}])
    }
    return(
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
            <ButtonT texto="Add" type="submit"></ButtonT>
        </FormStyle>
    )
}