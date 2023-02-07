import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import axios from 'axios';
//import Toast from 'react-bootstrap/Toast';
import "react-toastify/dist/ReactToastify.css";

function Contact() {

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [subject, setSubject] = useState("");
  // const [message, setMessage] = useState("");

  // let handleSubmit = async (e) => {
  //   e.preventDefault();

  //   let res = await fetch("https://6kyta3utpf.execute-api.us-east-1.amazonaws.com/v1/contact", {
  //     method: "POST",
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Methods": "OPTIONS,POST,GET,HEAD,DELETE,PUT"
  //     },
  //     body: JSON.stringify({
  //       name: name,
  //       email: email,
  //       subject: subject,
  //       message: message
  //     })
  //   })
  //     res.then(function (error) {
  //       toast.error("Ops Message Not Sent!", {
  //         position: "top-right",
  //         autoClose: 2000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       });
  //     })
  //   toast.success("Message Sent Successfully!", {
  //     position: "top-right",
  //     autoClose: 2000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   })
  //   setName("");
  //   setSubject("");
  //   setEmail("");
  //   setMessage("");

  //   document.getElementById("myForm").reset();
  // };


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
      fetch("https://6kyta3utpf.execute-api.us-east-1.amazonaws.com/v1/contact", {
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
        body: JSON.stringify({
          name: name,
          subject: subject,
          email: email,
          message: message
        })

      })
        // console.log("sending message");

        // let resJson = await res.json();
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