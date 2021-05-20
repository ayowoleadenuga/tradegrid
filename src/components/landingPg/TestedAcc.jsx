import React, {useState} from 'react'
import TestAccord from './TestAccord'

function TestedAcc() {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
      setToggleState(index)
    }
    return (
      <div>
        <TestAccord
          title="How long is your delivery time?"
          onClick={() => toggleTab(1)}
          toggler={toggleState}
          index={1}
        >
          <p>
            Your product, your terms. You get to agree on the delivery time/date
            with the seller.
          </p>
        </TestAccord>
        <TestAccord
          title="How long is your delivery time?"
          onClick={() => toggleTab(2)}
          toggler={toggleState}
          index={2}
        >
          <p className="accordion-text">
            Your product, your terms. You get to agree on the delivery time/date
            with the seller.
          </p>
        </TestAccord>
        <TestAccord
          title="How long is your delivery time?"
          onClick={() => toggleTab(3)}
          toggler={toggleState}
          index={3}
        >
          <p className="accordion-text">
            Your product, your terms. You get to agree on the delivery time/date
            with the seller.
          </p>
        </TestAccord>
      </div>
    )
}

export default TestedAcc



