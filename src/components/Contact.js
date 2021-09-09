import React from 'react'
import emailjs from 'emailjs-com';
import {Form, Button} from 'react-bootstrap'

export const Contact = () => {



    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_23cby7k', 'template_25hvu9a', e.target, 'user_8ZkNsX56gOAt2nVXYf8tH')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }


    return (
        <div className="contactForm" id='contact'>
            
            <Form onSubmit={sendEmail}>
            <h1 className="contactTitle">Contact Me!</h1>
            <hr  style={{
                color: '#2867B2',
                backgroundColor: '#2867B2',
                height: 3,
                borderColor : '#2867B2'
            }}/>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"  className='input' name="name"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" className='input' name="email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text"  className='input' name="subject"/>
                </Form.Group>
            
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={2} className='input' name="message"/>
                </Form.Group>
                <Button type="submit" size="lg" variant="outline-primary" className='contactButton'>Send!</Button>
            </Form>

        </div>
        


        // <div className="contactForm">
        //     <form className="contact-form" onSubmit={sendEmail}>
            
        //         <label>Name</label>
        //         <input type="text" name="name" />
        //         <label>Email</label>
        //         <input type="email" name="email" />
        //         <label>Message</label>
        //         <textarea name="message" />
        //         <input type="submit" value="Send" />
        //   </form>
        // </div>
        
    )
}

export default Contact;
