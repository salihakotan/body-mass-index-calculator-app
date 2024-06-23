import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

function DietPlan({ diet }) {
  return (
    <>
      <Box
        p="20px"
        boxShadow="10px 10px 10px purple"
        border="2px solid #333"
        margin="40px auto 20px auto"
        width="63%"
      >
        <Heading as="h3" fontSize="30px">
          Your diet plan
        </Heading>

        <Heading mt="20px" as="h6" fontSize="24px">
          Goals
        </Heading>

        <Text>
          {diet.goals.map((goal, i) => (
            <li key={i}>{goal}</li>
          ))}
        </Text>

        <Heading mt="20px" as="h6" fontSize="24px">
          Key Principles
        </Heading>

        <Text>
          {diet.keyPrinciples.map((principle, i) => (
            <li key={i}>{principle}</li>
          ))}
        </Text>
      </Box>
    </>
  );
}

export default DietPlan;
