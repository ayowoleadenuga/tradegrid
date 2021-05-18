import React from 'react'
import {Link} from 'react-router-dom'
import clsx from 'clsx'
import './style.css'

function MyButton({text, path, clsName}) {
    return (
      <Link to={path} className
      ={clsx("btn mybtn" , clsName)} role="button">
       {text}
      </Link>
    )
}

export default MyButton
