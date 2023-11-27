import React from "react"
import Connector from "./components/login/connector"
import { Box, Button, Container, Heading, Text, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <main className="container">
      <Container maxW="container.md" py={10}>
        <VStack spacing={8} align="stretch">
          <Heading as="h1" size="2xl" textAlign="center">
            Welcome to the dApp-as-a-Service Template
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Powered by Next.js, TypeScript, TailwindCSS, ChakraUI, and NextAuth
          </Text>
          <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="md">
            <Heading as="h2" size="lg" mb={4}>
              Test the power of Web3 as if it was Web2
            </Heading>
            <Connector />
          </Box>
          <Box>
            <Heading as="h3" size="md" mb={2}>
              This template was created by BoricuaDev
            </Heading>
            <Text>
              If this template has helped you to create a better SaaS, please support the creator by following him on X at @_boricuadev_
            </Text>
          </Box>

          <Box textAlign="center">
            <Button colorScheme="blue" size="lg">
              Read the docs
            </Button>
          </Box>
        </VStack>
      </Container>
    </main>
  )
}
