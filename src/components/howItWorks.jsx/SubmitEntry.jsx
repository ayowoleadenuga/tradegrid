import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { TextField, MenuItem } from '@material-ui/core'
import { Link } from 'react-router-dom'

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
        background: '#F9F9F9',
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
    flexWrap: 'wrap',
    width: '100%',
    marginBottom: '50px',
  },
  margin: {
    margin: theme.spacing(0),
    // maxWidth: '60ch',
    // width: '100%',
    marginBottom: '50px',
  },
}))
function SubmitEntry() {
  const classes = useStyles()
  const [gender, setGender] = React.useState('')
  const [language, setLanguage] = React.useState('')
  const [degree, setDegree] = React.useState('')
  const [meansOfHearing, setMeansOfHearing] = React.useState('')
  const [value, setValue] = React.useState('Controlled')

  // const handleChange = (event) => {
  //   setValue(event.target.value)
  // }

  const handleGender = (event) => {
    setGender(event.target.value)
  }

  const handleLanguage = (event) => {
    setLanguage(event.target.value)
  }

  const handleDegree = (event) => {
    setDegree(event.target.value)
  }

  return (
    <section className="submit-sect">
      <h3 className="text-center">Ready to submit your entry?</h3>
      <p className="text-center">
        kindly fill the submission form below and upload your 2-paged entry
        document.
      </p>

      <form noValidate autoComplete="off" className="form-div">
        <div className={classes.root}>
          <CssTextField
            className={classes.margin}
            label="First name"
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            variant="outlined"
            id="customoutlined-input"
          />
          <CssTextField
            className={classes.margin}
            label="Last name"
            variant="outlined"
            id="custom-css-outlined-input"
          />
          <CssTextField
            className={classes.margin}
            label="Email"
            variant="outlined"
            id="custom-css-outlined-input"
          />
          <CssTextField
            className={classes.margin}
            label="Phone number"
            variant="outlined"
            id="custom-css-outlined-input"
          />
          <CssTextField
            className={classes.margin}
            label="Gender"
            id="demo-simple-select"
            variant="outlined"
            value={gender}
            select
            onChange={handleGender}
          >
            <MenuItem value={1}>Male</MenuItem>
            <MenuItem value={2}>Female</MenuItem>
          </CssTextField>
          <CssTextField
            className={classes.margin}
            label="Language(s) fluently spoken"
            id="demo-language"
            variant="outlined"
            value={language}
            select
            onChange={handleLanguage}
          >
            <MenuItem value={3}>English</MenuItem>
            <MenuItem value={4}>Yoruba</MenuItem>
          </CssTextField>
          <CssTextField
            className={classes.margin}
            label="Degree you are pursuing"
            id="demo-degree"
            variant="outlined"
            value={degree}
            select
            onChange={handleDegree}
          >
            <MenuItem value={5}>English</MenuItem>
            <MenuItem value={6}>Yoruba</MenuItem>
          </CssTextField>
          <CssTextField
            className={classes.margin}
            label="School name"
            variant="outlined"
            id="custom-css-outlined-input"
          />
          <CssTextField
            className={classes.margin}
            label="Upload document"
            variant="outlined"
            id="custom-css-outlined-input"
          />
          <CssTextField
            className={classes.margin}
            label="Where did you hear about us"
            id="demo-simple-select"
            variant="outlined"
            value={meansOfHearing}
            select
            onChange={setMeansOfHearing}
          >
            <MenuItem value={1}>Campus Outreach</MenuItem>
            <MenuItem value={2}>Social Media</MenuItem>
            <MenuItem value={2}>Word of Mouth</MenuItem>
            <MenuItem value={2}>Fliers and HandBill</MenuItem>
            <MenuItem value={2}>Website</MenuItem>
            <MenuItem value={2}>Others</MenuItem>
          </CssTextField>
        </div>
        <div className="left-btn">
          <Link to="/submit" className="padded-btn mybtn">
            Submit
          </Link>
        </div>
      </form>
    </section>
  )
}

export default SubmitEntry
