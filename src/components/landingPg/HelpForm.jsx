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
    width:'100%',
    marginBottom:'50px'
  },
  margin: {
    margin: theme.spacing(0),
    width:'67ch'
   
  },
}))
function HelpFormSection() {
   const classes = useStyles()
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
      <form noValidate autoComplete="off" className="myform">
        <div className={classes.root}>
          <CssTextField
            className={classes.margin}
            label="Your name"
            variant="outlined"
            id="customoutlined-input"
          />
          <CssTextField
            className={classes.margin}
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
