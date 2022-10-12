import React, { useState, useEffect } from 'react'

const Stock = () => {

    const [stocks, setStocks] = React.useState([])

    useEffect(() => {
        fetch('http://localhost:4000/api/stock/fetchall')
            .then(response => response.json())
            .then(data => setStocks(data.data))
    }, [])

    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const filteredStocks = stocks.filter(stock => {
        return stock.article_no.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div>
            <div className="container">
                <h2 style={{ marginTop: 10 }}><center> Stock display</center></h2>
                <div className='card'>
                    <div className='card-header'>
                        <div className='row'>
                            <div className='col-4 offset-8'>
                                <input type="text" className="form-control" placeholder="Search" onChange={handleSearch} />
                            </div>
                        </div>
                    </div>
                    <div className="card-body" style={{ height: '500px', overflowY: 'scroll' }} >
                        <table className="card-table table">
                            <thead>
                                <tr>
                                    <th className='text-center' scope="col">Brand</th>
                                    <th className='text-center' scope="col">Article number</th>
                                    <th className='text-center' scope="col">Size</th>
                                    <th className='text-center' scope="col">Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredStocks && filteredStocks.map((stock, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className='text-center'>{stock.brand}</td>
                                            <td className='text-center'>{stock.article_no}</td>
                                            <td className='text-center'>{stock.size}</td>
                                            <td className='text-center'>{stock.quantity}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>

    )

}



export default Stock
