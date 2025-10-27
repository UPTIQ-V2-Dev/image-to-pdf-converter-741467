import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConverterPage } from './pages/ConverterPage';

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path='/'
                    element={<ConverterPage />}
                />
            </Routes>
        </Router>
    );
};
