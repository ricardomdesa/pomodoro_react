import React from "react";
import Cronometro from "../Cronometro";
import TaskForm from "../TaskForm";
import TaskList from "../TaskList";

import {
    Container
} from "./styles"
import { useMainContext } from "../../providers/MainProvider";

export default function MainContainer() {
const {selected} = useMainContext()
    return (
        <Container>
            <TaskForm />
            {selected && <Cronometro />}
            <TaskList />
        </Container>
    )
}
