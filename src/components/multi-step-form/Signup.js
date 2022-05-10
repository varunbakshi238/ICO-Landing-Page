import {useState} from 'react'

import { Stepper, Step, StepLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import InfoIcon from '@mui/icons-material/Info';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import {
    getAuth,
    createUserWithEmailAndPassword
} from 'firebase/auth'

import {
    collection,
    addDoc,
    doc,
} from 'firebase/firestore'

import {
    ref,
    uploadBytes,
    uploadBytesResumable,
    getDownloadURL
} from 'firebase/storage';




import  { app, database, storage } from '../../firebaseConfig'

import StepOne from './steps/StepOne';
import StepTwo from './steps/StepTwo';
import StepThree from './steps/StepThree';

const Signup = () => {

    const auth = getAuth();

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        country: '',
        state: '',
        dateOfBirth: '',
        document_one: null,
        document_two: null
    })

    const [error, setError] = useState(null);
  
    const [currentStep, setCurrentStep] = useState(0);


    // signup user functionality
    const request = async (newData) => {
        try{
            const collectionRef = collection(database, 'users')
            
            
            const userCredential = await createUserWithEmailAndPassword(auth, newData.email,newData.password)
            const user = userCredential.user
            
            const formData = {...newData, uid: user.uid}
            delete formData.password

            const storageRef = ref(storage, `images/${newData.document_one.name}`);
            const storageRef2 = ref(storage, `images/${newData.document_two.name}`);
            
                
            const uploadTask =  await uploadBytesResumable(storageRef, newData.document_one);
            const uploadTask2 =  await uploadBytesResumable(storageRef2, newData.document_two);

            const url = await getDownloadURL(storageRef)
            const url2 = await getDownloadURL(storageRef2)
            
            formData.image1 = url
            formData.image2 = url2

            // console.log(url)
            delete formData.document_one
            delete formData.document_two

            await addDoc(collectionRef, formData)

            handleNextStep(newData)
        } catch(error){
            console.log(error)
            console.log(error.code);
            console.log(error.message);
        }
    }

    // For moving to next step
    const handleNextStep = (newData) => {
        setData((prev) => ({...prev,  ...newData}));    
        setCurrentStep((prev) => prev+1);
    }

    // For going back to prev step
    const handlePrevStep = (newData) => {
        setData((prev) => ({...prev, ...newData}));
        setCurrentStep((prev) => prev-1);
    }

    const steps = [
        <StepOne next={handleNextStep} data={data} />,
        <StepTwo next={handleNextStep} request={request} prev={handlePrevStep } data={data} />,
        <StepThree  />
    ]

    const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
        [`&.${stepConnectorClasses.alternativeLabel}`]: {
          top: 22,
        },
        [`&.${stepConnectorClasses.active}`]: {
          [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
              'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
          },
        },
        [`&.${stepConnectorClasses.completed}`]: {
          [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
              'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
          },
        },
        [`& .${stepConnectorClasses.line}`]: {
          height: 3,
          border: 0,
          backgroundColor:
            theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
          borderRadius: 1,
        },
    }));
      
    const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        ...(ownerState.active && {
          backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
          boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
        }),
        ...(ownerState.completed && {
          backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        }),
    }));

    function ColorlibStepIcon(props) {
        const { active, completed, className } = props;
      
        const icons = {
          1: <InfoIcon />,
          2: <PersonSearchIcon />,
          3: <CheckCircleIcon />,
        };
      
        return (
          <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
          </ColorlibStepIconRoot>
        );
    }


    // const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

  
    return (
    <div className='innerContainer'>    
        <Stepper alternativeLabel activeStep={currentStep} connector={<ColorlibConnector />}>
            <Step>
                <StepLabel StepIconComponent={ColorlibStepIcon}>Basic Info</StepLabel>
            </Step>
            <Step>
                <StepLabel StepIconComponent={ColorlibStepIcon}>KYC</StepLabel>
            </Step>
            <Step>
                <StepLabel StepIconComponent={ColorlibStepIcon}>Finished</StepLabel>
            </Step>
        </Stepper>
        {steps[currentStep]}
    </div>
  )
}

export default Signup