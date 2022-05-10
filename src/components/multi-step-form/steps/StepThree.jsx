import React from 'react'
import { Alert, AlertTitle } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';
const StepThree = () => {
  return (
    <div>
      

      <div className='successContainer my-5'>
        <CheckCircleIcon className='success'/>
        <Button variant="outlined">Login</Button>
      </div>


    </div>
  )
}

export default StepThree