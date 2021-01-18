import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './categories.scoped.scss'

import { useDispatch } from 'react-redux'
import { updateCategory } from '../actions/newsObjects'

const Categories = () => {
  const [category, setCategory] = useState('')
  const dispatch = useDispatch()

  // USE DISPATCH HERE 

  // useEffect(() => {
  // }, [setCategory])


  const mouseEnter = (arg) => () => {
    console.log("HOVER")
          setCategory(arg)
          dispatch(updateCategory(category))
          console.log(category)
  }

  const handleClick = (e) => {
  
    dispatch(updateCategory(category))
  }

  return (
    <div className="margin">
<Link to={{pathname: '/topic'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('regional')}>REGIONAL</button></Link>
      <Link to={{pathname: '/topic'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('technology')}>TECHNOLOGY</button></Link>
      <Link to={{pathname: '/topic'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('lifestyle')}>LIFESTYLE</button></Link>
      <Link to={{pathname: '/topic'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('business')}>BUSINESS</button></Link>
      <Link to={{pathname: '/topic'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('general')}>GENERAL</button></Link>
      <Link to={{pathname: '/topic'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('programming')}>PROGRAMMING</button></Link>
      <Link to={{pathname: '/topic'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('science')}>SCIENCE</button></Link>
      <Link to={{pathname: '/topic'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('world')}>WORLD</button></Link>
      <Link to={{pathname: '/topic'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('sports')}>SPORTS</button></Link>
      <Link to={{pathname: '/topic'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('finance')}>FINANCE</button></Link>
      <Link to={{pathname: '/topic'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('academia')}>ACADEMIA</button></Link>
      <Link to={{pathname: '/topic'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('politics')}>POLITICS</button></Link>
      <Link to={{pathname: '/topic'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('health')}>HEALTH</button></Link>
      <Link to={{pathname: '/topic'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('opinion')}>OPINION</button></Link>
      <Link to={{pathname: '/topic'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('food')}>FOOD</button></Link>
      <Link to={{pathname: '/topic'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('game')}>GAME</button></Link>
      <Link to={{pathname: '/topic'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('food')}>FOOD</button></Link>

      <button>PublicationTEST</button>
      <button>Search</button>
    </div>
  )
}

export default Categories