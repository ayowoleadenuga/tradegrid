import React, { useState } from 'react'
import DealSource from './DealSource'
import TradeFinance from './TradeFinance'
import TradeLogic from './TradeLogic'
function Tabs() {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    
      <div className="tab-container">
        <div className="bloc-tabs">
          <button
            onClick={() => toggleTab(1)}
            className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
          >
            Deal Sourcing
          </button>
          <button
            onClick={() => toggleTab(2)}
            className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
          >
            Trade Financing
          </button>
          <button
            onClick={() => toggleTab(3)}
            className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
          >
            Trade Logistics
          </button>
        </div>

        {/* content */}
        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? 'content  active-content' : 'content'
            }
          >
            <DealSource/>
          </div>
          <div
            className={
              toggleState === 2 ? 'content  active-content' : 'content'
            }
          >
            <TradeFinance/>
          </div>
          <div
            className={
              toggleState === 3 ? 'content  active-content' : 'content'
            }
          >
           <TradeLogic/>
          </div>
        </div>
      </div>
 
  )
}

export default Tabs
