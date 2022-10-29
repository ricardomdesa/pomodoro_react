import React, { useState } from "react";
import { ListStyle } from "./sytles";
import Item from "./Item"
import { ITasks } from "../../types/iTasks";

interface Props {
    tasks: ITasks[],
    selectTask: (selectedTask: ITasks) => void
}

export default function List( { tasks, selectTask }: Props ){
    
    return (
        <ListStyle>
            <h2>Tarefas do dia</h2>
            <ul>
                {tasks.map((item, idx) => (
                    <Item
                        key={idx}
                        selectTask={selectTask}
                        {...item}
                    />
                ))}
            </ul>
        </ListStyle>
    )
}