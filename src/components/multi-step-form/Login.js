import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {
    getAuth,
    signInWithEmailAndPassword

} from 'firebase/auth'


const Login = () => {
    
    const auth = getAuth()
    const [data, setData] = useState({})

    const navigate = useNavigate()
    const handleChange = (e) => {
        setData((prevState) => (
            {
                ...prevState,
                [e.target.id]: e.target.value
            }
        ));
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const userCredentials = await signInWithEmailAndPassword(auth, data.username, data.password);

            if(userCredentials.user){
                navigate('/')
            }
        }catch(error){
            console.log(error);
            alert('BAD USER CREDENTIALS');
        }
    
        
    }

    return(
        <div className='innerContainer'>
            <h1>Login</h1>
            <div className='loginForm'>
                <form onSubmit={(e) => handleSubmit(e) }>
                    <div className='mb-2'>
                        <TextField 
                            fullWidth
                            label='Username' 
                            variant="standard" 
                            autoComplete='off'
                            id="username"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className='mb-2'>
                        <TextField 
                            fullWidth
                            label='Password' 
                            variant="standard"
                            autoComplete='off'
                            id="password"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <Button variant="outlined" type="submit" >Login</Button>
                </form>
            </div>
        </div>
    )
}

export default Login