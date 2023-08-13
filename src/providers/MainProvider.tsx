import { ReactNode, useContext, useState } from "react";
import { ITasks } from "../types/iTasks";
import React from "react";

const MainContext = React.createContext<any>({});

export function MainProvider(props: { children: ReactNode }) {
    const [tasks, setTasks] = useState<ITasks[] | []>([])
    const [selected, setSelected] = useState<ITasks>()

    const providerValue = {
        tasks,
        selected,
        setTasks,
        setSelected,
    };

    return (
        <MainContext.Provider value={providerValue}>
            {props.children}
        </MainContext.Provider>
    );
}

export const useMainContext = () => useContext(MainContext);
