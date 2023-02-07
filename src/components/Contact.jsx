import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import axios from 'axios';
//import Toast from 'react-bootstrap/Toast';
import "react-toastify/dist/ReactToastify.css";
import  Amplify, { API } from "aws-amplify";




function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const successResult = () => {
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
  }

  const failedResult = () => {
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

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      fetch("https://m93cy1uq00.execute-api.us-east-1.amazonaws.com/dev/contact", {
        mode: 'no-cors',
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        // headers: {
        //   'Accept': 'application/json',
        //   'Content-Type': 'application/json',
        //   "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        //   "Access-Control-Allow-Origin": "*",
        //   "Access-Control-Allow-Methods": "OPTIONS,POST,GET,HEAD,DELETE,PUT"
        // },

        /**
         *  headers: {
            "Content-Type" : "application/json",
            "Access-Control-Allow-Headers" : "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
            "Access-Control-Allow-Methods" : "OPTIONS,POST",
            "Access-Control-Allow-Credentials" : true,
            "Access-Control-Allow-Origin" : "*",
            "X-Requested-With" : "*"
        }
         */
        body: JSON.stringify({
          name: name,
          subject: subject,
          email: email,
          message: message
        })

      })
        .then((result) => {
          successResult();
          setName("");
          setSubject("");
          setEmail("");
          setMessage("");
          console.log("message sent --------")
        })
    } catch (err) {
      failedResult();
      console.log(err);
    }
  }
  return (
    <>
      <form id="myForm" className="contactform" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="YOUR NAME" required />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                type="email"
                value={email}
                name="user_email"
                placeholder="YOUR EMAIL"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-12">
            <div className="form-group">
              <input
                type="text"
                value={subject}
                name="subject"
                placeholder="YOUR SUBJECT"
                required
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-group">
              <textarea
                name="message"
                value={message}
                placeholder="YOUR MESSAGE"
                required
                onChange={(e) => setMessage(e.target.value)}
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

}
export default Contact;