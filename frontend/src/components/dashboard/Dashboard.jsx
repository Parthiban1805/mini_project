import React from 'react';
import './Dashboard.css';
import Alerts from '../alert/Alert';
import KPIForm from '../kpiform/kpiform';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Climate Action Dashboard</h1>
            <div className="dashboard-content">
                <div className="kpi-section">
                    <KPIForm />
                </div>
                <div className="alerts-section">
                    <Alerts />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;