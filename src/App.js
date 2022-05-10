import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import { PrivateRoute } from './components/PrivateRoute'
import SignUp from './pages/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/utils/partials.css'

import './styles/responsive.css'

function App(){
    return(
        
        <Router>
            <Routes>
                <Route path="/" element={<PrivateRoute />}>
                    <Route path='/' element={<Home />} />
                </Route>
                <Route path="/sign-up" element={<SignUp />}/>
                <Route path="/sign-in" element={<SignUp />}/>

            </Routes>
        </Router>
    )
}

export default App;