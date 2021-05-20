import React from 'react'
import WorkStd from '../../assets/work-std.png'
import WorkExec from '../../assets/work-exec.png'
import WorkAward from '../../assets/work-award.png'
function WelcomeNote() {
    return (
      <section className="welcome-sect">
        <div className="welcome-div">
          <h3 className="text-center ">Welcome Note</h3>
          <p>
            We welcome you to the{' '}
            <strong>TradeGrid City Launchers’ Challenge:</strong> A competition
            which will activate board room instincts latent within you and test
            your execution capacity in the marketplace. If you’ve been eager to
            demonstrate your ingenuity and persuasion skills beyond your campus,
            this is the chance to make an impression on a global scale.
          </p>
          <p>
            <strong>
              Prepare to compete with teams from around your region
            </strong>
            , to see who emerges as the Top City Launchers in this incredibly
            special edition. The prize is huge, and not just in terms of
            recognitions and cash awards, but particularly on the amount of
            lives and businesses this challenge gives you a platform to
            influence. However, first, you must get ready to stretch your skills
            in <strong>team building</strong> , sharpen your{' '}
            <strong>business strategy</strong>
            savviness, and get up-skilled in the art of{' '}
            <strong>creative influence and persuasion.</strong> This is going to
            be a challenge unlike any other.{' '}
          </p>
          <p>Best of luck!</p>
        </div>
        <div className="benefit">
          <h3 className="text-center ">What's in it for me?</h3>
          <div className="benefit-div">
            <div className="benefit-img-div">
              <img src={WorkStd} alt="" />
              <div className="img-content-div">
                <p>
                  Compete in exciting <strong>virtual rounds</strong> against
                  the best strategy minds in your region.
                </p>
              </div>
            </div>
            <div className="benefit-img-div">
              <img src={WorkExec} alt="" />
              <div className="img-content-div">
                <p>
                  Meet and network with leaders from <strong>TradeGrid</strong>{' '}
                  and the Oil & Gas Industry.
                </p>
              </div>
            </div>
            <div className="benefit-img-div">
              <img src={WorkAward} alt="" />
              <div className="img-content-div">
                <p>
                  Official Winners will be awarded a cash prize of{' '}
                  <strong>NGN 1Million</strong> , for each category, and an
                  internship opportunity with TradeGrid LLC (California).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default WelcomeNote




