import React, { useState } from 'react';
import './FeedbackForm.css'; 

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
        rating: ''
    })
    const handleChange = (event) => {
        const { name , value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const confirmationMessage = `
        Name: ${formData.name}
        Email: ${formData.email}
        Feedback: ${formData.feedback}
        Rating: ${formData.rating}
        `;
        const isConfirmed = window.confirm(`Please confirm your details:\n${confirmationMessage}`);
        if (isConfirmed) {
            console.log('Submitting feedback:', formData)
            setFormData({
                name: '',
                email: '',
                feedback: '',
                rating: ''
            });
            alert('Thank you for your valuable feedback!');
        }
    }

return (
    <>
    <nav>Tell Us What You Think</nav>
    <form className = "feedback-form" onSubmit = {handleSubmit}>
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input type = "text" name = 'name' placeholder = 'Your Name' value = {formData.name} onChange = {handleChange} />
        <input type = "email" name = 'email' placeholder = 'Your Email' value = {formData.email} onChange = {handleChange} />
        <textarea name = "feedback" placeholder = 'Your Feedback' value = {formData.feedback} onChange = {handleChange} ></textarea>
        <div style={{display:'flex',gap:'10px',flexDirection:'column'}}>
            <span>Submit a Rating:</span>
            <p><input type="radio" name="rating" onChange = {handleChange} value = '1' />1</p>
            <p><input type="radio" name="rating" onChange = {handleChange} value = '2' />2</p>
            <p><input type="radio" name="rating" onChange = {handleChange} value = '3' />3</p>
            <p><input type="radio" name="rating" onChange = {handleChange} value = '4' />4</p>
            <p><input type="radio" name="rating" onChange = {handleChange} value = '5' />5</p>
        </div>
        <button type = 'subimt' >Submit Feedback</button>
    </form>
    </>
);
};

export default FeedbackForm;
