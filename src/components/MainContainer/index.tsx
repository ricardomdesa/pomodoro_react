import React from "react";
import Cronometro from "../Cronometro";
import TaskForm from "../TaskForm";
import TaskList from "../TaskList";

import {
    Container
} from "./styles"

export default function MainContainer() {

    return (
        <Container>
            <TaskForm></TaskForm>
            <Cronometro />
            <TaskList />
        </Container>
    )
}
