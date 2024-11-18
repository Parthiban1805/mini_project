import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import KPIForm from './components/kpiform/kpiform';
import RiskAssessment from './components/riskassessment/RiskAssessment';
import Alerts from './components/alert/Alert';
import RiskForm from './components/riskform/riskform'
import ComplianceForm from './components/complianceform/ComplianceForm';
import EnergyForm from './components/energyusageform/EnergyUsageForm';
import AlertForm from './components/alertform/AlertForm';
import './App.css';


const App = () => {
    return (
        <Router>
            <div className="app">
               
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/kpi-form" element={<KPIForm />} />
                        <Route path="/risk-assessment" element={<RiskAssessment />} />
                        <Route path="/risk-form" element={<RiskForm/>} />
                        <Route path="/compliance-form" element={<ComplianceForm/>} />
                        <Route path="/energy-form" element={<EnergyForm/>} />
                        <Route path="/alert-form" element={<AlertForm/>} />

                        <Route path="/alerts" element={<Alerts />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
