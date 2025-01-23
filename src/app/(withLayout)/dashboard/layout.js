import Footer from '@/Components/Shared/Footer';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div>
            {children}
            <Footer />
        </div>
    );
};

export default DashboardLayout;