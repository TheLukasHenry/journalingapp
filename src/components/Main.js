import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Navbarr from './Navbar'
import Journaling1 from './Journaling1'
import Journaling2 from './Journaling2'
import Journaling3 from './Journaling3'

import { Form, FormGroup, Label, Col, Input, FormText, Button } from 'reactstrap'

function Main() {
    return (


        <BrowserRouter>
        <Navbarr/>
            <Routes>
                <Route path="/" element={<Journaling1 />}>

                </Route>
                <Route path="/Journaling2" element={<Journaling2 />}>
 
                </Route>
                <Route path="/Journaling3" element={<Journaling3 />}>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Main