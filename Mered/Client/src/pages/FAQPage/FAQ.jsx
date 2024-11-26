import React from 'react'
import "./FAQ.css"
import DropBox from '../../components/FAQDropBox/FAQDropBox'

const FAQ = () => {
  let id = 1;

  return (
    <div id="wrapper">
      <DropBox Number={id++} Question="Who is gay?" Answer="Not me!" />
      <DropBox Number={id++} Question="Do you smell your fingers after scratching your balls?" Answer="Well you know I do ;)" />
      <DropBox Number={id++} Question="What is the best coding language?" Answer="JS is the best, f#ck python!" />
      <DropBox Number={id++} Question="Who has bigger Daniel Or Georgey?" Answer="Georgy has the bigger heart <3" />
    </div>
  )
}

export default FAQ