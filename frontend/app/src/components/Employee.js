import React, { useState, useEffect } from 'react'
import { Col, Row, Form } from "react-bootstrap";
import DataTable from 'react-data-table-component';

const Employee = ({ showAlert }) => {

    const [name, setName] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const [phone, setPhone] = useState("");

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }

    const [address, setAddress] = useState("");

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }

    const [salary, setSalary] = useState("");

    const handleSalaryChange = (e) => {
        setSalary(e.target.value);
    }

    const [joindate, setJoindate] = useState("");

    const handleJoindateChange = (e) => {
        setJoindate(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = 'http://localhost:4000/api/employee/addemployee';
        const data = {
            employee_name: name,
            employee_phone: phone,
            employee_address: address,
            employee_salary: salary,
            employee_joining_date: joindate
        }
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (result.status === 'success') {
            showAlert(result.message, result.status);
            cancelForm();
            getAllEmployees();
        } else if (result.status === 'warning') {
            showAlert(result.message, result.status);
        } else if (result.status === 'danger') {
            showAlert(result.errors[0].msg, result.status);
        }
    }

    const cancelForm = () => {
        setName("");
        setPhone("");
        setAddress("");
        setSalary("");
        setJoindate("");
    }

    const [employees, setEmployees] = useState([]);

    const getAllEmployees = async () => {
        const url = 'http://localhost:4000/api/employee/getallemployee';
        const response = await fetch(url);
        const result = await response.json();
        setEmployees(result.data);
    }

    useEffect(() => {
        getAllEmployees();
        // eslint-disable-next-line
    }, [])

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Mobile No',
            selector: row => row.phone,
        },
        {
            name: 'Salary',
            selector: row => row.salary,
        },
        {
            name: 'Joining Date',
            selector: row => row.joining_date.slice(0, 10),
        },
    ];


    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const filteredEmployees = employees.filter(employee => {
        return employee.name.toLowerCase().includes(search.toLowerCase());
    })

    return (
        <div>
            <div className="container">
                <h2><center>Employee details</center></h2>
                <div className='card'>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column md="2" htmlFor='employee_name'>
                                            Name
                                        </Form.Label>
                                        <Col md="10">
                                            <Form.Control
                                                type='text'
                                                name='employee_name'
                                                value={name}
                                                onChange={handleNameChange}
                                                id='employee_name'
                                                placeholder="Name"
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column md="2" htmlFor='employee_phone'>
                                            Phone
                                        </Form.Label>
                                        <Col md="10">
                                            <Form.Control
                                                type="text"
                                                name='employee_phone'
                                                id='employee_phone'
                                                placeholder="Phone number"
                                                value={phone}
                                                onChange={handlePhoneChange}
                                            />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column md="2" htmlFor='employee_address'>
                                            Address
                                        </Form.Label>
                                        <Col md="10">
                                            <Form.Control type="text-area"
                                                name='employee_address'
                                                id='employee_address'
                                                className="form-control"
                                                placeholder='Address'
                                                value={address}
                                                onChange={handleAddressChange}
                                            />
                                        </Col>
                                    </Form.Group>
                                </div>
                                <div className='col-6'>
                                    <Form.Group as={Row} className="mb-3">
                                        <Form.Label column md="2" htmlFor='employee_date'>
                                            Date
                                        </Form.Label>
                                        <Col md="10">
                                            <Form.Control type="date"
                                                name='employee_joining_date'
                                                id='employee_joining_date'
                                                className="form-control"
                                                value={joindate}
                                                onChange={handleJoindateChange}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" >
                                        <Form.Label column md="2" htmlFor='employee_salary'>
                                            Salary
                                        </Form.Label>
                                        <Col md="10">
                                            <Form.Control type="text"
                                                name='employee_salary'
                                                id='employee_salary'
                                                className="form-control"
                                                placeholder='Salary'
                                                value={salary}
                                                onChange={handleSalaryChange}
                                            />
                                        </Col>
                                    </Form.Group>

                                    <div className='mb-1 justify-content-end' style={{ textalign: 'right' }}>
                                        <button type="submit" className="btn btn-primary" style={{ marginLeft: '69%' }}>Submit</button>&nbsp;&nbsp;&nbsp;
                                        <button type="reset" className="btn btn-primary"  >Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2 style={{ marginTop: 10 }}><center> Display Employees details</center></h2>
                <div className='card-header'>
                    <div className='row'>
                        <div className='col-4 offset-8'>
                            <input type="text" className="form-control" placeholder="Search by employee name" onChange={handleSearch} />
                        </div>
                    </div>
                </div>
                <div className="card-body" style={{ height: '300px', overflowY: 'scroll' }} >
                    <DataTable
                        columns={columns}
                        data={filteredEmployees}
                        highlightOnHover
                        pagination
                    />
                </div>
            </div>
        </div>
    )
}

export default Employee
