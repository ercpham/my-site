import "../styles/Contact.css";
import { send } from "emailjs-com";
import { useState } from "react";
import { keys } from "../data/data";

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Eric",
    message: "",
    reply_to: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    send(keys.service_id, keys.template_id, toSend, keys.user_id)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent!");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        alert("Message failed to send. Check console for details.");
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <main className="contact">
      <form className="email-form" onSubmit={onSubmit}>
        <p className="box-text">Send me a message!</p>
        <div className="heading">
          {/* <div className="field-input"> */}
          <label htmlFor="from_name">
            <p className="label-text">Name:</p>
          </label>
          <input
            type="text"
            name="from_name"
            placeholder="John Doe"
            value={toSend.from_name}
            onChange={handleChange}
          />
          {/* </div> */}
          {/* <div className="field-input"> */}
          <label htmlFor="reply_to">
            <p className="label-text">Email:</p>
          </label>
          <input
            type="text"
            name="reply_to"
            placeholder="john_doe@deermail.com"
            value={toSend.reply_to}
            onChange={handleChange}
          />
          {/* </div> */}
        </div>
        <div className="message">
          <textarea
            type="email"
            name="message"
            placeholder="Your message"
            value={toSend.message}
            onChange={handleChange}
            rows="10"
            cols="30"
          />
        </div>
        <button className="submit-btn" type="submit">
          <p>Submit</p>
        </button>
      </form>
    </main>
  );
}

export default Contact;
