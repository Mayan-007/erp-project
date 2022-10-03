import React from 'react'

const Employee = () => {
    return (
        <div>
            <div className="container">
                <h2><center>Employee Details</center></h2>
                <div className='card'>
                    {/* dhruv hola shange*/}
                    <div className="card-body">
                        <form>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className="mb-1">
                                        <label htmlFor="name" className="form-label">Name </label>
                                        <input type="text" className="form-control"></input>
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="address" className="form-label">Address </label>
                                        <input type="textarea" className="form-control"></input>
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="phone" className="form-label">Phone </label>
                                        <input type="text" className="form-control"></input>
                                    </div>
                                    {/* <div className="mb-1">
                                    <label htmlFor="discount" className="form-label">Discount</label>
                                    <input type="text" className="form-control"></input>
                                </div> */}

                                </div>
                                <div className='col-6'>
                                    {/* <div className="mb-1">
                                    <label htmlFor="category" className="form-label">Category</label>
                                    <select  className="form-control">
                                        <option>Shoe</option>
                                        <option>Sandels</option>
                                    </select>
                                    <input type="number" className="form-control"></input> 
                                </div> */}
                                    <div className="mb-1">
                                        <label htmlFor="joindate" className="form-label">Join Date</label>
                                        <input type="date" className="form-control"></input>
                                    </div>
                                    <div className="mb-1">
                                        <label htmlFor="salary" className="form-label">Salary</label>
                                        <input type="number" className="form-control"></input>
                                    </div>
                                    <div className='mb-1'>
                                        <button type="submit" className="btn btn-primary">Submit</button>&nbsp;&nbsp;&nbsp;
                                        <button type="reset" className="btn btn-primary">Cancel</button>

                                    </div>


                            </form>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <br></br>
                    <h2 style={{ marginTop: 10 }}><center> Display Employee Details</center></h2>
                    <br></br>
                    <div className='card'>
                        <table className="card-table table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Join Date</th>
                                    <th scope="col">Salary</th>
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


                        </form>

                    </div>

                </div>
            </div>
        </div>
    )
}



export default Employee

