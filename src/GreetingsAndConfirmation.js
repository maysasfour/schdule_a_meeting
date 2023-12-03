
import React, { useState } from 'react';
import VerifyInformation from './VerifyInformation';
const JobOpportunityDetails = () => {
  const jobDetails = {
    title: 'Software Engineer',
    industry: 'Technology',
    requiredSkills: ['React', 'Node.js', 'JavaScript'],
    jobDuties: 'Develop and maintain web applications.',
    specificRequirements: 'Bachelor\'s degree in Computer Science or equivalent.',
  };

  return (
    <div style={styles.detailsContainer}>
      <h2>Job Opportunities Details:</h2>
      <p><strong>Title:</strong> {jobDetails.title}</p>
      <p><strong>Industry:</strong> {jobDetails.industry}</p>
      <p><strong>Required Skills:</strong> {jobDetails.requiredSkills.join(', ')}</p>
      <p><strong>Job Duties:</strong> {jobDetails.jobDuties}</p>
      <p><strong>Specific Requirements:</strong> {jobDetails.specificRequirements}</p>
    </div>
  );
};

const GreetingsAndConfirmation = ({ onNextPage }) => {
  const [candidateName, setCandidateName] = useState('');
  const [lookingForJob, setLookingForJob] = useState(null);

  const handleConfirmation = (confirmation) => {
    setLookingForJob(confirmation);
  };

  const handleNextPage = () => {
    onNextPage(); 
  };

  return (
    <div style={styles.container}>

      <p>Hello, Mays {candidateName}!</p>
      <p>Are you actively looking for a job?</p>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => handleConfirmation(true)}>Yes</button>
        <button style={styles.button} onClick={() => handleConfirmation(false)}>No</button>
      </div>
      {lookingForJob === false && (
        <p style={styles.message}>We'll reach out to you again next month.</p>
      )}
      {lookingForJob && (
        <div>
          <JobOpportunityDetails />
          <button style={styles.button} onClick={handleNextPage}>Next</button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#5314ff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  detailsContainer: {
    textAlign: 'left',
    maxWidth: '600px',
    marginBottom: '20px',
  },
  message: {
    marginBottom: '20px',
  },
};

export default GreetingsAndConfirmation;
