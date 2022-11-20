import React from "react";
import {
    ButtonStyle
} from "./styles"

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    texto?: string,
    children: React.ReactNode,
    onClick?: (evt: any) => void
}


export default function ButtonT({type, children, onClick }: Props) {
    return (
        <ButtonStyle
            onClick={onClick}
            type={type}
            
        >{children}</ButtonStyle>
    )
}
