import React from 'react'
import { Container } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'

const Form2 = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: values => {
            console.log('Form data', values)
            alert(JSON.stringify(values, null, 2))
        },
        // validate: values => {
        //     let errors = {}
        //     if (!values.name) errors.name = 'Name is required'
        //     let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        //     if (!emailRegex.test(values.email)) errors.email = 'Invalid email format'
        //     if (!values.email) errors.email = 'Email is required'
        //     if (!values.phone) errors.phone = 'Phone is required'
        //     if (!values.password) errors.password = 'Password is required'
        //     if (!values.confirmPassword) errors.confirmPassword = 'Confirm Password is required'
        //     if (values.password !== values.confirmPassword) errors.confirmPassword = 'Password and Confirm Password must be same'
        //     return errors
        // }
        validationSchema: yup.object({
            name: yup.string().required('Name is required'),
            email: yup.string().email('Invalid email format').required('Email is required'),
            phone: yup.string().required('Phone is required'),
            password: yup.string().required('Password is required'),
            confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Password and Confirm Password must be same').required('Confirm Password is required')
        })
    })

    return(
        <div>
            <Container maxWidth='false' sx={{ padding: '15px' }} style={{ backgroundColor: "skyblue" }}>
                <h1>Form using useFormik()</h1>
            </Container>
            <form onSubmit={formik.handleSubmit}>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    {formik.errors.name && formik.touched.name && (
                        <div className="invalid-feedback">{formik.errors.name}</div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.errors.email && formik.touched.email && (
                        <div className="invalid-feedback">{formik.errors.email}</div>
                    )}
                </div>

                <div className='form-group'>
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                    />
                    {formik.errors.phone && formik.touched.phone && (
                        <div className="invalid-feedback">{formik.errors.phone}</div>
                    )}
                </div>

                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {formik.errors.password && formik.touched.password && (
                        <div className="invalid-feedback">{formik.errors.password}</div>
                    )}
                </div>

                <div className='form-group'>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                    />
                    {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                        <div className="invalid-feedback">{formik.errors.confirmPassword}</div>
                    )}
                </div>

                {/* // make a submit button */}
                <button type="submit">Submit</button>
            </form>
        </div >
    )
}

export default Form2