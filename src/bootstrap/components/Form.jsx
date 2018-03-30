import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'



const MainForm = () => (
    <div style={{ width: 600 + 'px'}}>
            <Form >
                <FormGroup>
                    <Label for="exampleEmail">Email:</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Your email" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="Enter Your Password" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Select an Option</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                        <option>Option 5</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input type="textarea" name="text" id="exampleText" placeholder="(Optional)" />
                </FormGroup>
                <FormGroup>
                    <Button>Submit</Button>
                </FormGroup>
            </Form>
    </div>
);


export default MainForm;