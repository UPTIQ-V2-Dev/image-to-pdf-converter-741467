import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConverterPage } from './pages/ConverterPage';
import { LoginPage } from './pages/LoginPage';

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path='/login'
                    element={<LoginPage />}
                />
                <Route
                    path='/'
                    element={<ConverterPage />}
                />
            </Routes>
        </Router>
    );
};
