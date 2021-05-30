import React from 'react'
import CreateProfile from './CreateProfile'
import {makeStyles} from '@material-ui/core/styles'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import Google from '../../assets/google.svg'
import Apple from '../../assets/apple.svg'
import HomeGroup from '../../assets/buyer-group.png'
const useStyles = makeStyles({
  timeline: {
    marginTop:30,
    width:'100%',
    padding: 0,
  },

  timelineContentContainer: {
    paddingBottom:40,
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

function BuyerProfile() {
    const classes = useStyles()
    return (
      <CreateProfile
        title="Create a Buyer Profile to start trading"
        className="user-profile"
        PhoneCircle={HomeGroup}
      >
        <Timeline className={classes.timeline} >
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
                <h6>Get Quote</h6>
                <small>Signup and raise a quote request.</small>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <div className={classes.timelineIcon}>03</div>
            </TimelineSeparator>
            <TimelineContent className={classes.timelineContentContainer}>
              <div>
                <h6>Complete Purchase</h6>
                <small>Make payment and track arrival of your product.</small>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        <div className="app-store">
          <a href="/">
            <img src={Apple} alt="" className="mr-5" />
          </a>
          <a href="/">
            <img src={Google} alt="" className="mr-5" />
          </a>
        </div>
      </CreateProfile>
    )
}

export default BuyerProfile
