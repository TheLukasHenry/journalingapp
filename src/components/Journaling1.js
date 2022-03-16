import React from 'react'
import { Form, FormGroup, Label, Col, Input, FormText, Button } from 'reactstrap'

export default function Journaling1() {
    return (

        <div className="container-fluid">
            <h1 className="text-center">Welcome to your guided journaling app!</h1>
            <h2 className="text-center">Best place to start ↓</h2>

            <Form inline>
                <FormGroup floating>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Text"
                        type="textarea"
                    />
                    <Label for="exampleEmail" className="text-dark h5" >
                        What kind of day are you having, and why?
                    </Label>
                </FormGroup>
                {' '}
                <FormGroup floating>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Text"
                        type="textarea"
                    />
                    <Label for="exampleEmail" className="text-dark h5" >
                        List 5 things you are  most grateful for…
                    </Label>
                </FormGroup>
                {' '}
                <FormGroup floating>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Text"
                        type="textarea"
                    />
                    <Label for="exampleEmail" className="text-dark h5" >
                        How would you feel if you lost the things you are grateful for?
                    </Label>
                </FormGroup>
                {' '}
                <FormGroup floating>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Text"
                        type="textarea"
                    />
                    <Label for="exampleEmail" className="text-dark h5" >
                        Write a letter with advice to 5yo yourself…
                    </Label>
                </FormGroup>
                {' '}
                <FormGroup floating>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Text"
                        type="textarea"
                    />
                    <Label for="exampleEmail" className="text-dark h5" >
                        What a perfect day would look like to you?
                    </Label>
                </FormGroup>
                {' '}

                <Button>
                    Submit
                </Button>
            </Form>

        </div>


    )
}
