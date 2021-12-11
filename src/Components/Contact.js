import React, { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { MdEmail, MdAlternateEmail } from 'react-icons/md'
import emailjs from 'emailjs-com';
import details from '../Email';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(`Steins;Gate`, details.TEMPLATE_ID, e.target, details.USER_ID)
            .then((result) => {
                alert("Message Sent, I will get back to you soon...", result.text);
                setEmail('')
                setMessage('')
                setName('')
            },
                (error) => {
                    alert("An error occurred, Please try again", error.text);
                });
    }
    return (
        <div id="contact">
            <div className="login-div">
                <h1 className='heading' style={{ marginBottom: '0px' }}>Contact Me</h1>
                <form onSubmit={handleSubmit}>
                    <div className="fields">
                        <div ><FaUserAlt /><input placeholder="Name" name="from_name" onChange={(e) => { setName(e.target.value) }} value={name} /></div>
                        <div><MdAlternateEmail /><input name='from_email' value={email} placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} /></div>
                        <div className='message'><MdEmail /><textarea value={message} name='message' onChange={(e) => { setMessage(e.target.value) }} type="text" placeholder="Message" /></div>
                    </div>
                    <button className="signin-button">Send</button>
                </form>
            </div>
            <h2 align="center">You can also directly email me on tarshtarsh333@gmail.com. Following are my social links.</h2>
            <div className='social-links'>
                <a href="https://www.linkedin.com/in/tarsh/" target='_blank'><AiFillLinkedin /></a>
                <a href="https://github.com/Tarsh333" target='_blank'><AiFillGithub /></a>
                <a href="https://www.instagram.com/tarsh333/" target='_blank'><AiFillInstagram /></a>
            </div>
        </div>
    )
}

export default Contact
