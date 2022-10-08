import React from 'react'
import { Col, Row, Form } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';

// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import { appBarClasses } from '@mui/material';
const styles = {
    box: {
        marginTop: '3%',
    }
    
}
const Purchase = () => {
    return (
        <div>
            <h2><center>Product Entry</center></h2>
            <div className='container'>
                <Form>
                    <div className='card'>
                        <div className='card-body'>

                            <div className='row'>
                                <div className='col-md-4'>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="6">
                                            Wholesaler name
                                        </Form.Label>
                                        <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{width:'80%'}}>
        Select
      </Dropdown.Toggle>

      <Dropdown.Menu style={{width:'80%'}}>
        <Dropdown.Item href="#/action-2">Shail</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Dhruv</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Kalpit</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                                        {/* <select >
                                            <option value="shail">shail</option>
                                            <option value="mayan">mayan</option>
                                            <option value="dhruv">Dhruv</option>
                                        </select> */}


                                    </Form.Group>
                                </div>
                                <div className='col-md-8 '>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                        <Form.Group as={Row}>
                                                <Form.Label >
                                                    Mode
                                                    </Form.Label>
                                            {/* <FormLabel id="demo-row-radio-buttons-group-label">Mode</FormLabel> */}
                                            {/* <RadioGroup
                                                row
                                                aria-labelledby="demo-row-radio-buttons-group-label"
                                                name="row-radio-buttons-group"
                                            >
                                                <FormControlLabel value="Cash" control={<Radio />} label="Cash" />
                                                <FormControlLabel value="Cheque" control={<Radio />} label="Cheque" />

                                            </RadioGroup> */}
                                            {[ 'radio'].map((type) => (
                                                <div key={`inline-${type}`} className="mb-3">
                                                    <Form.Check
                                                        inline
                                                        label="Cash"
                                                        name="mode"
                                                        type={type}
                                                        id={`inline-${type}-Cash`}
                                                    />
                                                    <Form.Check
                                                        inline
                                                        label="Cheque"
                                                        name="mode"
                                                        type={type}
                                                        id={`inline-${type}-Cheque`}
                                                    />
                                                   
                                                </div>
                                            ))}
                                        </Form.Group>
                                        </div>
                                        <div className='col-md-8'>
                                            <Form.Group as={Row}>
                                                <Form.Label >
                                                    Cheque number
                                                </Form.Label>
                                                <Col md="9">
                                                    <Form.Control type='text' />
                                                </Col>


                                            </Form.Group>
                                        </div>
                                    </div>

                                </div>
                                {/* <div className='col-md-3'> */}

                                {/* </div> */}
                            </div>


                        </div>
                    </div>
                    <div className='box' style={styles.box}>
                        <div className='card' >
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <Form.Group as={Row} className="mb-3">
                                            <Form.Label column sm="2" htmlFor='brand'>
                                                Brand
                                            </Form.Label>
                                            <Col sm="10">
                                                <Form.Control type='text' name='brand' id='brand' placeholder="Brand name"
                                                />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" >
                                            <Form.Label column sm="2" htmlFor='size'>
                                                Size
                                            </Form.Label>
                                            <Col sm="10">
                                                <Form.Control type="text" name='size' id='size' placeholder="Size"
                                                />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3" >
                                            <Form.Label column sm="2" htmlFor='quantity'>
                                                Quantity
                                            </Form.Label>
                                            <Col sm="10">
                                                <Form.Control type="text-area"
                                                    name='quantity'
                                                    id='quantity'
                                                    className="form-control"
                                                    placeholder='Quantity'
                                                />
                                            </Col>
                                        </Form.Group>
                                    </div>
                                    <div className='col-md-6'>
                                        <Form.Group as={Row} className="mb-3">
                                            <Form.Label column sm="3" htmlFor='article_number'>
                                                Article number
                                            </Form.Label>
                                            <Col sm="8">
                                                <Form.Control type='text' name='article_number' id='article_number' placeholder="article number"
                                                />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-4" >
                                            <Form.Label column sm="3" htmlFor='purchase_price'>
                                                Purchase Price
                                            </Form.Label>
                                            <Col sm="8">
                                                <Form.Control type="text" name='purchase_price' id='purchase_price' placeholder="purchase price"
                                                />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3" >
                                            <Form.Label column sm="3" htmlFor='selling_price'>
                                                Selling Price
                                            </Form.Label>
                                            <Col sm="8">
                                                <Form.Control type="text-area"
                                                    name='selling_price'
                                                    id='selling_price'
                                                    className="form-control"
                                                    placeholder='selling price'
                                                />
                                            </Col>
                                        </Form.Group>
                                        <div className='mb-1 justify-content-end' style={{ textalign: 'right' }}>
                                            <button type="submit" className="btn btn-primary" style={{ marginLeft: '69%' }}>Add</button>&nbsp;&nbsp;&nbsp;
                                            <button type="reset" className="btn btn-primary" >Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </Form>

            </div>
            <div className="container">
                <h2 style={{ marginTop: 10 }}><center> Display Wholesaler details</center></h2>
                <div className='card' style={{ height: '250px', overflowY: 'scroll' }} >

                    <table className="card-table table">
                        <thead>
                            <tr>
                                <th scope="col">Article number</th>
                                <th scope="col">Brand</th>
                                <th scope="col">Size</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Purchase price</th>
                                <th scope="col">Edit</th>
                            </tr>
                        </thead>
                        <tbody >

                        </tbody>
                    </table>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                    <div className="card-body">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Purchase
