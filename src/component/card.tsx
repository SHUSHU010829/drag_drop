"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Box,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Reorder } from "framer-motion";

export default function SimpleCard() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  return (
    <div>
      <Reorder.Group values={items} onReorder={setItems}>
        <Stack spacing="4">
          {items.map((item, index) => (
            <Reorder.Item key={item} value={item}>
              <Card>
                <CardHeader>
                  <Heading size="md">Item {index + 1}</Heading>
                </CardHeader>
                <CardBody>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Summary
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      View a summary of all your clients over the last month.
                    </Text>
                  </Box>
                </CardBody>
              </Card>
            </Reorder.Item>
          ))}
        </Stack>
      </Reorder.Group>
    </div>
  );
}
