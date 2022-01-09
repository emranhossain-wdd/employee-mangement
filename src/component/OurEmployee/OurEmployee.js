import React, { useEffect, useState } from 'react';

const OurEmployee = () => {
    const [employees, setEmployees] = useState([]);
    const [filteredEmployee, setFilteredEmployee] = useState([]);
    const [count, setCount] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/employees?page=${page}`)
            .then(res => res.json())
            .then(data => {
                setEmployees(data)
                setFilteredEmployee(data)
            })
    }, [page]);

    useEffect(() => {
        fetch('http://localhost:5000/count')
            .then(res => res.json())
            .then(data => {
                const obj = Math.ceil(Object.values(data[0])[0] / 5);
                setCount(obj);
            })
    }, []);

    const handleSearch = e => {
        const searchText = e.target.value;
        fetch(`http://localhost:5000/searchEmployee?search=${searchText}`)
            .then(res => res.json())
            .then(data => setFilteredEmployee(data))
    }

    return (
        <div style={{ backgroundColor: "rgb(248,248,255)", height: "100vh" }}>
            <div className='container'>
                <h2 className='text-center text-success pt-5'><i className="px-2 fas fa-users"></i>Our Employee</h2>
                <div className='text-center'>
                    <input
                        onBlur={handleSearch}
                        className='rounded-3 my-3 w-50 text-center'
                        type="text"
                        placeholder='search employee by email'
                    />
                </div>
                <div className='table-responsive'>
                    <table className="table caption-top">
                        <thead>
                            <tr>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredEmployee.map((employee, i) => <tr key={i}>
                                    <td>{employee?.firstName}</td>
                                    <td>{employee?.lastName}</td>
                                    <td>{employee?.email}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                    <div className='text-center'>
                        {
                            [...Array(count).keys()].map(pn => <button className={pn === page ? 'bg-success text-white px-2 rounded-3 m-2' : 'm-2 px-2 rounded-3'} onClick={() => setPage(pn)} key={pn}>{pn + 1}</button>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurEmployee;