import React, { useEffect, useState } from 'react'
import { Col, Row, Form } from "react-bootstrap";

const styles = {
    box: {
        marginTop: '2%',
    },
    rcorners1: {
        padding: '0.375rem 0.75rem',
        fontsize: '1rem',
        fontweight: '400',
        lineheight: 1.5,
        color: '#212529',
        backgroundcolor: '#fff',

        border: '1px solid #ced4da',
        appearance: 'none',
        borderradius: '0.375rem',
        width: '100%'
    },
    grid: {
        gridcolumngap: '50px',
    }

}

const Purchase = ({ showAlert }) => {

    const [wholesalers, setWholesalers] = useState([]);

    const getAllWholesalers = () => {
        fetch('http://localhost:4000/api/wholesaler/getallwholesaler')
            .then(response => response.json())
            .then(data => {
                let result = data.data.map((wholesaler) => {
                    return {
                        value: wholesaler._id,
                        display: wholesaler.name
                    }
                });
                setWholesalers(result);
            })
    }

    useEffect(() => {
        getAllWholesalers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [wholesalerId, setWholesalerId] = useState('');

    const handleWholesalerIdChange = (e) => {
        setWholesalerId(e.target.value);
    }

    const [mode, setMode] = useState('');

    const handleModeChange = (e) => {
        console.log(mode)
        setMode(e.target.value);
    }

    const [chequeNo, setChequeNo] = useState('');

    const handleChequeNoChange = (e) => {
        setChequeNo(e.target.value);
    }

    const [chequeDate, setChequeDate] = useState('');

    const handleChequeDateChange = (e) => {
        setChequeDate(e.target.value);
    }

    const [brand, setBrand] = useState('');

    const handleBrandChange = (e) => {
        setBrand(e.target.value);
    }

    const [size, setSize] = useState('');

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    }

    const [quantity, setQuantity] = useState('');

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    }

    const [purchaseRate, setPurchaseRate] = useState('');

    const handlePurchaseRateChange = (e) => {
        setPurchaseRate(e.target.value);
    }

    const [articleNo, setArticleNo] = useState('');

    const handleArticleNoChange = (e) => {
        setArticleNo(e.target.value);
    }

    const [totalAmount, setTotalAmount] = useState(0);

    const [totalQuantity, setTotalQuantity] = useState(0);

    const handleAddPurchase = (e) => {
        e.preventDefault();
        if (brand === '' || size <= 0 || quantity <= 0 || purchaseRate === '' || articleNo === '') {
            if(brand === ''){
                showAlert('Please enter brand', 'danger');
            }else if(size <= 0){
                showAlert('Please enter valid size', 'danger');
            }else if(quantity <= 0){
                showAlert('Please enter valid quantity', 'danger');
            }
            else if(purchaseRate === ''){
                showAlert('Please enter purchase rate', 'danger');
            }
            else if(articleNo === ''){
                showAlert('Please enter article no', 'danger');
            }
        } else {
            if (sessionStorage.getItem('purchase') === null) {
                sessionStorage.setItem('purchase', JSON.stringify([]));
            }
            let purchase = JSON.parse(sessionStorage.getItem('purchase'));
            purchase.push({
                article_no: articleNo,
                size: size,
                brand: brand,
                purchase_rate: purchaseRate,
                purchase_quantity: parseInt(quantity),
            });
            sessionStorage.setItem('purchase', JSON.stringify(purchase));
            handleTempDetailsList();
        }
    }

    const handleSubmit = () => {
        if (wholesalerId === '' || mode === '') {
            showAlert('Please fill all the wholesaler details', 'danger');
        } else {
            let purchase = JSON.parse(sessionStorage.getItem('purchase'));
            let purchaseData = {
                wholesaler_id: wholesalerId,
                purchase_amount: totalAmount,
                products: purchase,
                cheque_no: chequeNo === '' ? null : chequeNo,
                cheque_date: chequeDate === '' ? null : chequeDate,
                payment_mode: mode
            }
            fetch('http://localhost:4000/api/purchase/addpurchase', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(purchaseData)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'success') {
                        showAlert('Purchase added successfully', 'success');
                        sessionStorage.removeItem('purchase');
                        handleTempDetailsList();
                    } else {
                        showAlert('Purchase not added', 'danger');
                    }
                })
        }
    }

    const [tempDetails, setTempDetails] = useState([]);

    const handleTempDetailsList = () => {
        let purchase = JSON.parse(sessionStorage.getItem('purchase'));
        setTempDetails(purchase);
        if (purchase !== null) {
            let total = 0;
            let totalQuantity = 0;
            purchase.forEach((purchase) => {
                total += purchase.purchase_rate * purchase.purchase_quantity;
                totalQuantity += parseInt(purchase.purchase_quantity);
            })
            setTotalAmount(total);
            setTotalQuantity(totalQuantity);
        }
    }

    useEffect(() => {
        handleTempDetailsList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleDelete = (index) => {
        console.log(index);
        let purchase = JSON.parse(sessionStorage.getItem('purchase'));
        purchase.splice(index, 1);
        sessionStorage.setItem('purchase', JSON.stringify(purchase));
        handleTempDetailsList();
    }

    const handleClear = (e) => {
        e.preventDefault();
        setArticleNo('');
        setBrand('');
        setPurchaseRate('');
        setQuantity('');
        setSize('');
    }

    return (
        <div>
            <h2><center>Product Entry</center></h2>
            <div className='container'>
                <Form>
                    <div className='card'>
                        <div className='card-body' style={{ height: '70px' }}>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <Form.Group as={Row} >
                                        <Form.Label column>
                                            Wholesaler name
                                        </Form.Label>
                                        <Col sm="6">
                                            <select id="drop" value={wholesalerId}
                                                onChange={handleWholesalerIdChange}
                                                style={styles.rcorners1}>
                                                <option value="0">Select</option>
                                                {wholesalers.map((wholesaler) => (
                                                    <option key={wholesaler.value} value={wholesaler.value}>{wholesaler.display}</option>
                                                ))}
                                            </select>
                                        </Col>
                                    </Form.Group>
                                </div>
                                <div className='col-md-9'>
                                    <div className='row d-flex justify-content-center'>
                                        <div className='col-md-5'>
                                            <Form.Group as={Row} className="mb-3">
                                                <Form.Label column sm="3" htmlFor='mode' style={styles.grid}>
                                                    Mode:
                                                </Form.Label>
                                                <Col sm="6" style={{ padding: '2%' }}>
                                                    {['radio'].map((type) => (
                                                        <div key={`inline-${type}`} className="mb-3">
                                                            <Form.Check
                                                                inline
                                                                label="Cash"
                                                                name="mode"
                                                                value="cash"
                                                                checked={mode === 'cash'}
                                                                onChange={handleModeChange}
                                                                type={type}
                                                                id={`inline-${type}-Cash`}
                                                            />
                                                            <Form.Check
                                                                inline
                                                                label="Cheque"
                                                                name="mode"
                                                                value="cheque"
                                                                checked={mode === 'cheque'}
                                                                onChange={handleModeChange}
                                                                type={type}
                                                                id={`inline-${type}-Cheque`}
                                                            />
                                                        </div>
                                                    ))}
                                                </Col>
                                            </Form.Group>
                                        </div>
                                        <div className='col-md-7'>
                                            <Form.Group as={Row} className="mb-3">
                                                <Form.Label column sm="3" htmlFor='cheque'>
                                                    Cheque details:
                                                </Form.Label>
                                                <Col sm="5">
                                                    <Form.Control
                                                        type='text'
                                                        name='cheque'
                                                        id='cheque'
                                                        value={chequeNo}
                                                        onChange={handleChequeNoChange}
                                                        placeholder="Cheque number"
                                                        disabled={mode !== 'cheque'}
                                                    />
                                                </Col>
                                                <Col sm="4">
                                                    <Form.Control
                                                        type='date'
                                                        name='cheque'
                                                        id='cheque'
                                                        value={chequeDate}
                                                        onChange={handleChequeDateChange}
                                                        placeholder="Cheque Date"
                                                        disabled={mode !== 'cheque'}
                                                    />
                                                </Col>
                                            </Form.Group>
                                        </div>
                                    </div>
                                </div>
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
                                            <Form.Label column sm="3" htmlFor='purchase_price'>
                                                Purchase Price
                                            </Form.Label>
                                            <Col sm="8">
                                                <Form.Control
                                                    type="text"
                                                    name='purchase_price'
                                                    id='purchase_price'
                                                    placeholder="purchase price"
                                                    value={purchaseRate}
                                                    onChange={handlePurchaseRateChange}
                                                />
                                            </Col>
                                        </Form.Group>
                                        <div className='mb-1 justify-content-end' style={{ textalign: 'right' }}>
                                            <button type="submit" className="btn btn-primary" style={{ marginLeft: '69%' }} onClick={handleAddPurchase}>Add</button>&nbsp;&nbsp;&nbsp;
                                            <button className="btn btn-primary" onClick={handleClear}>Cancel</button>
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
                                    <th scope="col">Purchase price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tempDetails && tempDetails.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.article_no}</td>
                                            <td>{item.brand}</td>
                                            <td>{item.size}</td>
                                            <td>{item.purchase_quantity}</td>
                                            <td>{item.purchase_rate}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })}
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
                                    <button type="submit" className="btn btn-primary  float-right" style={{ marginLeft: '90%' }} onClick={handleSubmit}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Purchase
