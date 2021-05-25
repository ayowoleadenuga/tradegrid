import React from 'react'
import StyledCheckbox from './Checkbox'
import FormComp from './FormComp'
import { Link } from 'react-router-dom'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { TextField, MenuItem, Button } from '@material-ui/core'
const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'rgba(100, 100, 100, 0.6)',
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
    width: '100%',
    marginBottom: '50px',
  },
  margin: {
    margin: theme.spacing(0),
    width: '100%',
    marginBottom: '50px',
  },
}))

function Next() {
  const classes = useStyles()
  return (
    <FormComp clsName="grey-div">
      <p>
        <strong>Business Category </strong>
        <em> (Select one or more that applies)</em>{' '}
      </p>
      <StyledCheckbox name="retail" label="Retail station" />
      <StyledCheckbox name="bulk" label="Bulk Marketer" />
      <StyledCheckbox name="depot" label="Depot Owner" />
      <StyledCheckbox name="int'l" label="International Trader" />
      <StyledCheckbox name="buyer" label="Commercial / Industrial Buyer" />
      <form className="">
        <CssTextField
          className={classes.margin}
          label="Other"
          variant="outlined"
          id="custom-css-outlined-input"
        />
        <div class="row next-form">
          <div class="col">
            <label for="inputEmail4" class="form-label">
              Business Name
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Business Name"
              aria-label="Business name"
            />
          </div>
          <div class="col">
            <label for="inputEmail4" class="form-label">
              Business Location
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Business Location"
              aria-label="Business location"
            />
          </div>
        </div>
        <div class="row next-form">
          <div class="col">
            <label for="inputEmail4" class="form-label">
              Applicant's Name
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Applicant's Name"
              aria-label="Applicant's name"
            />
          </div>
          <div class="col">
            <label for="inputEmail4" class="form-label">
              Applicant's Phone Number
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Applicant's Role within the Business / Company"
              aria-label="Applicant's role"
            />
          </div>
        </div>
        <div class="row next-form">
          <div class="col">
            <label for="inputEmail4" class="form-label">
              Applicant's Email Address
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Applicant's Email Address"
              aria-label="Applicant's email"
            />
          </div>
          <div class="col">
            <label for="inputEmail4" class="form-label">
              Applicant's Phone Number
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Applicant's Phone Number"
              aria-label="Applicant's phone number"
            />
          </div>
        </div>
        <div className="left-btn">
          <Link to="/submit" className="padded-btn mybtn">
            Next
          </Link>
        </div>
      </form>
    </FormComp>
  )
}

export default Next
