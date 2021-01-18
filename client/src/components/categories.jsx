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

  const categoryList = [
    {code: 'regional', title: 'REGIONAL'},
    {code: 'technology', title: 'TECHNOLOGY'},
    {code: 'lifestyle', title: 'LIFESTYLE'},
    {code: 'business', title: 'BUSINESS'},
    {code: 'general', title: 'GENERAL'},
    {code: 'program ming', title: 'PROGRAMMING'},
    {code: 'science', title: 'SCIENCE'},
    {code: 'entertainment', title: 'ENTERTAINMENT'},
    {code: 'world', title: 'WORLD'},
    {code: 'sports', title: 'SPORTS'},
    {code: 'finance', title: 'FINANCE'},
    {code: 'academia', title: 'ACADEMIA'},
    {code: 'politics', title: 'POLITICS'},
    {code: 'health', title: 'HEALTH'},
    {code: 'opinion', title: 'OPINION'},
    {code: 'food', title: 'FOOD'},
    {code: 'game', title: 'GAME'},
  ]

  return (
    <div className="margin">
      {categoryList.map((category) => (
        <Link to={{pathname: '/topic'}} ><button onClick={handleClick} onMouseEnter={mouseEnter(category.code)}>{category.title}</button></Link>
      ))}
      <button>PublicationTEST</button>
      <button>Search</button>
    </div>
  )
}

export default Categories