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

function Submit() {
  const classes = useStyles()
  return (
    <FormComp clsName="pink-div">
      <div class="next-form">
        <label for="inputEmail4" class="form-label">
          Average Weekly Drop downs on Volumes
        </label>
        <input
          type="text"
          class="form-control"
          placeholder="Average weekly drop downs on volumes"
          aria-label="Average weekly drop downs "
        />
      </div>
      <div>
        <p>
          <strong>Interested in?</strong>
          <em> (Select one or more that applies)</em>{' '}
        </p>
        <StyledCheckbox name="retail" label="Buying" />
        <StyledCheckbox name="bulk" label="Selling" />
        <StyledCheckbox name="depot" label="Credit facilities" />
        <StyledCheckbox name="int'l" label="Escrow Payment Facility" />

        <CssTextField
          className={classes.margin}
          label="Other"
          variant="outlined"
          id="custom-css-outlined-input"
        />
      </div>
      <div>
        <p>
          <strong>Products Interest </strong>
          <em> (Select one or more that applies)</em>{' '}
        </p>
        <StyledCheckbox name="pms" label="PMS" />
        <StyledCheckbox name="ago" label="AGO" />
        <StyledCheckbox name="lpg" label="LPG" />
        <StyledCheckbox name="dpk" label="DPK" />
        <StyledCheckbox name="cng" label="CNG" />
        <StyledCheckbox name="lng" label="LNG" />
        <StyledCheckbox name="lubricants" label="Lubricants" />
        <StyledCheckbox name="parts" label="Parts & Equipments" />
        <StyledCheckbox name="base oils" label="Base Oils" />
        <CssTextField
          className={classes.margin}
          label="Other"
          variant="outlined"
          id="custom-css-outlined-input"
        />
      </div>

      <div className="submit-btn">
        <Link to="/signup" className="previous">
          <i class="fas fa-chevron-left"></i> Previous
        </Link>
        <Link to="/submit" className="padded-btn mybtn">
          Submit
        </Link>
      </div>
    </FormComp>
  )
}

export default Submit
