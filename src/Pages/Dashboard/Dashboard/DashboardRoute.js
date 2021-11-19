import React from 'react';
import Navigation from '../../Home/Navigation/Navigation';
import Dashboard from './Dashboard';

const DashboardRoute = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Dashboard style={{marginTop:'200px'}}></Dashboard>
        </div>
    );
};

export default DashboardRoute;