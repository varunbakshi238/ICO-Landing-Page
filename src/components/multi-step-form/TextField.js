import { ErrorMessage, useField } from 'formik';
import TextField from '@mui/material/TextField';

export const TextFild = ({label, ...props}) => {

    const [field, meta] = useField(props);  
    // console.log(field, meta)

  return (
    <div className='mb-2'>
      <TextField 
        id="standard-basic" 
        fullWidth
        error={meta.touched && meta.error}
        helperText={meta.touched&&meta.error}
        label={label} 
        variant="standard" 
        {...field}{...props}
        autoComplete='off'
      />
    </div>
  )
}
