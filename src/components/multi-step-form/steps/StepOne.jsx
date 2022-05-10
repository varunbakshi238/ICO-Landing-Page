import React, {useEffect, useState} from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple, blue } from '@mui/material/colors';

import {Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Country, State, City }  from 'country-state-city';


import { TextFild } from '../TextField';

const StepOne =  ({next, data}) => {
    
    const [countries, setCountries] = useState(Country.getAllCountries())
    const [states, setStates] = useState();
    const [countr, setCountr]= useState('');
    
    useEffect(() => {
        const selectedCountry = countries.find(count => count.name === countr);
        setStates(State.getStatesOfCountry(selectedCountry?.isoCode));
    }, [countr])
    
    
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const ColorButton = styled(Button)(({ theme }) => ({
        borderColor: blue[500], 
        color: blue[500],
        '&:hover': {
          backgroundColor: blue[700],
        },
      }));


    const validate = Yup.object({
        firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be atleast 6 characters')
            .required('Password is required'),
        phone: Yup.string()
            .matches(phoneRegExp, 'Phone number is not valid')
            .required('number is required'),
        country: Yup.string()
            .required('Country name is required'),
        state: Yup.string()
            .required('State name is required'),
        dateOfBirth: Yup.string()
            .required('DOB is Required')
    })


    const handleSubmit = (values) => {
        next(values);
    }

  return (
    <Formik
        initialValues={data}
        validationSchema={validate}
        onSubmit={ handleSubmit}
    >
       {formik => (
        <div>
            <h1 className='my-4 font-weight-bold display-4 text-center'>Basic Info</h1>
            {/* {console.log(formik.values)} */}
            {console.log(formik)}
            <Form>
                <TextFild label='First Name' name='firstName' type='text'/>
                <TextFild label='Last Name' name='lastName' type='text'/>
                <TextFild label='Email' name='email' type='email'/>
                <TextFild label='Password' name='password' type='text'/>
                <TextFild label='Phone' name='phone' type='text'/>
                <div>
                    <TextField
                        select
                        fullWidth
                        error={formik.touched.country && formik.errors.country}
                        label="Country"
                        onBlur={()=> formik.setFieldTouched('country', true)}
                        value={formik.values.country}
                        name='country'
                        onChange={(e)=> {
                            setCountr(e.target.value);
                            formik.setFieldValue("country", e.target.value);
                            // formik.setTouched('country',true)
                        }}
                        helperText={formik.errors.country}
                        variant="standard"
                    >
                        {countries.map((option) => (
                            <MenuItem key={option.name} value={option.name}>
                             {option.name}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>

                <div >
                    <TextField
                        select
                        fullWidth
                        error={formik.touched.state && formik.errors.state}
                        label="State"
                        onBlur={()=> formik.setFieldTouched('state', true)}
                        value={formik.values.state}
                        name='state'
                        onChange={(e)=> {
                            formik.setFieldValue("state", e.target.value);
                        }}
                        helperText={formik.errors.state}
                        variant="standard"
                    >
                        {states?.map((option) => (
                            <MenuItem key={option.name} value={option.name}>
                                {option.name}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <TextFild label='Date Of Birth' name='dateOfBirth' type='date'/>
                <ColorButton className='btn btn-dark mt-3 d-block m-auto' type='submit' variant="outlined">Next Step</ColorButton>
                {/* <button className='btn btn-dark mt-3' type='submit'>Next Step</button> */}
            </Form>
        </div>
       )}   
    </Formik>
  )
}

export default StepOne
