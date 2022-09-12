import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <div class="text-white min-vh-100">
                <div className='container pt-3'>
                    <img src="images/logo.png" className='w-100' />
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
                </div>
            </div>
        )
    }
}
