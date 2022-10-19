import React from "react";
import ButtonT from "../ButtonT";
import { FormStyle } from "./styles";

export default function Form(){
    return(
        <FormStyle>
            <div className="inputContainer">
                <label htmlFor="tarefa">
                    Tarefa
                </label>
                <input 
                    type="text" 
                    name="tarefa" 
                    id="tarefa" 
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
                    step="1"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <ButtonT texto="Add"></ButtonT>
        </FormStyle>
    )
}