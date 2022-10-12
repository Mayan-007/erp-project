import React, { useEffect, useState } from 'react'
import { Col, Row, Form } from "react-bootstrap";
const styles = {
    box: {
        marginTop: '2%',
    }

}

const Invoice = ({ showAlert }) => {

    const [phone, setPhone] = useState('');

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }

    const [name, setName] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/api/customer/getallcustomer')
            .then(res => res.json())
            .then(data => {
                setCustomers(data);
            })
    }, [])

    useEffect(() => {
        if (phone.length === 10) {
            const customer = customers.find(c => c.mobile.toString() === phone.toString());
            if (customer) {
                setName(customer.name);
            }
        } else {
            setName('');
        }
    }, [phone])

    const [brand, setBrand] = useState('');

    const handleBrandChange = (e) => {
        setBrand(e.target.value);
    }

    const [size, setSize] = useState('');

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    }

    const [articleNo, setArticleNo] = useState('');

    const handleArticleNoChange = (e) => {
        setArticleNo(e.target.value);
    }

    const [quantity, setQuantity] = useState('');

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    }

    const [rate, setRate] = useState('');

    const handleRateChange = (e) => {
        setRate(e.target.value);
    }

    const handlePrint = async () => {
        if (phone === '') {
            showAlert('Please enter phone number', 'danger');
        } else if (name === '') {
            showAlert('Please provide name of the customer', 'danger');
        }
        let customer = customers.find(c => c.mobile.toString() === phone.toString());
        if (!customer) {
            await fetch('http://localhost:4000/api/customer/addcustomer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    customer_name: name,
                    customer_phone: phone
                })
            })
                .then(res => res.json())
                .then(data => {
                    customer = data.data;
                    console.log(customer);
                })
        }
        let sell = JSON.parse(sessionStorage.getItem('sell'));
        fetch('http://localhost:4000/api/invoice/addinvoice', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                customer_id: customer._id,
                products: sell
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    showAlert('Invoice generated successfully', 'success');
                    sessionStorage.removeItem('sell');
                    setPhone('');
                    setName('');
                    handleClear();
                } else {
                    showAlert(data.message, 'warning');
                }
            })
    }

    const handleAdd = async (e) => {
        e.preventDefault();
        if (brand === '' || size <= 0 || quantity <= 0 || rate === '' || articleNo === '') {
            if (brand === '') {
                showAlert('Please enter brand', 'danger');
            } else if (size <= 0) {
                showAlert('Please enter valid size', 'danger');
            } else if (quantity <= 0) {
                showAlert('Please enter valid quantity', 'danger');
            }
            else if (rate === '') {
                showAlert('Please enter purchase rate', 'danger');
            }
            else if (articleNo === '') {
                showAlert('Please enter article no', 'danger');
            }
        } else {
            if (sessionStorage.getItem('sell') === null) {
                sessionStorage.setItem('sell', JSON.stringify([]));
            }
            await fetch('http://localhost:4000/api/stock/check', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    brand: brand,
                    size: size,
                    article_no: articleNo,
                    quantity: quantity
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status === 'success') {
                        let sell = JSON.parse(sessionStorage.getItem('sell'));
                        sell.push({
                            article_no: articleNo,
                            size: parseInt(size),
                            brand: brand,
                            rate: rate,
                            quantity: parseInt(quantity),
                        });
                        sessionStorage.setItem('sell', JSON.stringify(sell));
                        showAlert('Item added to cart', 'success');
                        handleClear();
                    } else {
                        showAlert(data.message, data.status);
                    }
                    handleTempDetailsList();
                })
        }
    }

    const [tempDetails, setTempDetails] = useState([]);

    const [totalAmount, setTotalAmount] = useState(0);

    const [totalQuantity, setTotalQuantity] = useState(0);

    const handleTempDetailsList = () => {
        let sell = JSON.parse(sessionStorage.getItem('sell'));
        setTempDetails(sell);
        if (sell !== null) {
            let total = 0;
            let totalQuantity = 0;
            sell.forEach((sell) => {
                total += sell.rate * sell.quantity;
                totalQuantity += parseInt(sell.quantity);
            })
            setTotalAmount(total);
            setTotalQuantity(totalQuantity);
        }
    }

    useEffect(() => {
        handleTempDetailsList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleClear = () => {
        setArticleNo('');
        setBrand('');
        setRate('');
        setQuantity('');
        setSize('');
    }

    const handleDelete = (index) => {
        console.log(index);
        let sell = JSON.parse(sessionStorage.getItem('sell'));
        sell.splice(index, 1);
        sessionStorage.setItem('sell', JSON.stringify(sell));
        handleTempDetailsList();
    }

    return (
        <div>
            <h2><center>Generate Invoice</center></h2>
            <div className='container'>
                <Form onSubmit={handleAdd}>
                    <div className='card'>
                        <div className='card-body' style={{ height: '70px' }}>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="3" htmlFor='phone_no'>
                                            Phone number
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control
                                                type='text'
                                                name='phone_no'
                                                id='phone_no'
                                                placeholder="phone number"
                                                value={phone}
                                                onChange={handlePhoneChange}
                                            />
                                        </Col>
                                    </Form.Group>
                                </div>
                                <div className='col-md-6'>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column sm="3" htmlFor='customer_number'>
                                            Customer name
                                        </Form.Label>
                                        <Col sm="8">
                                            <Form.Control
                                                type='text'
                                                name='customer_name'
                                                id='customer_name'
                                                placeholder="Customer name"
                                                value={name}
                                                onChange={handleNameChange}
                                            />
                                        </Col>
                                    </Form.Group>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='box' style={styles.box} >
                        <div className='card' >
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <Form.Group as={Row} className="mb-3">
                                            <Form.Label column sm="2" htmlFor='brand'>
                                                Brand
                                            </Form.Label>
                                            <Col sm="10">
                                                <Form.Control
                                                    type='text'
                                                    name='brand'
                                                    id='brand'
                                                    placeholder="Brand name"
                                                    value={brand}
                                                    onChange={handleBrandChange}
                                                />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3" >
                                            <Form.Label column sm="2" htmlFor='size'>
                                                Size
                                            </Form.Label>
                                            <Col sm="10">
                                                <Form.Control
                                                    type="number"
                                                    name='size'
                                                    id='size'
                                                    placeholder="Size"
                                                    value={size}
                                                    onChange={handleSizeChange}
                                                />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3" >
                                            <Form.Label column sm="2" htmlFor='quantity'>
                                                Quantity
                                            </Form.Label>
                                            <Col sm="10">
                                                <Form.Control
                                                    type="number"
                                                    name='quantity'
                                                    id='quantity'
                                                    className="form-control"
                                                    placeholder='Quantity'
                                                    value={quantity}
                                                    onChange={handleQuantityChange}
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
                                                <Form.Control
                                                    type='text'
                                                    name='article_number'
                                                    id='article_number'
                                                    placeholder="article number"
                                                    value={articleNo}
                                                    onChange={handleArticleNoChange}
                                                />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-4" >
                                            <Form.Label column sm="3" htmlFor='selling_price'>
                                                Selling Price
                                            </Form.Label>
                                            <Col sm="8">
                                                <Form.Control
                                                    type="text"
                                                    name='selling_price'
                                                    id='selling_price'
                                                    placeholder="selling price"
                                                    value={rate}
                                                    onChange={handleRateChange}
                                                />
                                            </Col>
                                        </Form.Group>
                                        <div className='mb-1 justify-content-end' style={{ textalign: 'right' }}>
                                            <button type="submit" className="btn btn-primary" style={{ marginLeft: '69%' }} >Add</button>&nbsp;&nbsp;&nbsp;
                                            <button type="reset" className="btn btn-primary" onClick={handleClear}>Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
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
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Selling price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tempDetails && tempDetails.map((sell, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{sell.article_no}</td>
                                            <td>{sell.brand}</td>
                                            <td>{sell.size}</td>
                                            <td>{sell.quantity}</td>
                                            <td>{sell.rate}</td>
                                            <td><button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button></td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer">
                        <div className='container'>
                            <div className="row">
                                <div className="col-3">
                                    <h5>Total Quantity: {totalQuantity}</h5>
                                </div>
                                <div className="col-3">
                                    <h5>Total Amount: {totalAmount} ₹</h5>
                                </div>
                                <div className="col">
                                    <button className="btn btn-primary  float-right" style={{ marginLeft: '90%' }} onClick={handlePrint}>Print</button>
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
