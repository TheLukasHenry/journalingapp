import React from 'react'
import { Form, FormGroup, Label, Input,  Button } from 'reactstrap'

// destructuring props attemt
// export default function Journaling2({ questions, id }) {
export default function Journaling2(props) {

    const {id,
     question1,
    question2,
    question3,
    question4,
question5
} = props

    console.log({props});

    return (
        <div className="container-fluid">
            <h1 className="text-center">Journaling2</h1>
            <h2 className="text-center">Best place to start ↓</h2>
        <p>{id}</p>
        <p>{question1}</p>



        </div>
    )
}
