import React, { useState } from "react";
import { ListStyle } from "./sytles";
import Item from "./Item"
import { ITasks } from "../../types/iTasks";

export default function List( { tasks }: {tasks: ITasks[]} ){
    
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