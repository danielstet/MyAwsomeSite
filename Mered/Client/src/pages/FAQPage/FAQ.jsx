import React from 'react'
import "./FAQ.css"
import DropBox from '../../components/FAQDropBox/FAQDropBox'

const FAQ = () => {
  return (
    <div id="wrapper">
      <DropBox Number={1} Question="Test" Answer="Lorem ipsum" />
    </div>
  )
}

export default FAQ