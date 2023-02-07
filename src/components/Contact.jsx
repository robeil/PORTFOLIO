import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from 'axios';
// import { useEffect } from "react";

// const  myAPI = "amplifyAPI";
// const path = "/contact";

const Contact = () => {

  // const [contactState, setContactState] = useState({
  //   fullName: "",
  //   subject: "",
  //   email: "",
  //   message: ""
  // });

  // const { fullName, email, subject, message } = contactState;

  // const onChangeField = (event) => {
  //   const copyState = { ...contactState };
  //   copyState[event.target.event] = event.target.value;
  //   setContactState(copyState);
  // };

  // const sendEmail = async (event) => {
  //   event.preventDefault();
  //   await axios
  //   //https://90vhi5wm9c.execute-api.us-east-1.amazonaws.com/dev/contact
  //     .post("https://90vhi5wm9c.execute-api.us-east-1.amazonaws.com/dev/contact", contactState) //here hast be added the api gateway post url
  //     .then(() => console.log('Contact send Successfully!'))
  //   console.log(contactState);

  // }

  // useEffect(() => {
  //   sendEmail()
  // }, [])

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_e1xn43q",
        "template_j41242d",
        form.current,
        "LZ0LSfRnEbFgm9qEZ"
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          document.getElementById("myForm").reset();
        },
        (error) => {
          toast.error("Ops Message Not Sent!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <>
      <form id="myForm" className="contactform" ref={form} onSubmit={sendEmail}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input type="text" name="name" placeholder="YOUR NAME" required />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                type="email"
                name="user_email"
                placeholder="YOUR EMAIL"
                required
              />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-12">
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="YOUR SUBJECT"
                required
              />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-group">
              <textarea
                name="message"
                placeholder="YOUR MESSAGE"
                required
              ></textarea>
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <button type="submit" className="button">
              <span className="button-text">Send Message</span>
              <span className="button-icon fa fa-send"></span>
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>
    </>
  );
};

export default Contact;
