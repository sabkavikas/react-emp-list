import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const [empList, setEmpList] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('empList')) {
      setEmpList(JSON.parse(localStorage.getItem('empList')));
    }
  }, []);
  return (
    <div className='container mt-5'>
      <Link to='/create' className='btn btn-success my-2'>
        Create
      </Link>
      {/* Basic Table */}
      <div className='row'>
        <div className='col'>
          <div className='card'>
            <div className='card-header bg-primary text-white text-center'>
              Employee List
            </div>
            <div className='card-body'>
              <div className='table-responsive'>
                <table className='table table-bordered'>
                  <thead>
                    <tr>
                      <th>UserName</th>
                      <th>Email</th>
                      <th>DOB</th>
                      <th>Gender</th>
                      <th>Hobbies</th>
                      <th>Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {empList.length > 0 ? (
                      empList.map((emp, index) => {
                        return (
                          <tr key={index}>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.dob}</td>
                            <td>{emp.gen}</td>
                            <td>{emp.hobbies}</td>
                            <td>{emp.phone}</td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colspan='6'>No Record Found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* Advanced Table */}
      <div className='row'>
        <div className='col'>
          <div className='card'>
            <div className='card-header bg-primary text-white text-center'>
              Employee List
            </div>
            <div className='card-body'>
              <div className='table-responsive'>
                <table className='table table-bordered'>
                  <tbody>
                    <tr>
                      <th>Name</th>
                      {empList.map((emp, index) => (
                        <td key={index}>{emp.name}</td>
                      ))}
                    </tr>
                    <tr>
                      <th>Email</th>
                      {empList.map((emp, index) => (
                        <td key={index}>{emp.email}</td>
                      ))}
                    </tr>
                    <tr>
                      <th>Date Of Birth</th>
                      {empList.map((emp, index) => (
                        <td key={index}>{emp.dob}</td>
                      ))}
                    </tr>
                    <tr>
                      <th>Gender</th>
                      {empList.map((emp, index) => (
                        <td key={index}>{emp.gen}</td>
                      ))}
                    </tr>
                    <tr>
                      <th>Hobbies</th>
                      {empList.map((emp, index) => (
                        <td key={index}>{emp.hobbies}</td>
                      ))}
                    </tr>
                    <tr>
                      <th>Phone</th>
                      {empList.map((emp, index) => (
                        <td key={index}>{emp.phone}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
