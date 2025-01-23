// @ts-nocheck
import "./App.css";

// components
import {
  SimpleGrid,
  Box,
  Center,
  Card,
  CardHeader,
  Flex,
  Avatar,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <Center>
        <SimpleGrid columns={1} spacing={4} width={700}>
            <Card maxW="md" key={1}>
              <CardHeader>
                <Flex>
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar
                      name='firstName lastName'
                      src='image'
                    />
                    <Box>
                      <Heading
                        size="sm"
                        textAlign={"left"}
                      >{`firstName lastName`}</Heading>
                      <Text>{`company title`}</Text>
                    </Box>
                  </Flex>
                  <Button colorScheme="blue" variant="outline">
                    Follow
                  </Button>
                </Flex>
              </CardHeader>
            </Card>
        </SimpleGrid>
        <Button colorScheme="green" onClick={() => {}}>
          Add 1 more
        </Button>
      </Center>
    </>
  );
}

export default App;
