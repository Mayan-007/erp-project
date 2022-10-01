import React, { Component } from 'react'

export default class Wholesaler extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h2 style={{ marginTop: 10 }}><center>Wholesaler details</center></h2>
                    <div className='card'>

                        <div className="card-body">
                            <form>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className="mb-1">
                                            <label htmlFor='wholesaler_name' className="form-label">Name</label>
                                            <input type="text" name='wholesaler_name' id='wholesaler_name' className="form-control"></input>
                                        </div>
                                        <div className="mb-1">
                                            <label htmlFor='wholesaler_phone' className="form-label">Phone</label>
                                            <input type="text" name='wholesaler_phone' id='wholesaler_phone' className="form-control"></input>
                                        </div>
                                        <div className="mb-1">
                                            <label htmlFor='wholesaler_address' className="form-label">Address</label>
                                            <input type="text-area" name='wholesaler_address' id='wholesaler_address' className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className="mb-1">
                                            <label htmlFor='wholesaler_email' className="form-label">Email id</label>
                                            <input type="email" name='wholesaler_email' id='wholesaler_email' className="form-control"></input>
                                        </div>
                                        <div className="mb-1">
                                            <label htmlFor='wholesaler_gstno' className="form-label">GST number</label>
                                            <input type="text" name='wholesaler_gstno' id='wholesaler_gstno' className="form-control"></input>
                                        </div>
                                        <div className="mb-1">
                                            <label htmlFor='wholesaler_pincode' className="form-label">Pincode</label>
                                            <input type="text" name='wholesaler_pincode' id='wholesaler_pincode' className="form-control"></input>
                                        </div>
                                        <div className='mb-1 justify-content-end'>
                                            <button type="submit" className="btn btn-primary" style={{ marginTop: 30 }}>Submit</button>&nbsp;&nbsp;&nbsp;
                                            <button type="reset" className="btn btn-primary" style={{ marginTop: 30 }}>Cancel</button>
                                        </div>

                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h2 style={{ marginTop: 10 }}><center> Display Wholesaler details</center></h2>
                    <div className='card'>
                        <table className="card-table table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Email id</th>
                                    <th scope="col">Gst no</th>
                                    <th scope="col">Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="card-body">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
