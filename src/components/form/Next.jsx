import React from 'react'
import StyledCheckbox from './Checkbox'

function Next(props) {
  const {retail, setRetail,
  bulk, setBulk,
  depot, setDepot,
  international, setInternational,
  buyer, setBuyer,
  other, setOther,
  businessName, setBusinessName,
  businessLocation, setBusinessLocation,
  applicantName, setApplicantName,
  applicantRole, setApplicantRole,
  applicantEmail, setApplicantEmail,
  applicantNumber, setApplicantNumber, setPage} = props

  return (
    <>
      <p>
        <strong>Business Category </strong>
        <em>(Select one or more that applies)</em>{' '}
      </p>
      {/* <form> */}
        <StyledCheckbox onChange={()=>setRetail(!retail)} name="retail_station" value={retail} label="Retail station" />
        <StyledCheckbox onChange={()=>setBulk(!bulk)} name="bulk_marketer" value={bulk} label="Bulk Marketer" />
        <StyledCheckbox onChange={()=>setDepot(!depot)} name="depot_owner" value={depot} label="Depot Owner" />
        <StyledCheckbox onChange={()=>setInternational(!international)} name="international_trader" value={international} label="International Trader" />
        <StyledCheckbox onChange={()=>setBuyer(!buyer)} name="commercial_buyer" value={buyer} label="Commercial / Industrial Buyer" />
          <div className="row next-form">
            <div className="col-lg-12 col-12">
              <input
                type="text"
                className="form-control"
                value={other}
                onChange={e=>setOther(e.target.value)}
                placeholder="Other"
                name="other_business_category"
                aria-label="Other"
              />
            </div>
          </div>
          <div className="row next-form">
            <div className="col-lg-6 col-12">
              <label for="inputEmail4" className="form-label">
                Business Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Business Name"
                name="business_name"
                value={businessName}
                onChange={e=>setBusinessName(e.target.value)}
                aria-label="Business name"
              />
            </div>
            <div className="col-lg-6 col-12">
              <label for="inputEmail4" className="form-label">
                Business Location
              </label>
              <input
                type="text"
                className="form-control"
                name="business_location"
                placeholder="Business Location"
                aria-label="Business location"
                value={businessLocation}
                onChange={e=>setBusinessLocation(e.target.value)}
              />
            </div>
          </div>
          <div className="row next-form">
            <div className="col-lg-6 col-12">
              <label for="inputEmail4" className="form-label">
                Applicant's Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Applicant's Name"
                aria-label="Applicant's name"
                name="applicant_name"
                value={applicantName}
                onChange={(e)=>setApplicantName(e.target.value)}
              />
            </div>
            <div className="col-lg-6 col-12">
              <label for="inputEmail4" className="form-label">
                Applicant's Role
              </label>
              <input
                type="text"
                className="form-control"
                name="applicant_role"
                placeholder="Applicant's Role within the Business / Company"
                aria-label="Applicant's role"
                value={applicantRole}
                onChange={(e)=>setApplicantRole(e.target.value)}
              />
            </div>
          </div>
          <div className="row next-form">
            <div className="col-lg-6 col-12">
              <label for="inputEmail4" className="form-label">
                Applicant's Email Address
              </label>
              <input
                type="text"
                className="form-control"
                name="applicant_email"
                placeholder="Applicant's Email Address"
                aria-label="Applicant's email"
                value={applicantEmail}
                onChange={e=>setApplicantEmail(e.target.value)}
              />
            </div>
            <div className="col-lg-6 col-12">
              <label for="inputEmail4" className="form-label">
                Applicant's Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                name="apllicant_number"
                placeholder="Applicant's Phone Number"
                aria-label="Applicant's phone number"
                value={applicantNumber}
                onChange={e=>setApplicantNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="left-btn">
            <button type="button" onClick={()=>setPage(2)} className="padded-btn mybtn">
              Next
            </button>
          </div>
      {/* </form> */}
    </>
  )
}

export default Next
