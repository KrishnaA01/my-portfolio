import React,{ useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";
import toast, { Toaster} from "react-hot-toast"

export default function Contact() {

    const [message, setMessage]= useState(false)
    


    const form = useRef();


    const handleSubmit = (e)=> {
        e.preventDefault()
        
    

    emailjs.sendForm('service_m3ti1cr', 'template_9unabmt', form.current, 'user_h6aEE0fYeqZjGIbw6mnQi')
      .then((result) => {
          e.target.reset()
        setMessage(true)
        toast.success("Thank you for sending me a message.")
          console.log(result.text); //toaster
      }, (error) => {
          console.log(error.text);
          toast.error(error.message)
      });
    };


    return (
        <div className="contact" id="contact">
            <Toaster
            position="bottom-center"
            reverseOrder={false}
            />
            {message? <h4 className="popUp"> Thanks, I will get back to you ASAP &#128578; </h4>: 
              <div className="form-contact">
              <h2>Contact Me</h2>
              <p style={{paddingLeft:"1rem"}}>Feel free to send me a message or email if you are interested in my Projects or you have any job offers!</p>
              <form ref={form} onSubmit={handleSubmit} >
                  <input type="text" name="user_name" id="user_name" placeholder="Your Name" maxLength={50}/>
                  <input type="email" name="user_email" id="user_email"placeholder="Email Address" maxLength={50}/>
                  <textarea placeholder="Type Your Message..." name="message" maxLength={200}></textarea>
                  <button type="submit">Send</button>
                  
              </form>
          </div>}
          
        </div>
    )
}