import React from 'react'
function Accordion({  title, content, active, toggleActive, index, openId }) {
 console.log({index, openId})
  return (
    <div
      className={
        active && openId === index
          ? 'accordion-section colored'
          : 'accordion-section'
      }
      key={title}
    >
      <button
        id={title}
        className={
          active && openId === index ? 'accordion active' : 'accordion'
        }
        onClick={() => toggleActive(index)}
      >
        <h3
          className={
            active && openId === index
              ? 'accordion-title active'
              : 'accordion-title'
          }
        >
          {title}
        </h3>
        <i
          className={
            active && openId === index
              ? 'fas fa-chevron-down rotate active'
              : 'fas fa-chevron-down'
          }
        ></i>
      </button>
      <div
        className="accordion-content"
        id={`${index}-content`}
        style={{maxHeight: active && openId === index ? "fit-content" : "0px"}}
      >
        <p className="accordion-text">{content}</p>
      </div>
    </div>
  )
}

export default Accordion
