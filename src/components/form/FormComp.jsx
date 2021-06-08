import React, { useState, useEffect } from 'react'
import './style.css'
import Logo from '../../assets/TradeGridlogo.svg'
import Small from '../../assets/small.svg'
import Medium from '../../assets/medium.svg'
import Large from '../../assets/large.svg'
import {Link} from 'react-router-dom'
import Next from './Next'
import emailjs from 'emailjs-com';
import Submit from './Submit'

const emailjObj = {
  USER_ID: "user_q610hC24vrfmB3ywLRLse",
  Access_Token: "667aa5d39e563b89ada2b7bbad6b5d94",
  SERVICE_ID: "service_0hk4e47",
  TEMPLATE_ID: "template_dr1fz27"
} 

function FormComp() {
  const [page, setPage] = useState(1)
  const [weeklyDropdown, setWeeklyDropdown] = useState("")
  const [interestedInBuying, setInterestedInBuying] = useState(false)
  const [interestedInSelling, setInterestedInSelling] = useState(false)
  const [interestedInCredit, setInterestedInCredit] = useState(false)
  const [interestedInEscrowPayment, setInterestedInEscrowPayment] = useState(false)
  const [interestedInOthers, setInterestedInOthers] = useState("")
  const [productInterestPMS, setProductInterestPMS] = useState(false)
  const [productInterestAGO, setProductInterestAGO] = useState(false)
  const [productInterestLPG, setProductInterestLPG] = useState(false)
  const [productInterestDPK, setProductInterestDPK] = useState(false)
  const [productInterestCNG, setProductInterestCNG] = useState(false)
  const [productInterestLNG, setProductInterestLNG] = useState(false)
  const [productInterestLubricants, setProductInterestLubricants] = useState(false)
  const [productInterestPE, setProductInterestPE] = useState(false)
  const [productInterestBaseOils, setProductInterestBaseOils] = useState(false)
  const [productInterestOther, setProductInterestOther] = useState("")

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false)

  const [retail, setRetail] = useState(false)
  const [bulk, setBulk] = useState(false)
  const [depot, setDepot] = useState(false)
  const [international, setInternational] = useState(false)
  const [buyer, setBuyer] = useState(false)
  const [other, setOther] = useState("")
  const [businessName, setBusinessName] = useState("")
  const [businessLocation, setBusinessLocation] = useState("")
  const [applicantName, setApplicantName] = useState("")
  const [applicantRole, setApplicantRole] = useState("")
  const [applicantEmail, setApplicantEmail] = useState("")
  const [applicantNumber, setApplicantNumber] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    
    setError(false);
    const templateParams = {
      retail_station: retail, bulk_marketer: bulk, depot_owner: depot, international_trader: international,
      commercial_buyer: buyer, other, business_name: businessName, business_location: businessLocation,
      applicant_name: applicantName, applicant_role: applicantRole, applicant_email: applicantEmail, applicant_number: applicantNumber,
      average_weekly_dropdown: weeklyDropdown, buying: interestedInBuying, selling: interestedInSelling, creditFacilities: interestedInCredit,
      escrowPayment: interestedInEscrowPayment, otherInterests: interestedInOthers, pms: productInterestPMS, ago: productInterestAGO, lpg: productInterestLPG,
      dpk: productInterestDPK, cng: productInterestCNG, lng: productInterestLNG, lubricants: productInterestLubricants, parts_and_equipments: productInterestPE,
      base_oils: productInterestBaseOils, Other_product_interest: productInterestOther
    }
    await emailjs.send(emailjObj.SERVICE_ID, emailjObj.TEMPLATE_ID, templateParams, emailjObj.USER_ID)
      .then((result) => {
          console.log(result);
          document.getElementById("accessForm").reset();
          setLoading(false);
          setError(false)
          setSuccess(true)
      }, (error) => {
        setSuccess(false);
        setError(true);
        setLoading(false);
        console.log(error.text);
      });
  }
  useEffect(() => {
    if(success || error) {
      setTimeout(() => {
        setSuccess(false);
        setError(false);
      }, 2000);
    }    
  }, [success, error])


    return (
      <div className="form-sect">
        <div className="form-welcome-sect">
          <img src={Small} alt="" className="small" />
          <img src={Large} alt="" className="large" />
          <img src={Medium} alt="" className="medium" />
          <div className="my-absolute">
            <Link to="/" className="navbar-brand form-nav">
              <img src={Logo} alt="" />
              <span className="back-home"><small>&#8592; Back to Home</small></span>
            </Link>

            <h3>Welcome</h3>
            <p>TradeGrid has just arrived in your city! </p>
            <p>
              We are the world’s number 1 marketplace for Oil & Gas products,
              having operations in a growing number of countries across the
              globe. In each of these countries, we partner with more than 80%
              of the leading product marketers, refineries, and mid-stream
              players, to deliver exceptional buying experiences through our
              digital platform.
            </p>
            <p>
              We are excited to meet with leading petroleum products marketers
              across the globe.
            </p>
            <p>Kindly fill in the details and our team will be in touch.</p>
          </div>
        </div>
        <div className="form-field">
          <div className="title-flex">
            <h5>Access Request Form</h5>
            <div className="colored-div">
              <div className="pink-div"></div>
              <div className={page === 1 ? "grey-div" : "pink-div"}></div>
            </div>
          </div>
          <form onSubmit={handleSubmit} id="accessForm">
          {page === 1 && 
          <Next 
            retail={retail} setRetail={setRetail}
            bulk={bulk} setBulk={setBulk}
            depot={depot} setDepot={setDepot}
            international={international} setInternational={setInternational}
            buyer={buyer} setBuyer={setBuyer}
            other={other} setOther={setOther}
            businessName={businessName} setBusinessName={setBusinessName}
            businessLocation={businessLocation} setBusinessLocation={setBusinessLocation}
            applicantName={applicantName} setApplicantName={setApplicantName}
            applicantRole={applicantRole} setApplicantRole={setApplicantRole}
            applicantEmail={applicantEmail} setApplicantEmail={setApplicantEmail}
            applicantNumber={applicantNumber} setApplicantNumber={setApplicantNumber}
            setPage={setPage}
          />}
          {page === 2 &&
          <Submit 
            loading={loading} success={success} error={error}
            weeklyDropdown={weeklyDropdown} setWeeklyDropdown={setWeeklyDropdown}
            interestedInBuying={interestedInBuying} setInterestedInBuying={setInterestedInBuying}
            interestedInSelling={interestedInSelling} setInterestedInSelling={setInterestedInSelling}
            interestedInCredit={interestedInCredit} setInterestedInCredit={setInterestedInCredit}
            interestedInEscrowPayment={interestedInEscrowPayment} setInterestedInEscrowPayment={setInterestedInEscrowPayment}
            interestedInOthers={interestedInOthers} setInterestedInOthers={setInterestedInOthers}
            productInterestPMS={productInterestPMS} setProductInterestPMS={setProductInterestPMS}
            productInterestAGO={productInterestAGO} setProductInterestAGO={setProductInterestAGO}
            productInterestLPG={productInterestLPG} setProductInterestLPG={setProductInterestLPG}
            productInterestDPK={productInterestDPK} setProductInterestDPK={setProductInterestDPK}
            productInterestCNG={productInterestCNG} setProductInterestCNG={setProductInterestCNG}
            productInterestLNG={productInterestLNG} setProductInterestLNG={setProductInterestLNG}
            productInterestLubricants={productInterestLubricants} setProductInterestLubricants={setProductInterestLubricants}
            productInterestPE={productInterestPE} setProductInterestPE={setProductInterestPE}
            productInterestBaseOils={productInterestBaseOils} setProductInterestBaseOils={setProductInterestBaseOils}
            productInterestOther={productInterestOther} setProductInterestOther={setProductInterestOther}
            setPage={setPage}
          />}
          </form>
        </div>
      </div>
    )
}

export default FormComp





