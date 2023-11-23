import React, { useState } from 'react';
import './contactus.css';

export default function ContactUs() {
  const initialFormData = {
    first_name: '',
    last_name: '',
    id: '',
    reason: 'sick',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [message, setMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage('Thank You, Cause Submitted, Waiting for response!');
    // Assuming the request is pending after submission
    setRequestStatus('pending');
  };

  const handleAccept = () => {
    setMessage('Accepted!');
    // Set status to 'accepted'
    setRequestStatus('accepted');
  };

  const handleDecline = () => {
    setMessage('Declined!');
    // Set status to 'declined'
    setRequestStatus('declined');
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="first_name">First Name:</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="last_name">Last Name:</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="id">ID:</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={(e) => setFormData({ ...formData, id: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="reason">Reason:</label>
            <select
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              required
            >
              <option value="sick">Sick</option>
              <option value="travel">Travel</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>

        {message && <p className='Feedback-Message'>{message}</p>}
      </div>

      {requestStatus === 'pending' && (
        <div className='Admin-View'>
          <h2>Admin View</h2>
          <p>
            <strong>Name:</strong> {formData.first_name} {formData.last_name}<br />
            <strong>ID:</strong> {formData.id}<br />
            <strong>Reason:</strong> {formData.reason}
          </p>

          <div className='Admin-Buttons'>
            <button className='Accept' onClick={handleAccept}>
              ACCEPT
            </button>
            <button className='Decline' onClick={handleDecline}>
              DECLINE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}