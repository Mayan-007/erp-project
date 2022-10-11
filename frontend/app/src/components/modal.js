import React from 'react'
const Model1 = () => {

    return (
        <div>
            <div className="container">
                <h2 style={{ marginTop: 10 }}><center> Product purchase details</center></h2>
                <div className='card'>
                    <div className="card-body" style={{ height: '230px', overflowY: 'scroll' }} >
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
                              
                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer">
                        <div className='container'>
                            <div className="row">
                                <div className="col">
                                    <button type="submit" className="btn btn-primary  float-right" style={{ marginLeft: '90%' }} >Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model1
