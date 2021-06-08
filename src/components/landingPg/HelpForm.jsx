import React, { useState, useEffect } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'
import emailjs from 'emailjs-com';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      // color: 'rgba(150, 150, 150, 0.2)',
      color: 'black'
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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap:'wrap',
    width:'100%',
    marginBottom:'50px'
  },
  // margin: {
  //   marginTop: '40px',
   
  // },
}))

const emailjObj = {
  USER_ID: "user_q610hC24vrfmB3ywLRLse",
  Access_Token: "667aa5d39e563b89ada2b7bbad6b5d94",
  SERVICE_ID: "service_0hk4e47",
  TEMPLATE_ID: "template_zlin1rf"
}

function HelpFormSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false);
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
          setName("");
          setEmail("");
          setMessage("");
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
  const classes = useStyles();

  return (
    <section className="help-section ">
      <div className="text-center help-centered-div  container">
        <h3>How can we help?</h3>
        <p>
          If you have enquiries you can email us at
          <strong> support@thetradegrid.com.</strong> You can also drop a message
          via the form below or speak with a customer service agent at your local help desk. See Phone contact list below.
        </p>
      </div>
      <form noValidate autoComplete="off" className="myform" onSubmit={handleSubmit}>
        <div className={classes.root}>
          <CssTextField
            label="Your Name"
            variant="outlined"
            id="customoutlined-input"
            value={name}
            disabled={loading}
            name="name"
            required
            onChange={e => setName(e.target.value)}
          />
          <CssTextField
            className="margined-input"
            label="Your E-mail"
            type="email"
            name="email"
            value={email}
            disabled={loading}
            required
            onChange={e=> setEmail(e.target.value)}
            variant="outlined"
            id="custom-css-outlined-input"
          />
        </div>
        <CssTextField
          label="Your Message"
          variant="outlined"
          multiline
          name="message"
          required
          value={message}
          disabled={loading}
          onChange={e => setMessage(e.target.value)}
          rows={4}
          className="my-textarea"
          style={{ width: '100%' }}
        />

        <div className="call-us-div">
          <div>
           <p>Or call us on; </p><p>USA<span> +1(312) 872 2863</span></p> <p>UK <span> +44 7543 149055</span></p><p>NIG <span>+234 811 975250</span></p> 
          </div>

          {success && <p style={{color: "green"}}>Your message was sent successfully!</p>}
          {error && <p style={{color: "red"}}>Oops! An error has occured. Please try again</p>}
          <button className="padded-btn mybtn">
            {loading ? <small><i>sending...</i></small>: "Submit"}
          </button>
        </div>
      </form>
    </section>
  )
}

export default HelpFormSection
