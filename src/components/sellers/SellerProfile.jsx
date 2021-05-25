import React from 'react'
import CreateProfile from '../buyers/CreateProfile'
import { makeStyles } from '@material-ui/core/styles'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'

const useStyles = makeStyles({
  timeline: {
    border: '2px solid red',
    paddingLeft: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    textAlign: 'left',
  },
  timelineContentContainer: {
    minWidth: '500px',
    paddingBottom: 40,
  },
  timelineContent: {
    width: '100%',
  },
  timelineIcon: {
    fontSize: '36px',
    color: '#E873A8',
    marginLeft: '0px',
  },
  timelineConnector: {
    background: '#E873A8',
  },
})

function SellerProfile() {
  const classes = useStyles()
  return (
    <CreateProfile title="Create a Seller Profile to start trading">
      <Timeline className={classes.timeline}>
        <TimelineItem>
          <TimelineSeparator>
            <div className={classes.timelineIcon}>01</div>
            <TimelineConnector className={classes.timelineConnector} />
          </TimelineSeparator>
          <TimelineContent className={classes.timelineContentContainer}>
            <div>
              <h6>Download App</h6>
              <small>
                Download the App{' '}
                <a
                  className="app-link"
                  href="www.thetradegrid.com/app"
                  target="_blank"
                >
                  {' '}
                  www.thetradegrid.com/app.{' '}
                </a>
              </small>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <div className={classes.timelineIcon}>02</div>
            <TimelineConnector className={classes.timelineConnector} />
          </TimelineSeparator>
          <TimelineContent className={classes.timelineContentContainer}>
            <div>
              <h6>Set Up</h6>
              <small>
                Signup, verify your account and go to your profile to set up
                Seller parameters like your Coverage region, Product types and
                Current prices.
              </small>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <div className={classes.timelineIcon}>03</div>
          </TimelineSeparator>
          <TimelineContent className={classes.timelineContentContainer}>
            <div>
              <h6>Get Matched</h6>
              <small>
                Wait to get matched to your first order and remember to update
                delivery status till product is delivered.
              </small>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </CreateProfile>
  )
}

export default SellerProfile
