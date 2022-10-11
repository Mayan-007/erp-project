import React from 'react'

const Home = () => {
    return (
        <div>
            <div className='container' style={{marginTop:'15%'}}>
                <div className='row'>
                    <div className='col-md-6'>
                          <div className='card' style={{height:'300px'}}>
                            <div className='card-body' >
                            <h3><center>Total Sales Monthly</center></h3>
                            </div>
                            
                          </div>
                    </div>
                    <div className='col-md-6'>
                    <div className='card'style={{height:'300px'}}>
                        <div className='card-body'>
                        <h3><center>Total Purchase monthly</center></h3>
                        </div>
                    
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
