import React from 'react'
import StyledCheckbox from './Checkbox'

function Submit(props) {
  const {weeklyDropdown, setWeeklyDropdown,
  interestedInBuying, setInterestedInBuying,
  interestedInSelling, setInterestedInSelling,
  interestedInCredit, setInterestedInCredit,
  interestedInEscrowPayment, setInterestedInEscrowPayment,
  interestedInOthers, setInterestedInOthers,
  productInterestPMS, setProductInterestPMS,
  productInterestAGO, setProductInterestAGO,
  productInterestLPG, setProductInterestLPG,
  productInterestDPK, setProductInterestDPK,
  productInterestCNG, setProductInterestCNG,
  productInterestLNG, setProductInterestLNG, error,
  productInterestLubricants, setProductInterestLubricants,
  productInterestPE, setProductInterestPE, loading, success,
  productInterestBaseOils, setProductInterestBaseOils,
  productInterestOther, setProductInterestOther, setPage} = props
  return (
    <>
      <div className="next-form">
        <label for="inputEmail4" className="form-label">
          Average Weekly Drop downs on Volumes
        </label>
        <input
          type="text"
          className="form-control"
          name="average_weeekly_dropdown"
          placeholder="Average weekly drop downs on volumes"
          aria-label="Average weekly drop downs "
          value={weeklyDropdown}
          onChange={e=>setWeeklyDropdown(e.target.value)}
        />
      </div>
      <div>
        <p>
          <strong>Interested in?</strong>
          <em> (Select one or more that applies)</em>{' '}
        </p>
        <StyledCheckbox name="buying" value={interestedInBuying} onChange={()=>setInterestedInBuying(!interestedInBuying)} label="Buying" />
        <StyledCheckbox name="selling" value={interestedInSelling} onChange={()=>setInterestedInSelling(!interestedInSelling)} label="Selling" />
        <StyledCheckbox name="creditFacilities" value={interestedInCredit} onChange={()=>setInterestedInCredit(!interestedInCredit)} label="Credit facilities" />
        <StyledCheckbox name="escrowPayment" value={interestedInEscrowPayment} onChange={()=>setInterestedInEscrowPayment(!interestedInEscrowPayment)} label="Escrow Payment Facility" />

        
        <div className="next-form">
          <input
            type="text"
            className="form-control"
            placeholder="Other"
            aria-label="Other"
            name="otherInterests"
            value={interestedInOthers}
            onChange={e=>setInterestedInOthers(e.target.value)}
          />
        </div>
      </div>
      <div>
        <p>
          <strong>Products Interest </strong>
          <em> (Select one or more that applies)</em>{' '}
        </p>
        <StyledCheckbox value={productInterestPMS} onChange={()=>setProductInterestPMS(!productInterestPMS)} name="pms" label="PMS" />
        <StyledCheckbox value={productInterestAGO} onChange={()=>setProductInterestAGO(!productInterestAGO)} name="ago" label="AGO" />
        <StyledCheckbox value={productInterestLPG} onChange={()=>setProductInterestLPG(!productInterestLPG)} name="lpg" label="LPG" />
        <StyledCheckbox value={productInterestDPK} onChange={()=>setProductInterestDPK(!productInterestDPK)} name="dpk" label="DPK" />
        <StyledCheckbox value={productInterestCNG} onChange={()=>setProductInterestCNG(!productInterestCNG)} name="cng" label="CNG" />
        <StyledCheckbox value={productInterestLNG} onChange={()=>setProductInterestLNG(!productInterestLNG)} name="lng" label="LNG" />
        <StyledCheckbox value={productInterestLubricants} onChange={()=>setProductInterestLubricants(!productInterestLubricants)} name="lubricants" label="Lubricants" />
        <StyledCheckbox value={productInterestPE} onChange={()=>setProductInterestPE(!productInterestPE)} name="parts_and_equipments" label="Parts & Equipments" />
        <StyledCheckbox value={productInterestBaseOils} onChange={()=>setProductInterestBaseOils(!productInterestBaseOils)} name="base_oils" label="Base Oils" />
        
        <div className="next-form">
          <input
            type="text"
            className="form-control"
            placeholder="Other"
            name="Other_product_interest"
            aria-label="Other"
            value={productInterestOther}
            onChange={(e)=>setProductInterestOther(e.target.value)}
          />
        </div>
      </div>
      
      <div className="submit-btn">
        <button onClick={()=>setPage(1)} type="button" style={{color: "#fff !important"}} className="padded-btn mybtn ">
          <i className="fas fa-chevron-left"></i> Previous
        </button>
        {success && <p style={{color: "green"}}>Your message was sent successfully!</p>}
          {error && <p style={{color: "red"}}>Oops! An error has occured. Please try again</p>}
        <button type="submit" className="padded-btn mybtn">
        {loading ? <small><i>submitting...</i></small>: "Submit"}
        </button>
      </div>
    </>
  )
}

export default Submit
