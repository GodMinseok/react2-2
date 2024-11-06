import { Button } from "@/components/ui/button";
import { HStack } from "@chakra-ui/react";
import { Badge, Stack } from "@chakra-ui/react";
import { ClipboardIconButton, ClipboardRoot } from "@/components/ui/clipboard";
import { AiFillApple } from "react-icons/ai";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";

export default function Chakra() {
  const items = [
    { value: "a", title: "First Item", text: "Some value 1..." },
    { value: "b", title: "Second Item", text: "Some value 2..." },
    { value: "c", title: "Third Item", text: "Some value 3..." },
  ];

  return (
    <>
      <h1>Chakra Page</h1>
      <AiFillApple />
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>

      <Stack direction="row">
        <Badge bg="gray.200" color="black">
          Default
        </Badge>
        <Badge bg="green.500" color="white">
          Success
        </Badge>
        <Badge bg="red.500" color="white">
          Removed
        </Badge>
        <Badge bg="purple.500" color="white">
          New
        </Badge>
      </Stack>

      <ClipboardRoot value="Hello World">
        <ClipboardIconButton />
      </ClipboardRoot>

      <AccordionRoot collapsible defaultValue={["b"]}>
        {items.map((item, index) => (
          <AccordionItem key={index} value={item.value}>
            <AccordionItemTrigger>{item.title}</AccordionItemTrigger>
            <AccordionItemContent>{item.text}</AccordionItemContent>
          </AccordionItem>
        ))}
      </AccordionRoot>
    </>
  );
}
