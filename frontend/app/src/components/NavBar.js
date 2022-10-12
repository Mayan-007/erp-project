import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="text-white min-vh-100">
            <div className='container pt-3'>
                <Link to='/'>
                    <img src="images/logo.png" alt='logo' className='w-100' />
                </Link>
            </div>
            <div className='container pt-3'>
                <div className='row'>
                    <div className='col'>
                        <Link to='/purchase' className='text-decoration-none text-white'>
                            <div className='row py-3'>
                                <div className='col-2'>
                                    <i className='bi bi-cart4'></i>
                                </div>
                                <div className='col'>
                                    <h5>Purchase</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <Link to='/employee' className='text-decoration-none text-white'>
                            <div className='row py-3'>
                                <div className='col-2'>
                                    <i className='bi bi-person-circle'></i>
                                </div>
                                <div className='col'>
                                    <h5>Employee</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <Link to='/invoice' className='text-decoration-none text-white'>
                            <div className='row py-3'>

                                <div className='col-2'>
                                    <i className='bi bi-file-earmark-text'></i>
                                </div>
                                <div className='col'>
                                    <h5>Invoice</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>

                        <Link to='/wholesaler' className='text-decoration-none text-white'>
                            <div className='row py-3'>
                                <div className='col-2'>
                                    <i className='bi bi-person-circle'></i>
                                </div>
                                <div className='col'>
                                    <h5>Wholesaler</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <Link to='/stock' className='text-decoration-none text-white'>
                            <div className='row py-3'>
                                <div className='col-2'>
                                    <i className='bi bi-box-seam'></i>
                                </div>
                                <div className='col'>
                                    <h5>Stock</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className='row py-3' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <div className='col-2'>
                                <i className='bi bi-table'></i>
                            </div>
                            <div className='col'>
                                <h5>Report</h5>
                            </div>
                        </div>
                        <ul className="dropdown-menu">
                            <li>
                                <Link className="dropdown-item" to="/purchasereport">Purchase</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/salesreport">Sales</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/customerdetails">Customer Details</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
