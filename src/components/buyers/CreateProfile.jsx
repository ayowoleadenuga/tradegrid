import React from 'react'


function CreateProfile({ title, children, PhoneCircle}) {
  return (
    <section className="buyer-profile-sect">
      <div className="deal-source">
        <div className="left-deal profile-left">
          <img src={PhoneCircle} alt="" />
        </div>
        <div className="right-deal">
          <h5 className="buyer-h5">{title}</h5>
          {children}
        </div>
      </div>
    </section>
  )
}

export default CreateProfile
