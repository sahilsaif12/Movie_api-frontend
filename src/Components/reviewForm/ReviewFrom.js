import React from 'react'
import { Form } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
export const ReviewFrom = ({labelText,handleSubmit,revText}) => {
  return (
<Form>
        <Form.Group className="mb-3 mt-5" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{labelText}</Form.Label>
            <Form.Control ref={revText} as="textarea" rows={3}  />
        </Form.Group>
        <div style={{"direction":"rtl"}}>

        <Button  variant="outline-info" onClick={handleSubmit}>Submit</Button>
        </div>
    </Form>    
     )
}
