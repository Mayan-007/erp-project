import React from 'react'
import { Col, Row, Form } from "react-bootstrap";
const Purchase = () => {
    return (
        <div>
           <h2><center>Product Entry</center></h2>
            <div className='container'>
                <div className='card'>
                    <div className='card-body'>
                        <Form>
                            <div className='row'>
                                <div className='col-md-6'>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                    Email
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control plaintext readOnly defaultValue="email@example.com" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="2">
                                    Password
                                </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="password" placeholder="Password" />
                                </Col>
                            </Form.Group>
                                </div>
                                <div className='col-md-6'></div>
                            </div>
                           
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Purchase
