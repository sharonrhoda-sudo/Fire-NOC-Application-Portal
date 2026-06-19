import { useState } from "react";
import axios from "axios";

function ContactUs() {

  const [form, setForm] =
    useState({
      name:"",
      email:"",
      message:""
    });

  const sendMessage = async () => {

    try {

      await axios.post(
        "http://localhost:8000/api/contact",
        form
      );

      alert(
        "Message Sent Successfully"
      );

    } catch {

      alert(
        "Failed To Send"
      );

    }

  };

  return (

    <div className="container mt-5">

      <h2>Contact Us</h2>

      <input
        className="form-control mb-3"
        placeholder="Name"
        onChange={(e)=>
          setForm({
            ...form,
            name:e.target.value
          })
        }
      />

      <input
        className="form-control mb-3"
        placeholder="Email"
        onChange={(e)=>
          setForm({
            ...form,
            email:e.target.value
          })
        }
      />

      <textarea
        className="form-control mb-3"
        placeholder="Message"
        rows="4"
        onChange={(e)=>
          setForm({
            ...form,
            message:e.target.value
          })
        }
      />

      <button
        className="btn btn-success"
        onClick={sendMessage}
      >
        Send
      </button>

    </div>

  );

}

export default ContactUs;