import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap';

const SalesReport = () => {

    const [salesDetails, setSalesDetails] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/api/invoice/fetchallwithcustomer')
            .then(response => response.json())
            .then(data => setSalesDetails(data.invoice));
    }, []);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [modalDetails, setModalDetails] = useState([]);

    const handleModal = (id) => {
        let details = salesDetails.filter(sale => sale._id === id);
        setModalDetails(details);
        handleShow();
    }

    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const filteredSalesDetails = salesDetails.filter(sale => {
        return sale.customer_id.mobile.toString().toLowerCase().includes(search.toLowerCase());
    })

    return (
        <>
            <div>
                <div className="container">
                    <h2 style={{ marginTop: 10 }}><center> Sales report </center></h2>
                    <div className='card'>
                        <div className='card-header'>
                            <div className='row'>
                                <div className='col-4 offset-8'>
                                    <input type="text" className="form-control" placeholder="Search" onChange={handleSearch} />
                                </div>
                            </div>
                        </div>
                        <div className="card-body" style={{ height: '500px', overflowY: 'scroll' }} >
                            <table className="card-table table">
                                <thead>
                                    <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">Customer name</th>
                                        <th scope="col">Mobile</th>
                                        <th scope="col">Net Amount</th>
                                        <th scope="col">Show</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredSalesDetails && filteredSalesDetails.map((salesDetail, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{salesDetail.date.slice(0, 10)}</td>
                                                <td>{salesDetail.customer_id.name}</td>
                                                <td>{salesDetail.customer_id.mobile}</td>
                                                <td>{salesDetail.amount}</td>
                                                <td>
                                                    <button className="btn btn-primary" onClick={() => handleModal(salesDetail._id)}>Show</button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Product purchase details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className="card-table table">
                        <thead>
                            <tr>
                                <th scope="col">Article number</th>
                                <th scope="col">Brand</th>
                                <th scope="col">Size</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Purchase price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {modalDetails && modalDetails.map((modalDetail, index) => {
                                return (
                                    modalDetail.products.map((product, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{product.article_no}</td>
                                                <td>{product.brand}</td>
                                                <td>{product.size}</td>
                                                <td>{product.quantity}</td>
                                                <td>{product.rate}</td>
                                            </tr>
                                        )
                                    })
                                )
                            })}
                        </tbody>
                    </table>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default SalesReport
