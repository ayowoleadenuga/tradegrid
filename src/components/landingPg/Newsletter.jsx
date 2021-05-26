import React from 'react'
import NewsTank from '../../assets/newsletter.png'
import MyButton from '../button'

const sectionStyle = {
  backgroundImage: `linear-gradient(to bottom, rgba(14, 31, 51, 0.7),
rgba(232, 115, 168, 0.7) ), url(${NewsTank})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100vw 100%',
 
  backgroundPosition: 'center',
  
}
function Newsletter() {
  return (
    <section className="news-div" style={sectionStyle}>
     
        <h3>Subscribe to our Newsletter!</h3>
        <p>
          Stay up-to-date with announcements, news & updates, discounts and much
          more.
        </p>
        <form className=" news-form">
          <div className="input-div">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div>
            <button className="mybtn padded-btn">subscribe</button>
          </div>
        </form>
      
    </section>
  )
}

export default Newsletter
