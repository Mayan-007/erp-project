import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap';

const PurchaseReport = () => {

    const [purchaseDetails, setPurchaseDetails] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/api/purchase/getallpurchase')
            .then(response => response.json())
            .then(data => setPurchaseDetails(data.data));
    }, []);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [modalDetails, setModalDetails] = useState([]);

    const handleModal = async (id) => {
        // await fetch(`http://localhost:4000/api/product/getproductbypurchaseid/${id}`)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data.prodcuts)
        //         let modalData = data.prodcuts
        //         setModalDetails(modalData)
        //         console.log(modalDetails)
        //     });
        const uri = `http://localhost:4000/api/product/getproductbypurchaseid/${id}`;
        const response = await fetch(uri);
        const data = await response.json();
        console.log(data.prodcuts)
        setModalDetails(data.prodcuts)
        console.log(modalDetails)
        handleShow();
    }

    useEffect(() => {
        console.log(modalDetails)
    }, [modalDetails])

    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    // const filteredPurchaseDetails = purchaseDetails.filter(purchase => {
    //     return purchase.customer_id.mobile.toString().toLowerCase().includes(search.toLowerCase());
    // })

    return (
        <>
            <div>
                <div className="container">
                    <h2 style={{ marginTop: 10 }}><center> Purchase record</center></h2>
                    <div className='card'>
                        <div className='card-header'>
                            <div className='row'>
                                <div className='col-4 offset-8'>
                                    <input type="text" className="form-control" placeholder="Search" />
                                </div>
                            </div>
                        </div>
                        <div className="card-body" style={{ height: '500px', overflowY: 'scroll' }} >
                            <table className="card-table table">
                                <thead>
                                    <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">Wholesaler name</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Mode</th>
                                        <th scope="col">Cheque number</th>
                                        <th scope="col">Show</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {purchaseDetails && purchaseDetails.map(purchase => {
                                        return (
                                            <tr key={purchase._id}>
                                                <td>{purchase.date.slice(0, 10)}</td>
                                                <td>{purchase.wholesaler_id.name}</td>
                                                <td>{purchase.amount}</td>
                                                <td>{purchase.payement_mode}</td>
                                                <td>{purchase.cheque_no === null ? '-' : purchase.cheque_no}</td>
                                                <td>
                                                    <button className="btn btn-primary" onClick={() => handleModal(purchase._id)}>Show</button>
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
                                return (<tr key={index}>
                                    <td>{modalDetail.article_no}</td>
                                    <td>{modalDetail.brand}</td>
                                    <td>{modalDetail.size}</td>
                                    <td>{modalDetail.purchase_quantity}</td>
                                    <td>{modalDetail.purchase_rate}</td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default PurchaseReport
