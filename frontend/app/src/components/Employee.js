import React from 'react'
import { Col, Row, Form } from "react-bootstrap";
const Employee = () => {
    return (
        <div>
            {/* <div className="container">
                <h2><center>Employee Details</center></h2>
                <div className='card'>

                    <div className="card-body">
                        <form>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className="mb-1">
                                        <label htmlFor="name" className="form-label">Name </label>
                                        <input type="text" className="form-control"></input>
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="address" className="form-label">Address </label>
                                        <input type="textarea" className="form-control"></input>
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="phone" className="form-label">Phone </label>
                                        <input type="text" className="form-control"></input>
                                    </div>
                                   
                                </div>
                                <div className='col-6'>
                                   
                                    <div className="mb-1">
                                        <label htmlFor="joindate" className="form-label">Join Date</label>
                                        <input type="date" className="form-control"></input>
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="salary" className="form-label">Salary</label>
                                        <input type="number" className="form-control"></input>
                                    </div>
                                    <div className='mb-1'>
                                        <button type="submit" className="btn btn-primary">Submit</button>&nbsp;&nbsp;&nbsp;
                                        <button type="reset" className="btn btn-primary">Cancel</button>
                                    </div>

                                </div>
                            </div>


                        </form>
                    </div>

                </div>
            </div> */}
             <div className="container">
                <h2 style={{ }}><center>Employee details</center></h2>
                <div className='card'>
                    <div className="card-body">
                        <form >
                            <div className='row'>
                                <div className='col-md-6'>
                                  
                                     <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label column md="2"htmlFor='employee_name'>
                                    Name
                                </Form.Label>
                                <Col md="10">
                                    <Form.Control type='text' name='employee_name' id='employee_name'placeholder="Name" 
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column md="2" htmlFor='employee_phone'>
                                    Phone
                                </Form.Label>
                                <Col md="10">
                                    <Form.Control type="text" name='employee_phone' id='employee_phone' placeholder="Phone number" 
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column md="2"htmlFor='employee_address'>
                                    Address
                                </Form.Label>
                                <Col md="10">
                                    <Form.Control  type="text-area"
                                            name='employee_address'
                                            id='employee_address'
                                            className="form-control"
                                            placeholder='Address'
                                             />
                                </Col>
                            </Form.Group>
                                </div>
                                <div className='col-6'>
                                    {/* <div className="mb-1">
                                        <label htmlFor='employee_date' className="form-label">Email id</label>
                                        <input
                                            type="email"
                                            name='employee_date'
                                            id='employee_date'
                                            className="form-control"
                                            value={email}
                                            onChange={handleEmailChange}
                                        />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor='employee_salary' className="form-label">GST number</label>
                                        <input
                                            type="text"
                                            name='employee_salary'
                                            id='employee_salary'
                                            className="form-control"
                                            value={gstno}
                                            onChange={handleGstnoChange}
                                        />
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor='wholesaler_pincode' className="form-label">Pincode</label>
                                        <input
                                            type="text"
                                            name='wholesaler_pincode'
                                            id='wholesaler_pincode'
                                            className="form-control"
                                            value={pincode}
                                            onChange={handlePincodeChange}
                                        />
                                    </div> */}
                                       <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label column md="2" htmlFor='employee_date'>
                                    Date
                                </Form.Label>
                                <Col md="10">
                                    <Form.Control type="date"
                                            name='employee_date'
                                            id='employee_date'
                                            className="form-control"
                                            
                                            />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column md="2"htmlFor='employee_salary'>
                                    Salary
                                </Form.Label>
                                <Col md="10">
                                    <Form.Control    type="text"
                                            name='employee_salary'
                                            id='employee_salary'
                                            className="form-control"
                                            placeholder='Salary'
                                        />
                                </Col>
                            </Form.Group>
                           
                                    <div className='mb-1 justify-content-end' style={{textalign:'right'}}>
                                        <button type="submit" className="btn btn-primary" style={{marginLeft:'69%'}}>Submit</button>&nbsp;&nbsp;&nbsp;
                                        <button type="reset" className="btn btn-primary"  >Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2 style={{ marginTop: 10 }}><center> Display Employees details</center></h2>
                <div className='card' style={{height: '250px', overflowY: 'scroll'}} >
                
                    <table className="card-table table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Salary</th>
                                <th scope="col">joindate</th>
                                <th scope="col">Address</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            
                        </tbody>
                    </table>
                  
                    <div className="card-body">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employee
