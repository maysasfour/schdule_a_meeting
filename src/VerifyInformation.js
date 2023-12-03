import React, { useState } from 'react';

const VerifyInformation = ({ onVerification, onStartScreening }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    termsAccepted: false,
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = () => {
    if (formData.termsAccepted) {
      onVerification(formData);
      onStartScreening();
    } else {
      alert('Please accept the terms and conditions.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ backgroundColor: '#646a7c', padding: '10px', marginBottom: '10px' }}>
        <p style={{ fontFamily: 'adobe-clean sans-serif', fontSize: '24pt', fontWeight: 'regular', color: 'white' }}>Confirm your information</p>
      </div>
      <div style={{ marginBottom: '20px', width: '80%', maxWidth: '600px' }}>
        <h2 style={{ fontFamily: 'adobe-clean sans-serif', fontSize: '25pt', fontWeight: 'bold', textAlign: 'center' }}>Please validate & update all the Following information carefully</h2>
        <form style={{ backgroundColor: '#f1f2f4', padding: '20px' }}>
          <div className="wave-group" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <label className="label" style={{ width: '48%' }}>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input"
                style={{ width: '100%' }}
              />
              <span className="bar"></span>
            </label>
            <label className="label" style={{ width: '48%' }}>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input"
                style={{ width: '100%' }}
              />
              <span className="bar"></span>
            </label>
          </div>
          <div className="wave-group" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <label className="label" style={{ width: '48%' }}>
              LinkedIn Profile:
              <input
                type="text"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                className="input"
                style={{ width: '100%' }}
              />
              <span className="bar"></span>
            </label>
            <label className="label" style={{ width: '48%' }}>
              Phone:
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input"
                style={{ width: '100%' }}
              />
              <span className="bar"></span>
            </label>
          </div>
          <div className="wave-group" style={{ marginBottom: '10px' }}>
            <label className="label" style={{ width: '100%' }}>
              Browse your files to upload your Resume:
              <input
                type="file"
                name="resume"
                onChange={handleChange}
                className="input"
                style={{ width: '100%', border: 'none', background: 'transparent' }}
              />
              <span className="bar"></span>
            </label>
          </div>
          <label className="label" style={{ marginBottom: '10px' }}>
            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
            By updating your information, you confirm the privacy policy agreement
          </label>
          <button type="button" onClick={handleSubmit} style={{ width: '100%', backgroundColor: '#5314ff', color: 'white', fontSize: '16pt', marginTop: '20px' }}>
            Start Screening
          </button>
        </form>
      </div>
      <div style={{ textAlign: 'center', width: '80%', maxWidth: '600px', marginBottom: '20px' }}>
        <p>Why am I receiving this invitation?</p>
        <p>This invitation is automatically sent to you once a job opportunity matches your public profile to invite you for the job hiring process. To stop receiving these emails, please send an "unsubscribe" email to jobtalents@talentspace.al</p>
      </div>
    </div>
  );
}

export default VerifyInformation;
