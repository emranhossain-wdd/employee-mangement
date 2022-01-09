import React from 'react';
import { useForm } from "react-hook-form";
import Draginput from '../Draginput/Draginput';


const AddEmployee = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addEmployee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.affectedRows) {
                    alert('Employee Added Successfully')
                    reset()
                }
            })
    };

    return (
        <div className='container text-center mb-5'>
            <div className='row'>
                <Draginput />
                <h3 className='mb-5'>--- or ---</h3>
                <h2><i className="px-2 fas fa-user-plus"></i>Add an Employee</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='col-7 border border-3 border-success py-2 mt-4 rounded-3' {...register("firstName", { required: true })} placeholder='First Name' /> <br />
                    {errors.firstName && <span>This field is required</span>} <br />

                    <input className='col-7 border border-3 border-success py-2 mt-4 rounded-3' {...register("lastName", { required: true })} placeholder='Last Name' /> <br />
                    {errors.lastName && <span>This field is required</span>} <br />

                    <input className='col-7 border border-3 border-success py-2 mt-4 rounded-3' {...register("email", { required: true })} placeholder='Employee Email Address' type="email" /> <br />
                    {errors.email && <span>This field is required</span>}
                    <br />
                    <input className='col-7 border border-3 border-success py-2 mt-4 rounded-3 btn-success' type="submit" value="Add an Employee" />
                </form>
            </div>
        </div>
    );
};

export default AddEmployee;