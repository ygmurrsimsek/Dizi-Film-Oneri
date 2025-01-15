import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
    )
}

export default AppRoutes
