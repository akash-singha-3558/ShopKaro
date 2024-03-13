import React from 'react'
import {Box} from "@chakra-ui/react"
import axios from 'axios'
import SingleProductComponent from '../components/productComponents/SingleProductComponent'

const Home = () => {
  return (
    <Box mt="5rem">Home
    <SingleProductComponent/>


    </Box>
  )
}

export default Home