import React from "react";
import { ListStyle } from "./sytles";
import Item from "./Item"
import { ITasks } from "../../types/iTasks";
import { useMainContext } from "../../providers/MainProvider";

export default function TaskList() {
    const { tasks, setTasks, setSelected } = useMainContext()

    const selectTask = (selectedTask: ITasks) => {
        setSelected(selectedTask)
        setTasks((oldT: any[]) => oldT.map(tasks => ({
            ...tasks,
            selecionado: tasks.id === selectedTask.id ? true : false
        })))
    }

    return (
        <ListStyle>
            <h2>Tarefas do dia</h2>
            <ul>
                {tasks.map((item: any, idx: React.Key | null | undefined) => (
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