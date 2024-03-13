import React, { useMemo } from 'react'
import {Box, Text} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import { CommonNavItemTextStyle } from '../../sharedUtils/sharedStyle';


const Navbar = () => {
  
  const navigate = useNavigate();

  return (
    <Box w="100%" h="5rem" mb="5rem" bg="black"   border="none" display="flex" justifyContent="center" alignItems="space-evenly" position="fixed" top="0"  >
     <Text {...CommonNavItemTextStyle} onClick={()=>{
       navigate("/")
     }}>Home</Text>
     <Text {...CommonNavItemTextStyle} onClick={()=>{
        navigate("/auth")
     }}>LogIn</Text>
     <Text {...CommonNavItemTextStyle} onClick={()=>{
        navigate("/cart")
     }}>Cart</Text>
     
    </Box>
  )
}

export default Navbar