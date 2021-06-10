import React, { useState, useEffect } from 'react'
import NewsTank from '../../assets/newsletter.png'
import emailjs from 'emailjs-com';
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      // color: 'rgba(150, 150, 150, 0.2)',
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(150, 150, 150, 0.2)',
        // background: '#fff',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(150, 150, 150, 0.2)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(150, 150, 150, 0.2)',
      },
    },
  },
})(TextField)

const sectionStyle = {
  backgroundImage: `linear-gradient(to bottom, rgba(14, 31, 51, 0.7),
rgba(232, 115, 168, 0.7) ), url(${NewsTank})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}
const emailjObj = {
  USER_ID: "user_q610hC24vrfmB3ywLRLse",
  Access_Token: "667aa5d39e563b89ada2b7bbad6b5d94",
  SERVICE_ID: "service_0hk4e47",
  TEMPLATE_ID: "template_fr3m9pb"
}

function Newsletter() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(true);
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);
    await emailjs.sendForm(emailjObj.SERVICE_ID, emailjObj.TEMPLATE_ID, e.target, emailjObj.USER_ID)
      .then((result) => {
          console.log(result);
          setLoading(false);
          setError(false)
          setSuccess(true)
      }, (error) => {
        setSuccess(false);
        setError(true);
        console.log(error.text);
        setLoading(false);
      });
  }
  useEffect(() => {
    if(success || error) {
      setTimeout(() => {
        setSuccess(false);
        setError(false);
      }, 500);
    }
    
  }, [success, error])
  return (
    <section className="news-div" style={sectionStyle}>
      <h3>Subscribe to our Newsletter!</h3>
      <p>
        Stay up-to-date with announcements, news & updates, discount deals and
        much more.
      </p>
      <form className="news-form" onSubmit={handleSubmit}>
        <div className="input-div">
          {/* <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              value={email}
              name="email"
              onChange={(e)=> setEmail(e.target.value)}
              aria-describedby="emailHelp"
            /> */}
          <CssTextField
            className="input-div"
            label="Your Email"
            variant="outlined"
            id="customoutlined-input"
            value={email}
            disabled={loading}
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button className="mybtn padded-btn">
            {loading ? (
              <small>
                <i>submitting...</i>
              </small>
            ) : (
              'Subscribe'
            )}
          </button>
        </div>
        <div>
          {success && (
            <p style={{ color: 'green' }}>
              Your message was sent successfully!
            </p>
          )}
          {error && (
            <p style={{ color: 'red' }}>
              Oops! An error has occured. Please try again
            </p>
          )}
        </div>
      </form>
    </section>
  )
}

export default Newsletter
