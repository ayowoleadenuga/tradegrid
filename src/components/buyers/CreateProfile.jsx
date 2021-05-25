import React from 'react'
import PhoneCircle from '../../assets/phone-circle.png'


function CreateProfile({ title, children}) {
  return (
    <section className="buyer-profile-sect">
      <div className="deal-source">
        <div className="left-deal">
          <img src={PhoneCircle} alt="" />
        </div>
        <div className="right-deal">
          <h3>{title}</h3>
         {children}
        </div>
      </div>
    </section>
  )
}

export default CreateProfile
