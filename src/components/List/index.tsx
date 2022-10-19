import React from "react";
import { ListStyle } from "./sytles";
import Item from "./Item"

export default function List(){
    const tasks = [{
        tarefa: "React",
        tempo: "00:25:00"
    },
    {
        tarefa: "Typescript",
        tempo: "00:30:00"
    }]
    return (
        <ListStyle>
            <h2>Tarefas do dia</h2>
            <ul>
                {tasks.map((item, idx) => (
                    <Item
                        key={idx}
                        {...item}
                    />
                ))}
            </ul>
        </ListStyle>
    )
}