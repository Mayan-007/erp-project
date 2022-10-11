import React from 'react'

const CustomerDetails = () => {
    return (
        <div>
            <div className="container">
                <h2 style={{ marginTop: 10 }}><center> Sales report </center></h2>
                <div className='card'>
                    <div className='card-header'>
                        <div className='row'>
                            <div className='col-4 offset-8'>
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>
                        </div>
                    </div>
                    <div className="card-body" style={{  overflowY: 'scroll' }} >
                        {/* <DataTable
                            columns={columns}
                            data={filteredWholesaler}
                            highlightOnHover
                            pagination
                            pointerOnHover
                        /> */}
                        <table className='table'>
                            <thead>
                                <tr>
                                 
                                    <th scope="col-md-4">Customer name</th>
                                    <th scope="col-md-4" style={{marginRight:'80%'}}>Mobile</th>
                                 
                                </tr>
                              
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerDetails
