import React, {useState, useRef} from 'react'
import clsx from 'clsx'
function Accordion({title, children}) {
    const [setActive, setActiveState] = useState("")
    const [setHeight, setHeightState] = useState("0px")
    const [setRotate, setRotateState] = useState("content-icon")
    const [setBackground, setBackgroundState] = useState('accordion-section')
    const content = useRef(null)
    function toggleAccordion(){
        setActiveState(setActive === "" ? "active": "")
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`)
        setRotateState(setActive === "active" ? "accordion-icon" : "accordion-icon rotate")
        setBackgroundState(
          setActive === 'active' ? 'accordion-section' : 'accordion-section colored'
        )
    }
    return (
      <div className={`${setBackground}`}>
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
          <h3 className={clsx('accordion-title', `${setActive}`)}>{title}</h3>
          <i className={clsx('fas fa-chevron-down', `${setRotate}`)}></i>
        </button>
        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="accordion-content"
        >
          {children}
        </div>
      </div>
    )
}

export default Accordion
