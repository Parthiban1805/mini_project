import React, { useState } from 'react';
import axios from 'axios';
import './ComplianceForm.css';

const ComplianceForm = () => {
    const [compliance, setCompliance] = useState({
        emissionStandard: '',
        complianceGoal: '',
        complianceDeadline: '',
        budgetAllocated: '',
    });

    const handleChange = (e) => {
        setCompliance({ ...compliance, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/compliance', compliance);
            console.log('Compliance data saved:', response.data);
            setCompliance({
                emissionStandard: '',
                complianceGoal: '',
                complianceDeadline: '',
                budgetAllocated: '',
            });
        } catch (error) {
            console.error('Error saving compliance data:', error);
        }
    };

    return (
        <form className="compliance-form" onSubmit={handleSubmit}>
            <h2>Compliance Data Form</h2>
            <label htmlFor="emissionStandard">Emission Standard:</label>
            <input
                type="text"
                name="emissionStandard"
                placeholder="Enter emission standard"
                value={compliance.emissionStandard}
                onChange={handleChange}
            />

            <label htmlFor="complianceGoal">Compliance Goal (%):</label>
            <input
                type="number"
                name="complianceGoal"
                placeholder="Enter compliance goal"
                value={compliance.complianceGoal}
                onChange={handleChange}
            />

            <label htmlFor="complianceDeadline">Compliance Deadline:</label>
            <input
                type="date"
                name="complianceDeadline"
                value={compliance.complianceDeadline}
                onChange={handleChange}
            />

            <label htmlFor="budgetAllocated">Budget Allocated ($):</label>
            <input
                type="number"
                name="budgetAllocated"
                placeholder="Enter allocated budget"
                value={compliance.budgetAllocated}
                onChange={handleChange}
            />

            <button type="submit">Save Compliance Data</button>
        </form>
    );
};

export default ComplianceForm;
