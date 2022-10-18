import React, { useEffect, useState } from 'react'
import { Col, Row, Form } from "react-bootstrap";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
const styles = {
    box: {
        marginTop: '2%',
    }

}

const Invoice = ({ showAlert }) => {
  const  generatePDF = () => {
        // var doc = new jsPDF('p', 'pt');
        
        var doc = new jsPDF('p', 'pt', 'letter')
          // generate the above data table
        const imgD="data:image/jpeg;base64,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 "
          doc.addImage(imgD, 'jpeg', 25, 20, 80, 60)
          var y = 10;
          // doc.setLineWidth(2);
          doc.setFontSize(24);
          doc.text(240, y = y + 30, "Invoice");
          doc.setFontSize(10);
        //    doc.text(20, 20, 'This is the first title.')
        doc.addFont('helvetica', 'normal')
        // doc.text(20, 60, 'This is the second title.')
        doc.text(470, 20, 'Raj Boot House') 
        doc.text(470,29,'Opp. Old Bus Stand')
        doc.text(470,39,'Anand-388001')
        doc.text(470,49,'Ph:7435919877')
        doc.text(470,59,'GST no:24AABCU9603R1ZT')
      
        doc.text(20, 110, 'Customer name:') 
        doc.text(20, 130, 'Phone number:') 
        doc.text(450,110,'Invoice number:')
        doc.text(450,130,'Date:')
       
          var body = [
                     [1, 'GIZMORE Multimedia Speaker with Remote Control...', 75000, '2021'],
                     [2, 'Realme', 25000, '2022'],
                     [3, 'Oneplus', 30000, '2021'],
                    
                     ]
          // New Header and Footer Data Include the table
          
          doc.autoTable({
              body: body,
              startY: 200,
              head:[['SR.No', 'Product Name', 'Quantity', 'Unit price','Amount']],
              foot:[[' ', 'Net Amount *inclusive of all taxes', '130000', '  ']],
              headStyles :{textColor: [255, 255, 255],},
              footStyles :{textColor: [255, 255, 255],},
              
              theme: 'grid',
              // columnStyles: {
              //     0: {halign: 'right', cellWidth: 50,},
              //     1: {halign: 'left', cellWidth: 380,},
              //     2: {halign: 'right', cellWidth: 50,},
              //     3: {halign: 'right', cellWidth: 50,}
              // },
          })
      let finalY = doc.autoTable.previous.finalY;
      doc.setFontSize(20);
      doc.text(190, finalY+35, "Thank You,Visit Again")
      // doc.text(900, y = y + 30, 'Thank you,Visit Again')
          // save the data to this file
          doc.setFontSize(10);
          doc.text(25, finalY+50, "*No exchange,No warranty*")
          doc.text(450, finalY+100, "Sign")
          doc.save('invoice');
    }

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
                                <div className="col-3">
                                <Form.Group as={Row} className="mb-5">
                                <Form.Label column sm="4" htmlFor='discount_amount' style={{padding:'0px'}}>
                                                <h5>Discount </h5>
                                            </Form.Label>
                                        <Col sm="7" style={{padding:'0px'}}>
                                            <Form.Control
                                                type='text'
                                                name='discount'
                                                id='discount'
                                                placeholder="Discount amount"
                                               
                                            />
                                        </Col>
                                    </Form.Group>
                                </div>
                                <div className="col">
                                    <button className="btn btn-primary  float-right" style={{ marginLeft: '69%' }} onClick={generatePDF}>Print</button>
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
