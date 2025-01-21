// @ts-nocheck
import { useState, useEffect } from "react";
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
  console.log(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(2);
    getData();
  }, []);

  console.log(3);
  async function getData() {
    console.log(4);
    const res = await fetch("https://randomuser.me/api/?results=5");
    const data = await res.json();
    setData(data.results);
  }

  console.log(5);
  return (
    <>
      <Center>
        <SimpleGrid columns={1} spacing={4} width={700}>
          {data.map((person) => (
            <Card maxW="md">
              <CardHeader>
                <Flex>
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar
                      name={`${person.name.first} ${person.name.last}`}
                      src={person.picture.thumbnail}
                    />
                    <Box>
                      <Heading
                        size="sm"
                        textAlign={"left"}
                      >{`${person.name.first} ${person.name.last}`}</Heading>
                      <Text>{`${person.location.city}, ${person.location.country}`}</Text>
                    </Box>
                  </Flex>
                  <Button colorScheme="blue" variant="outline">
                    Follow
                  </Button>
                </Flex>
              </CardHeader>
            </Card>
          ))}
        </SimpleGrid>
      </Center>
    </>
  );
}

export default App;
