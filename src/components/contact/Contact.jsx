import React, {useRef, useState} from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import emailjs from 'emailjs-com'

const Contact = () => {
const form = useRef();
const [done, setDone] = useState(false)


const sendEmail = (e) => {
  e.preventDefault();

	emailjs.sendForm('service_4ao2zko', 'template_4y3epzt', form.current, '3p1uS0uh2JlrQMkrn')
	    .then(
	      (result) => {
	        console.log(result.text);
	        setDone(true);
	        e.target.reset();
	      },
	      (error) => {
	        console.log(error.text);
	      }
	    );
	};

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <article className="contact__options">
          <div className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>anupamsingh344.sne@gmail.com</h5>
            <a href="anupamsingh344.sne@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </div>
        
          <div className="contact__option">
            <RiMessengerLine  className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Anupam Singh</h5>
            <a href="https://www.linkedin.com/in/anupam-singh0802/" target="_blank" rel="noreferrer">Send a message</a>
          </div>
        
          <div className="contact__option">
            <MdOutlineEmail  className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>9503429099</h5>
            <a href="https://api.whatsapp.com/send?phone=9503429099" target="_blank" rel="noreferrer">Send a message</a>
          </div>
        </article>

        {/* ========END CONTACT OPTION========== */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" className="user"  placeholder="Name" required/>
          <input type="email" name="email" className="user" placeholder="Email" required/>
          <textarea name="message" rows='7' className="user" placeholder="Message" required/>
          <button type="submit" value="Send" className="btn btn-primary">Send message</button>
          <span>{done && "Thanks for Contacting me"}</span>

        </form>
      </div>
    </section>
  )
}

export default Contact