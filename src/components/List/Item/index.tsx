import React from "react";
import { ITasks } from "../../../types/iTasks";
import { ItemStyle } from "./styles";

interface Props extends ITasks{
    selectTask: (selectedTask: ITasks) => void
}

export default function Item({id, tarefa, tempo, selecionado, completado, selectTask}: Props){
    return(
        <ItemStyle 
            itSelecionado={selecionado}
            itCompletado={completado}
            onClick={() => selectTask({id, tarefa, tempo, selecionado, completado})}>
                <h3>{tarefa}</h3>
                <span>{tempo}</span>
        </ItemStyle>
    )
}