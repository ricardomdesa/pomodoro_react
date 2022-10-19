import React from "react";
import Cronometro from "../Cronometro";
import Form from "../Form";
import List from "../List";


import {
    Container
} from "./styles"

export default function MainContainer() {
    return (
        <>
            <Container>
                <Form></Form>
                <Cronometro/>
                <List/>
            </Container>
        </>
    )
}
