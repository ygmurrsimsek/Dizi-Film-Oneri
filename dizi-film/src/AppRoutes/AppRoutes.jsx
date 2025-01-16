import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/SearchPage';
import Watched from '../components/Watched';
function AppRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='/add' element={<SearchPage />} />
                <Route path='/watched' element={<Watched />} />
            </Routes>
        </div>
    )
}

export default AppRoutes
