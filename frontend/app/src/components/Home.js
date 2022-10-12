import React from 'react'

const Home = () => {
    return (
        <div>
            <div className='container' >
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card' style={{ marginTop: '5%', height: '271px' }}>
                            <div className='card-header' >
                            <h3><center>Monthly sales</center></h3>
                            </div>
                           
                        </div>
                        <div className='card' style={{ marginTop: '5%', height: '271px' }}>
                            <div className='card-header' >
                                <h3><center>Daily sales</center></h3>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='card' style={{ marginTop: '5%', height: '271px' }}>
                            <div className='card-header' >
                                <h3><center>Monthly purchase</center></h3>
                            </div>

                        </div>
                        <div className='card' style={{ marginTop: '5%', height: '271px' }}>
                            <div className='card-header' >
                                <h3><center>Daily purchase</center></h3>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
