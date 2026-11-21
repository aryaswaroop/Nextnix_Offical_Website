
import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout() {
    return (
        <div className="relative flex min-h-screen flex-col">
            {/* Website Navigation */}
            <Navbar />

            {/* Page Content */}
            <main className="relative z-10 flex-1">
                <Outlet />
            </main>

            {/* Website Footer */}
            <Footer />
        </div>
    );
}
