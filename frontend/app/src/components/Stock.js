import React from 'react'

const Stock = () => {

    return (

        <div>
    <div className="container">
                <h2 style={{ marginTop: 10 }}><center> Stock display</center></h2>
                <div className='card'>
                    <div className='card-header'>
                        <div className='row'>
                            <div className='col-4 offset-8'>
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>
                        </div>
                    </div>
                    <div className="card-body" style={{ height:'500px', overflowY: 'scroll' }} >
                        {/* <DataTable
                            columns={columns}
                            data={filteredWholesaler}
                            highlightOnHover
                            pagination
                            pointerOnHover
                        /> */}
                        <table className="card-table table">
                            <thead>
                                <tr>
                            
                                    <th scope="col">Article number</th>
                                    <th scope="col">Brand</th>
                                    <th scope="col">Size</th>
                                    <th scope="col">Quantity</th>
                                </tr>
                               
                            </thead>
                            <tbody>
                            <tr>
                                    <td>keugw</td>
                                    <td>ewuw </td>
                                    <td>eiwhuh</td>
                                    <td>weuu</td>
                                    
                               
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>

    )

}



export default Stock
