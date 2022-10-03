import React from 'react'

const Alert = ({ alert }) => {

    const capitalize = (word) => {
        let lower = word.toLowerCase()
        return lower[0].toUpperCase() + lower.slice(1);
    }

    return (
        <div style={{ height: '50px' }}>
            {alert && <div className={`alert alert-${alert.type}`} role="alert" >
                <strong>{capitalize(alert.type)}!</strong> {alert.message}
            </div>}
        </div>
    )
}

export default Alert
