import React, { Component } from 'react'

export default class Invoice extends Component {
    render() {
        return (
            <div  className="container">
                 <h2><center>Generate Invoice</center></h2>
                <div className='card'>
                   
                    <div  className="card-body">
                        <form>
                            <div className='row'>
                            <div className='col-md-6'>
                                <div className="mb-1">
                                    <label for="name"  className="form-label">Name</label>
                                    <input type="text"  className="form-control"></input>
                                </div>
                                <div className="mb-1">
                                    <label for="phone" className="form-label">Phone </label>
                                    <input type="text" className="form-control"></input>
                                </div>
                                <div className="mb-1">
                                    <label for="brand" className="form-label">Brand</label>
                                    <input type="text" className="form-control"></input>
                                </div>
                                <div className="mb-1">
                                    <label for="discount" className="form-label">Discount</label>
                                    <input type="text" className="form-control"></input>
                                </div>
                                
                              </div>
                              <div className='col-6'>
                              <div className="mb-1">
                                    <label for="category" className="form-label">Category</label>
                                    <select  className="form-control">
                                        <option>Shoe</option>
                                        <option>Sandels</option>
                                    </select>
                                    {/* <input type="number" className="form-control"></input> */}
                                </div>
                                <div className="mb-1">
                                    <label for="quantity" className="form-label">Quantity</label>
                                    <input type="number" className="form-control"></input>
                                </div>
                                <div className="mb-1">
                                    <label for="size" className="form-label">Size</label>
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
        )
    }
}
