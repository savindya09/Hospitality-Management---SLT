// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Guest/Home';
import SettingsPage from './components/Guest/Settings';
import ProfilePage from './components/Guest/Profile';
import BillingPage from './components/Guest/Billing';
import CartPage from './components/Guest/Cart';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/billing" element={<BillingPage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </Router>
    );
};

export default App;
