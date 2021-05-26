import React from 'react'
import {Link} from 'react-router-dom'
import clsx from 'clsx'
import './style.css'

function MyButton({text, path, clsName, section}) {
    return (
      <Link to={path} className
      ={clsx("btn mybtn" , clsName)} role="button" params={{section:section ? section : null }}>
       {text}
      </Link>
    )
}

export default MyButton
