import React, { Component } from 'react';

export default class Employee extends Component {
    render() {
        return (
            <div>
                <div  className="container">
                 <h2><center>Employee Details</center></h2>
                <div className='card'>
                   {/* dhruv hola shange*/}
                    <div  className="card-body">
                        <form>
                            <div className='row'>
                            <div className='col-md-6'>
                                <div className="mb-1">
                                    <label for="name"  className="form-label">Name </label>
                                    <input type="text"  className="form-control"></input>
                                </div>
                                <div className="mb-1">
                                    <label for="address" className="form-label">Address </label>
                                    <input type="textarea" className="form-control"></input>
                                </div>
                                <div className="mb-1">
                                    <label for="phone" className="form-label">Phone </label>
                                    <input type="text" className="form-control"></input>
                                </div>
                                {/* <div className="mb-1">
                                    <label for="discount" className="form-label">Discount</label>
                                    <input type="text" className="form-control"></input>
                                </div> */}
                                
                              </div>
                              <div className='col-6'>
                              {/* <div className="mb-1">
                                    <label for="category" className="form-label">Category</label>
                                    <select  className="form-control">
                                        <option>Shoe</option>
                                        <option>Sandels</option>
                                    </select>
                                    <input type="number" className="form-control"></input> 
                                </div> */}
                                <div className="mb-1">
                                    <label for="joindate" className="form-label">Join Date</label>
                                    <input type="date" className="form-control"></input>
                                </div>
                                <div className="mb-1">
                                    <label for="salary" className="form-label">Salary</label>
                                    <input type="number" className="form-control"></input>
                                </div>
                                <div className='mb-1'>
                                <button type="submit" class="btn btn-primary">Submit</button>&nbsp;&nbsp;&nbsp;
                                <button type="reset" class="btn btn-primary">Cancel</button>
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
}
