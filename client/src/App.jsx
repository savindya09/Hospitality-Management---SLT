// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Guest/home/Home';
import SettingsPage from './components/Guest/Settings';
import ProfilePage from './components/Guest/Profile';
import BillingPage from './components/Guest/Billing';
import CartPage from './components/Guest/Cart';
import NotificationPage from './components/Guest/Notification';
import Footer from './components/Guest/common/Footer';
import UserReviewsPage from './components/Guest/UserReviews';


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
                <Route path="/notifications" element={<NotificationPage />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="/user-reviews" element={<UserReviewsPage />} />

                
            </Routes>
        </Router>
    );
};

export default App;
