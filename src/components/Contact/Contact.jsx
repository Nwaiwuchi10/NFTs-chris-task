import React, { useState } from "react";
import axios from "axios";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/sendMail", {
        name,
        email,
        message,
      });
      alert("Email sent successfully");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <>
      <section class="container mb-4">
        <h2 class="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>

        <p class="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div class="row">
          <div class="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div class="row">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      id="name"
                      name="name"
                      class="form-control"
                    />
                    <label for="name" class="">
                      Your name
                    </label>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      name="email"
                      class="form-control"
                    />
                    <label for="email" class="">
                      Your email
                    </label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      class="form-control"
                    />
                    <label for="subject" class="">
                      Subject
                    </label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="md-form">
                    <textarea
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      id="message"
                      name="message"
                      rows="2"
                      class="form-control md-textarea"
                    ></textarea>
                    <label for="message">Your message</label>
                  </div>
                </div>
              </div>
              <div class="text-center text-md-left">
                <button class="btn btn-primary" type="submit">
                  Send
                </button>
              </div>
            </form>

            <div class="status"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
