import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Purchase from './components/Purchase';
import Employee from './components/Employee';
import Invoice from './components/Invoice';
import Wholesaler from './components/Wholesaler';
import Stock from './components/Stock';
import NavBar from './components/NavBar';
import Alert from './components/Alert';
import PurchaseReport from './components/PurchaseReport';
import SalesReport from './components/SalesReport';
import CustomerDetails from './components/CustomerDetails';
import Home from './components/Home';

const App = () => {

	const showAlert = (message, type) => {
		setAlert({
			message: message,
			type: type
		})
		setTimeout(() => {
			setAlert(null);
		}, 1000)
	}

	const [alert, setAlert] = useState(null);

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
										{/* <i className="bi bi-person-circle fs-1" type="button"
											data-bs-toggle="dropdown" aria-expanded="false"></i>
										<ul className="dropdown-menu">
											<li>
												<Link className="dropdown-item" to="/">Logout</Link>
											</li>
										</ul> */}
									</div>
								</div>
							</div>
						</div>
						<Alert alert={alert} />
							<Routes>
								{/* Route 0: landing Page */}
								<Route path='/' element={<Home />} />
								{/* Route 1: Customer */}
								<Route exact path="/purchase" element={<Purchase showAlert={showAlert} />} />
								{/* Route 2: Employee */}
								<Route exact path="/employee" element={<Employee showAlert={showAlert} />} />
								{/* Route 3: Invoice */}
								<Route exact path="/invoice" element={<Invoice showAlert={showAlert} />} />
								{/* Route 4: Wholesaler */}
								<Route exact path="/wholesaler" element={<Wholesaler showAlert={showAlert} />} />
								{/* Route 5: Stock */}
								<Route exact path="/stock" element={<Stock />} />
								{/* Route 6: Purchase Report */}
								<Route exact path="/purchasereport" element={<PurchaseReport />} />
								{/* Route 7: Sales Report */}
								<Route exact path="/salesreport" element={<SalesReport />} />
								{/* Route 8: Customer Details */}
								<Route exact path="/customerdetails" element={<CustomerDetails />} />
							</Routes>
						</div>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
