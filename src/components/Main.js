import React from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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
        // <>
        //     <Router>
        //         <Navbarr />
        //         <div className='main container-fluid'>
        //             <Routes>
        //                 <Route path='/'>

        //                     <Journaling1 />
        //                 </Route>
        //             </Routes>
        //             {/* <Journaling2 />
        //             <Journaling3 /> */}
        //         </div>
        //     </Router>

        // </>

        <BrowserRouter>
        <Navbarr/>
            <Routes>
                <Route path="/" element={<Journaling1 />}>
                    {/* <Route path="teams" element={<Teams />}>
                   
                    </Route> */}
                </Route>
                <Route path="/Journaling2" element={<Journaling2 />}>
                    {/* <Route path="teams" element={<Teams />}>
                   
                    </Route> */}
                </Route>
                <Route path="/Journaling3" element={<Journaling3 />}>
                    {/* <Route path="teams" element={<Teams />}>
                   
                    </Route> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Main