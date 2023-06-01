
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../feature/components/container/login'
import RegistrationAuth from '../feature/components/container/registration_auth'
const RouteGobuy = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} /> {/* Login como página principal */}
                    <Route path="/registro" element={<RegistrationAuth />} /> {/* Ruta para el registro */}
                </Routes>
            </BrowserRouter>        
        </>
    );
}

export default RouteGobuy;
