import React,{ useState, useEffect} from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { TextField, MenuItem } from '@material-ui/core'
import ClickImage from "../../assets/click.png"
import emailjs from 'emailjs-com';

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
        // background: '#F9F9F9',
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

const emailjObj = {
  USER_ID: "user_q610hC24vrfmB3ywLRLse",
  Access_Token: "667aa5d39e563b89ada2b7bbad6b5d94",
  SERVICE_ID: "service_0hk4e47",
  TEMPLATE_ID: "template_yl6qq5p"
}

function SubmitEntry() {
  const classes = useStyles()
  const [gender, setGender] = useState('')
  const [language, setLanguage] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [degree, setDegree] = useState('')
  const [meansOfHearing, setMeansOfHearing] = useState('')
  const [value, setValue] = useState('')
  const [phone, setPhone] = useState('')
  const [school, setSchool] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false)

  const handleGender = (event) => {
    setGender(event.target.value)
  }
 

  const handleLanguage = (event) => {
    setLanguage(event.target.value)
  }
  const clickUpload = () => {
    const elem = document.getElementById("upload");
    elem.click();
  }
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
        setLoading(false);
        console.log(error.text);
      });
  }
  useEffect(() => {
    if(success || error) {
      setTimeout(() => {
        setSuccess(false);
        setError(false);
      }, 5000);
    }
    
  }, [success, error])

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

      <form noValidate autoComplete="off" className="form-div" onSubmit={handleSubmit}>
        <div className={classes.root}>
          <CssTextField
            className={classes.margin}
            label="First name"
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            name="first_name"
            variant="outlined"
            id="customoutlined-input"
          />
          <CssTextField
            className={classes.margin}
            label="Last name"
            variant="outlined"
            name="last_name"
            value={lastName}
            onChange={e=>setLastName(e.target.value)}
            id="custom-css-outlined-input"
          />
          <CssTextField
            className={classes.margin}
            label="Email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            variant="outlined"
            id="custom-css-outlined-input"
          />
          <CssTextField
            className={classes.margin}
            label="Phone number"
            variant="outlined"
            value={phone}
            onChange={e=>setPhone(e.target.value)}
            name="phone_number"
            id="custom-css-outlined-input"
          />
          <CssTextField
            className={classes.margin}
            label="Gender"
            id="demo-simple-select"
            variant="outlined"
            name="gender"
            value={gender}
            select
            onChange={handleGender}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
          </CssTextField>
          <CssTextField
            className={classes.margin}
            label="Language(s) fluently spoken"
            id="demo-language"
            variant="outlined"
            value={language}
            name="language"
            onChange={handleLanguage}
          />
          <CssTextField
            className={classes.margin}
            label="Degree you are pursuing"
            id="demo-degree"
            name="degree"
            variant="outlined"
            value={degree}
            onChange={handleDegree}
          />
          <CssTextField
            className={classes.margin}
            label="School name"
            name="school_name"
            variant="outlined"
            value={school}
            onChange={e=>setSchool(e.target.value)}
            id="custom-css-outlined-input"
          />           
          
          <div className="uploadDiv" onClick={clickUpload}>
            <p className="uploadText">Upload document</p>
            <img alt="" src={ClickImage} /> <span>{file && file.name}</span>
          </div>
          <input type="file" name="attachment" onChange={e=>setFile(e.target.files[0])} style={{display: 'none'}} id="upload" />
          
          <CssTextField
            className={classes.margin}
            label="Where did you hear about us"
            id="demo-simple-select"
            variant="outlined"
            name="mode_of_reach"
            value={meansOfHearing}
            onChange={(e)=>setMeansOfHearing(e.target.value)}
          />
        </div>
        
        <div className="left-btn">
          <button type="submit" className="padded-btn mybtn mr-5">
            {loading ? <small><i>sending...</i></small>: "Submit"}
          </button>
          <div style={{display: "block"}}>
          {success && <p style={{color: "green"}}>Your message was sent successfully!</p>}
          {error && <p style={{color: "red"}}>Oops! An error has occured. Please try again</p>}
        </div>
        </div>
        
      </form>
      
    </section>
  )
}

export default SubmitEntry
