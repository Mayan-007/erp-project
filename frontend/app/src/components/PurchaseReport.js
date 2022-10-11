import React from 'react'
import Modal1 from './modal'
const PurchaseReport = () => {
  
    return (
        <div>
            <div className="container">
                <h2 style={{ marginTop: 10 }}><center> Purchase product record</center></h2>
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
                                <tr>
                                    <td>keugw</td>
                                    <td>ewuw </td>
                                    <td>eiwhuh</td>
                                    <td>weuu</td>
                                    <td>whfir</td>
                                    <td>
                                        <div>
                                            
                                            {/* <button onClick={e => {
                                                this.showModal();
                                            }}
                                            > Details </button>
                                            <Modal1 show={this.state.show} /> */}
                                            <button className='btn btn-primary'>Details</button>
                                            {/* <Modal1 /> */}
                                            {/* <Modal show={show} onHide={handleClose}>
                                                <Modal1/>
                                                </Modal> */}
                                        </div>
                                    </td>
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

export default PurchaseReport
