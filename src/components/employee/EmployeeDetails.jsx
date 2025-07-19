import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const EmployeeDetails = () => {
    const { id } = useParams();
    const employee = useSelector((store) => store.employee.employees.find((emp) => emp.empId === id));
    if (!employee) return <div style={{ padding: 3 }}>Employee not found</div>
    console.log(employee);
    return (
        <div>EmployeeDetails</div>
    )
}

export default EmployeeDetails