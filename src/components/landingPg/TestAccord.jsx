import React, { useState } from 'react'

function TestAccord({ onClick, title , toggler, index, children}) {
 
  return (
    <div
      className={
        toggler === index
          ? 'accord-section active-section'
          : 'accord-section'
      }
    >
      <button
        className={
          toggler === index ? 'accord-button active-button' : 'accord-button'
        }
        onClick={onClick}
      >
        <h3
          className={
            toggler === index ? 'accord-title active-title' : 'accord-title'
          }
        >
          {title}
        </h3>
        <i>{toggler === index ? '+' : '-'}</i>
      </button>
      <div
        // ref={content}tyle={{ maxHeight: `${setHeight}
        // s` }}
        className={
          toggler === index ? 'accord-content active-content' : 'accord-content'
        }
      >
        {children}
      </div>
    </div>
  )
}

export default TestAccord
