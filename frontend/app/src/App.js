import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Purchase from './components/Purchase';
import Employee from './components/Employee';
import Invoice from './components/Invoice';
import Wholesaler from './components/Wholesaler';
import Stock from './components/Stock';
import NavBar from './components/NavBar';

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className='container-fluid'>
					<div className='row flex-nowrap'>
						<div className='col-2 px-0 bg-dark'>
							<NavBar />
						</div>
						<div className='col'>
							<div className='row d-flex justify-content-between bg-dark text-white'>
								<div className='col-10'>
									<h3 className='pt-2 text-center text-uppercase'>Raj Boot House</h3>
								</div>
								<div className='col-2'>
									<div className='row d-flex justify-content-end'>
										<div className='col-3'>
											<i class="bi bi-person-circle fs-1" type="button"
                                                data-bs-toggle="dropdown" aria-expanded="false"></i>
                                            <ul class="dropdown-menu">
                                                <li>
                                                    <Link class="dropdown-item" to="/">Logout</Link>
                                                </li>
                                            </ul>
										</div>
									</div>
								</div>
							</div>
							<Routes>
								{/* Route 1: Customer */}
								<Route exact path="/purchase" element={<Purchase />} />
								{/* Route 1: Employee */}
								<Route exact path="/employee" element={<Employee />} />
								{/* Route 1: Invoice */}
								<Route exact path="/invoice" element={<Invoice />} />
								{/* Route 1: Wholesaler */}
								<Route exact path="/wholesaler" element={<Wholesaler />} />
								{/* Route 1: Stock */}
								<Route exact path="/stock" element={<Stock />} />
							</Routes>
						</div>
					</div>
				</div>
			</BrowserRouter>
		)
	}
}
