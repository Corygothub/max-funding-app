import React, { useState } from 'react';

export default function ClientDashboard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    creditScore: '',
    fundingAmount: '',
    documents: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (e) => {
    setFormData({ ...formData, documents: e.target.files });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>MAX FUNDING Client Dashboard</h1>

      {step === 1 && (
        <div>
          <label>Name</label>
          <input name="name" value={formData.name} onChange={handleChange} /><br />

          <label>Email</label>
          <input name="email" value={formData.email} onChange={handleChange} /><br />

          <label>Business Name</label>
          <input name="businessName" value={formData.businessName} onChange={handleChange} /><br />

          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <label>Credit Score</label>
          <input name="creditScore" value={formData.creditScore} onChange={handleChange} /><br />

          <label>Desired Funding Amount ($)</label>
          <input name="fundingAmount" value={formData.fundingAmount} onChange={handleChange} /><br />

          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <label>Upload Bank Statements & Documents</label>
          <input type="file" multiple onChange={handleFileUpload} /><br />

          <button onClick={handleNext}>Submit</button>
        </div>
      )}

      {step === 4 && (
        <div>
          <h2>Thank you, {formData.name}!</h2>
          <p>Your information has been submitted. We will analyze your data and provide pre-qualification results shortly.</p>
        </div>
      )}
    </div>
  );
}


