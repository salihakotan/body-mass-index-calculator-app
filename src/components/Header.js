import {Heading} from "@chakra-ui/react"
import React from 'react'
import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="headerArea">
      <Heading as="h1" m="40px" textAlign="center">BMI Calculator</Heading>


        <hr/>

        <nav>
          <ul className="headerMenu">
            <li>
              <Link to="/">Calculate</Link>
            </li>
            <li>
              <Link to="/whatIsBmi">What is bmi?</Link>
            </li>
          </ul>
        </nav>


    </div>
  )
}

export default Header