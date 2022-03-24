import React, { useContext } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { JournalContext  } from './Main'


// export default function Journaling1({journals}) {
export default function Journaling1({ questions, id }) {

    console.log('questions: ', questions)
    console.log('id: ', id)


    // console.log('part of object: ' , journals[0].id)
    // console.log('part of object: ' , journals[0].journaling1questions[0].question3)

    const { handleJournalChange } = useContext(JournalContext)

    function handleChange(changes) {
        handleJournalChange(id, { ...questions, ...changes })
    }

    return (

        <div className="container-fluid">
            <h1 className="text-center">Welcome to your guided journaling app!</h1>
            <h2 className="text-center">Best place to start ↓</h2>

            <Form inline>
                <FormGroup floating>
                    <Input
                        id="journaling1question1"
                        name="journaling1question1"
                        value={questions.question1}

                        onChange={e => handleChange({question1: e.target.value})}
                        placeholder="Text"
                        type="textarea"
                    />
                    <Label for="journaling1question1" className="text-dark h5" >
                        What kind of day are you having, and why?
                    </Label>
                </FormGroup>
                {' '}

                <FormGroup floating>
                    <Input
                        id="journaling1question2"
                        name="journaling1question2"
                        value={questions.question2}

                        onChange={e => handleChange({question2: e.target.value})}
                        placeholder="Text"
                        type="textarea"
                    />
                    <Label for="journaling1question2" className="text-dark h5" >
                    List 5 things you are  most grateful for…
                    </Label>
                </FormGroup>
                {' '}

                <FormGroup floating>
                    <Input
                        id="journaling1question3"
                        name="journaling1question3"
                        value={questions.question3}

                        onChange={e => handleChange({question3: e.target.value})}
                        placeholder="Text"
                        type="textarea"
                    />
                    <Label for="journaling1question3" className="text-dark h5" >
                    How would you feel if you lost the things you are grateful for?
                    </Label>
                </FormGroup>
                {' '}

                <FormGroup floating>
                    <Input
                        id="journaling1question4"
                        name="journaling1question4"
                        value={questions.question4}

                        onChange={e => handleChange({question4: e.target.value})}
                        placeholder="Text"
                        type="textarea"
                    />
                    <Label for="journaling1question4" className="text-dark h5" >
                    Write a letter with advice to 5yo yourself…
                    </Label>
                </FormGroup>
                {' '}

                <FormGroup floating>
                    <Input
                        id="journaling1question5"
                        name="journaling1question5"
                        value={questions.question5}

                        onChange={e => handleChange({question5: e.target.value})}
                        placeholder="Text"
                        type="textarea"
                    />
                    <Label for="journaling1question5" className="text-dark h5" >
                    What a perfect day would look like to you?
                    </Label>
                </FormGroup>
                {' '}







                <Button>
                    Submit
                </Button>
            </Form>
            <p>Answer for question1: {questions.question1}</p>
            <p>Answer for question2: {questions.question2}</p>
            <p>Answer for question3: {questions.question3}</p>
            <p>Answer for question4: {questions.question4}</p>
            <p>Answer for question5: {questions.question5}</p>

        </div>


    )
}
