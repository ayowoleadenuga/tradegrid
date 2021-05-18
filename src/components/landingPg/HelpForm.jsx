import React from 'react'
import MyButton from '../button'

function HelpFormSection() {
  return (
    <section className="help-section ">
      <div className="text-center help-centered-div  container">
        <h3>How can we help?</h3>
        <p>
          If you have any enquiries you can email us at
          support@thetradegrid.com. You can also drop a message via the form
          below or speak to one of our customer service agent by clicking on the
          phone number below.
        </p>
      </div>
      <form className="row help-form-row ">
        <div className="col-lg-6 col-sm-12 input-div">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            aria-label="Name"
          />
        </div>
        <div className="col-lg-6 col-sm-12 input-div">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            aria-label="Email"
          />
        </div>
        <div className="form-floating ">
          <textarea
            style={{ height: '147px' }}
            className="form-control"
            placeholder="Message"
            id="floatingTextarea2"
          ></textarea>
        </div>
        <div className="call-us-div">
          <p>
            Or call us on <span>+1(312) 779 9374</span>
          </p>

          <button className="padded-btn mybtn">Submit</button>
        </div>
      </form>
    </section>
  )
}

export default HelpFormSection
