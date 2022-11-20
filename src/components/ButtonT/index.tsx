import React from "react";
import {
    ButtonStyle
} from "./styles"

interface Props {
    type?: "button" | "submit" | "reset" | undefined, 
    texto?: string,
    onClick?: (evt: any) => void
} 


export default function ButtonT({texto, type, onClick}: Props) {
    return (
        <ButtonStyle onClick={onClick} type={type}>{texto}</ButtonStyle>
    )
}
