import React, { useState } from "react";
import { ITasks } from "../../types/iTasks";
import Cronometro from "../Cronometro";
import Form from "../Form";
import List from "../List";


import {
    Container
} from "./styles"

export default function MainContainer() {
    const [tasks, setTasks] = useState<ITasks[] | []>([])
    return (
        <>
            <Container>
                <Form setTasks={setTasks}></Form>
                <Cronometro/>
                <List tasks={tasks}/>
            </Container>
        </>
    )
}
