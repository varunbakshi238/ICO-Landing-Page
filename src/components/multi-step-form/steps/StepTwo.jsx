import React from 'react'
import {Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';

const StepTwo = ({next, request, data, prev}) => {

    const SUPPORTED_FORMATS = [
        "image/jpg",
        "image/jpeg",
        "image/gif",
        "image/png"
    ];
    
    
    const validate = Yup.object({
        document_one: Yup.mixed()
            .nullable()
            .required()
            .test(
                'FILE_FORMAT',
                'Unsupported Format',
                value => value && SUPPORTED_FORMATS.includes(value.type)
            ),
        document_two: Yup.mixed()
            .required('Required')
            .test(
                'fileFormat',
                'Unsupported Format',
                value => value && SUPPORTED_FORMATS.includes(value.type)
            )
    })

    const handleSubmit = (values) => {
        request(values)
        // next(values, true)       

    }

    

  return (
      <>
    <Formik
        initialValues={data}
        validationSchema={validate}
        onSubmit={ handleSubmit}
    >
       {(formik) => (
        <div>
            <h1 className='my-4 font-weight-bold display-4 text-center'>KYC</h1>
            {/* {console.log(formik.values)} */}
            {/* {console.log(formik)} */}
            <Form>
                <div className='mb-4'>
                    <label htmlFor='document_one'>Document One</label>
                    <input className={`form-control shadow-none`} type="file" onChange={(event) => {
                        formik.setFieldValue("document_one", event.target.files[0]);
                        // formik.handleChange();
                    }} />
                    <ErrorMessage component='div' className='error' name='document_one'/>
                </div>

                <div className='mb-2'>
                    <label htmlFor='document_two'>Document Two</label>
                    <input className={`form-control shadow-none`} type="file" onChange={(event) => {
                        formik.setFieldValue("document_two", event.target.files[0]);
                    }} />
                    <ErrorMessage component='div' className='error' name='document_two'/>
                </div>

                <div className='d-flex justify-content-between'>
                    <button className='btn btn-dark mt-3' type='button' onClick={() => prev(formik.value)}>Prev Step</button>
                    <button className='btn btn-dark mt-3 ml-auto' type='submit'>Sign Up</button>
                </div>
            </Form>
        </div>
       )}   
    </Formik>
    <p className='mt-3'>Note: Documents should have valid date</p>
</>
  )
}

export default StepTwo;




