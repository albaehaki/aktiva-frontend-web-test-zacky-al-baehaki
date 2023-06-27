import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {dataRoutes} from './data'

function Root() {
  return (
    <BrowserRouter >
        <Routes >
            {
                dataRoutes.map(item =>
                    (
                        <Route
                            // exact={item.route === "/" ? true : false}
                            {...(item.route === '/' && { exact: true })}
                            key={item.id}
                            path={item.route}
                            element={item.element}
                        />
                    ))
            }
        </Routes>
    </BrowserRouter>
  )
}

export default Root