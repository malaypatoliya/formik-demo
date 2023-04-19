import React from 'react'
import { Formik, Form, Field } from 'formik'

const Form1 = () => {
    const initialValues = {
        name: "",
        email: "",
        password: "",
        gender: "",
        date: "",
        income: "",
        textarea: "",
        social: {
            facebook: "",
            twitter: ""
        },
        checkbox: []
    }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(values)
                }}
                
            >
                <Form>

                    {/* name */}
                    <label htmlFor="name">Name: </label>
                    <Field name="name" type="text" id="name" />
                    <br /><br />

                    {/* email */}
                    <label htmlFor="email">Email: </label>
                    <Field name="email" type="email" id="email" />
                    <br /><br />

                    {/* password */}
                    <label htmlFor="password">Password: </label>
                    <Field name="password" type="password" id="password" />
                    <br /><br />

                    {/* radio buttons */}
                    <label htmlFor="gender">Gender: </label>
                    <br />
                    <label htmlFor="male">Male</label>
                    <Field name="gender" value="male" type="radio" id="male" />
                    <label htmlFor="female">Female</label>
                    <Field name="gender" value="female" type="radio" id="female" />
                    <br /><br />

                    {/* date picker */}
                    <label htmlFor="date">Date: </label>
                    <Field name="date" type="date" id="date" />
                    <br /><br />

                    {/* select field */}
                    <label htmlFor="select">Income: </label>
                    <Field name="income" as="select" id="select">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Field>
                    <br /><br />

                    {/* textarea */}
                    <label htmlFor="textarea">Textarea: </label>
                    <Field name="textarea" as="textarea" id="textarea" />
                    <br /><br />

                    {/* social media */}
                    <label htmlFor="social">Social Media: </label>
                    <br />
                    <label htmlFor="facebook">Facebook: </label>
                    <Field name="social.facebook" type="text" id="facebook" />
                    <br /><br />
                    <label htmlFor="twitter">Twitter: </label>
                    <Field name="social.twitter" type="text" id="twitter" />
                    <br /><br />

                    {/* checkbox */}
                    <label htmlFor="checkbox">Checkbox: </label>
                    <br />
                    <label htmlFor="check1">Check 1</label>
                    <Field name="checkbox[0]" type="checkbox" id="check1" />
                    <br />
                    <label htmlFor="check2">Check 2</label>
                    <Field name="checkbox[1]" type="checkbox" id="check2" />
                    <br /><br />




                    {/* submit btn */}
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Form1