import React from 'react';
import emailjs from '@emailjs/browser';

export const Mailer = () => {

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_tjhfau9','template_5yculdj', event.target,'v7ZjcvOAR0bj_D8Mp')
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }

  return (
    <div className='form'>
      <h1 className='title-form'>Contact Us</h1>
      <form className='form-mail' onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name='name' />
        

        <label>Email</label>
        <input type="email" name='email' />
        

        <label>Message</label>
        <textarea name="message" id="" cols="30" rows="10"></textarea>
        
        <button>Send</button>
      </form>
    </div>
  )
}