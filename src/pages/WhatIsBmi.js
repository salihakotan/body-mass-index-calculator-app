import { Heading, Text } from '@chakra-ui/react'
import React from 'react'

function WhatIsBmi() {
  return (
    <div>
        <Heading as="h1">What is BMI?</Heading>
        <Text mt="30px">
        Body Mass Index (BMI) is a numerical value derived from a person's weight and height. It is widely used as a screening tool to categorize individuals into different weight status categories, such as underweight, normal weight, overweight, and obesity. BMI is a simple, quick, and useful measure to estimate body fatness and assess potential health risks associated with weight.
        </Text>
    </div>
  )
}

export default WhatIsBmi