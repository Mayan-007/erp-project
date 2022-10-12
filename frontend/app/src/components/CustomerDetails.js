import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';

const CustomerDetails = () => {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/api/customer/getallcustomer')
            .then(response => response.json())
            .then(data => setCustomers(data));
    }, []);

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Mobile No',
            selector: row => row.mobile,
        }
    ];

    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const filteredCustomers = customers.filter(customer => {
        return customer.name.toLowerCase().includes(search.toLowerCase());
    })

    return (
        <div>
            <div className="container">
                <h2 style={{ marginTop: 10 }}><center> Customer details</center></h2>
                <div className='card'>
                    <div className='card-header bg-secondary'>
                        <div className='row'>
                            <div className='col-4 offset-8'>
                                <input type="text" className="form-control" placeholder="Search by customer name" onChange={handleSearch} />
                            </div>
                        </div>
                    </div>
                    <div className="card-body" style={{ height: '500px', overflowY: 'scroll' }} >
                        <div className='row d-flex justify-content-center'>
                            <div className='col-10'>
                                <DataTable
                                    columns={columns}
                                    data={filteredCustomers}
                                    highlightOnHover
                                    pagination
                                    pointerOnHover
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerDetails
