import React from "react";

// ContactForm component
const ContactForm = ({form, setForm}) => (
    <div id="contactform">
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="main col-sm-12">
              <h1 className="section-title">Contact Us</h1>
              <div className="contact-form">
                {/* prevents the page from reloading when the form is submitted */}
                <form onSubmit = {(e) => e.preventDefault()}>
                  <div className="form-group">
                    {/* displays the input value on the label*/}
                    <label htmlFor="name">Name: {form.name}</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      required
                      //stores the input value when the user types
                      value={form.name} onChange={(e) => setForm({...form, name: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email: {form.email}</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                      value={form.email} onChange = {(e) => setForm({...form, email: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject: {form.subject}</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      required
                      value={form.subject} onChange = {(e) => setForm ({...form, subject: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message: {form.message}</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      required
                      value={form.message} onChange = {(e) => setForm ({...form, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);

// exports the component so it can be imported
export default ContactForm;