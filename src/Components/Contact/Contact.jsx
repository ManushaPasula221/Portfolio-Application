import React, { useState } from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "857fc2a4-2471-45ca-b1bd-92bbc5edd9af");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }

    setName('');
    setEmail('');
    setMessage('');
  };

  console.log(name);

  return (
    <div id='contact' className='contact'>
        <div className='contact-title'>
            <h2>Get in touch</h2>
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h2>Let’s talk</h2>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                      <FontAwesomeIcon icon={ faEnvelope }/>
                      <p>pmanusha221@gmail.com</p>
                    </div>
                    <div className='contact-detail'>
                      <FontAwesomeIcon icon={ faPhone }/>
                      <p>+91 1234567890</p>
                    </div>
                    <div className='contact-detail'>
                      <FontAwesomeIcon icon={ faLocationDot }/>
                      <p>Hyderabad</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor=''>Your Name</label>
                <input type='text' placeholder='Enter your name' name='name' value={name} onChange={(event) => setName(event.target.value)} required/>
                <label htmlFor=''>Your email</label>
                <input type='email' placeholder='Enter your email' name='email' value={email} onChange={(event) => setEmail(event.target.value)}  required/>
                <label htmlFor=''>write your message here</label>
                <textarea type='text' rows={8} placeholder='write your message here' name='message' value={message} onChange={(event) => setMessage(event.target.value)} required />
                <button type='submit' className='contact-submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact