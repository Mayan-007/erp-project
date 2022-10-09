import React from 'react'
import { Col, Row, Form } from "react-bootstrap";
const Invoice = () => {
    return (
        <div>
            <div className="container">
                <h2><center>Generate Invoice</center></h2>
                <div className='card'>
                    <div className="card-body">
                        <form >
                            <div className='row'>
                                <div className='col-md-6'>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column md="2" htmlFor='customer_name'>
                                            Name
                                        </Form.Label>
                                        <Col md="10">
                                            <Form.Control
                                                type='text'
                                                name='customer_name'
                                                
                                                id='customer_name'
                                                placeholder="Name"
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column md="2" htmlFor='customer_phone'>
                                            Phone
                                        </Form.Label>
                                        <Col md="10">
                                            <Form.Control
                                                type="text"
                                                name='customer_phone'
                                                id='customer_phone'
                                                placeholder="Phone number"
                                                
                                            />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column md="2" htmlFor='brand_name'>
                                            Brand
                                        </Form.Label>
                                        <Col md="10">
                                            <Form.Control type="text-area"
                                                name='brand_name'
                                                id='brand_name'
                                                className="form-control"
                                                placeholder='Address'
                                             
                                            />
                                        </Col>
                                    </Form.Group>
                                </div>
                                <div className='col-6'>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column md="2" htmlFor='article_no'>
                                            Article no
                                        </Form.Label>
                                        <Col md="10">
                                            <Form.Control type="text"
                                                name='article_no'
                                                id='article_no'
                                                className="form-control"
                                                placeholder='Article number'
                                                
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" >
                                        <Form.Label column md="2" htmlFor='size'>
                                            Size
                                        </Form.Label>
                                        <Col md="10">
                                            <Form.Control type="text"
                                                name='size'
                                                id='size'
                                                className="form-control"
                                                placeholder='Size'
                                              
                                            />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" >
                                        <Form.Label column md="2" htmlFor='selling_price'>
                                            Selling price
                                        </Form.Label>
                                        <Col md="10">
                                            <Form.Control type="text"
                                                name='selling_price'
                                                id='selling_price'
                                                className="form-control"
                                                placeholder='selling price'
                                              
                                            />
                                        </Col>
                                    </Form.Group>

                                    <div className='mb-1 justify-content-end' style={{ textalign: 'right' }}>
                                        <button type="submit" className="btn btn-primary" style={{ marginLeft: '69%' }}>Add</button>&nbsp;&nbsp;&nbsp;
                                        <button type="reset" className="btn btn-primary"  >Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
                <div className="container">
                <h4 style={{ marginTop: 10 }}><center> Display Product details</center></h4>
                <div className='card'>
                    <div className="card-body" style={{ height: '230px', overflowY: 'scroll' }} >
                        <table className="card-table table">
                            <thead>
                                <tr>
                                    <th scope="col">Article number</th>
                                    <th scope="col">Brand</th>
                                    <th scope="col">Size</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                               
                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer">
                        <div className='container'>
                            <div className="row">
                                <div className="col-3">
                                    <h5>Total Quantity:</h5>
                                </div>
                                <div className="col-3">
                                    <h5>Total Amount: 500 ₹</h5>
                                </div>
                                <div className="col">
                                    <button type="submit" className="btn btn-primary  float-right" style={{ marginLeft: '90%' }}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        
    )
}

export default Invoice
