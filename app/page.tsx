'use client';

import { Box, Heading, Text, Button } from '@chakra-ui/react'

export default function HomePage() {
  return (
    <Box>
      <Box as="header" bg="blue.500" color="white" p={4}>
        <Heading as="h1">Welcome to Fuarked!</Heading>
        <Button colorScheme="teal" variant="link">Shop</Button>
        <Button colorScheme="teal" variant="link">Cart</Button>
        <Button colorScheme="teal" variant="link">About</Button>
      </Box>

      <Box as="main" p={4}>
        <Heading as="h2">Featured Products</Heading>
        {/* Add a grid or list of featured products here */}
      </Box>

      <Box as="footer" bg="blue.500" color="white" p={4}>
        <Text>© 2023 Fuarked. All rights reserved.</Text>
      </Box>
    </Box>
  )
}
