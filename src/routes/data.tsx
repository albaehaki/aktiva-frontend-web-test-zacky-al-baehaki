import React, {ReactNode} from 'react';
import { Home, Detail } from "../pages";

export type dataRoutesType = {
    id: number
    element: ReactNode
    route: string
}

export const dataRoutes: dataRoutesType[] = [
    {
        id: 0,
        element: <Home />,
        route: "/",
    },
    {
        id: 1,
        element: <Detail />,
        route: "/detail",
    },
]