import { Route, Routes } from 'react-router-dom'
import Landing from '../pages/Landing/Landing'
import Homepage from '../pages/Homepage/Homepage'
import Profile from '../pages/Profile/Profile'
import SignIn from '../pages/SignIn/SignIn'



export const RouterPaths = () => {

    return (
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/SignIn' element={<SignIn />} />
            <Route path='/homepage' element={<Homepage />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
    )
}

