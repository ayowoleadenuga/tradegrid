import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'
const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'rgba(150, 150, 150, 0.2)',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(150, 150, 150, 0.2)',
        background: '#fff',
  
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
function HelpFormSection() {
   const classes = useStyles()
  return (
    <section className="help-section ">
      <div className="text-center help-centered-div  container">
        <h3>How can we help?</h3>
        <p>
          If you have enquiries you can email us at
          <strong> support@thetradegrid.com.</strong> You can also drop a message
          via the form below or speak speak with a customer service agent at your local help desk. See Phone contact list below.
        </p>
      </div>
      <form noValidate autoComplete="off" className="myform">
        <div className={classes.root}>
          <CssTextField
            label="Your name"
            variant="outlined"
            id="customoutlined-input"
          />
          <CssTextField
            className="margined-input"
            label="Your email"
            variant="outlined"
            id="custom-css-outlined-input"
          />
        </div>
        <CssTextField
          label="Your Message"
          variant="outlined"
          multiline
          rows={4}
          className="my-textarea"
          style={{ width: '100%' }}
        />

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
