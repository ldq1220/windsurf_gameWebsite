"use client";

import { Box, Flex, Heading, Button, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      as="header"
      position="fixed"
      width="100%"
      zIndex={10}
      bg={scrolled ? "rgba(255, 255, 255, 0.8)" : "transparent"}
      backdropFilter={scrolled ? "blur(10px)" : "none"}
      py={scrolled ? 2 : 4}
      transition="all 0.3s ease-in-out"
    >
      <Container maxW="1200px">
        <Flex
          mx="auto"
          bg={scrolled ? "white" : "transparent"}
          p={2}
          align="center"
          rounded={scrolled ? "full" : "none"}
          boxShadow={scrolled ? "lg" : "none"}
          border={scrolled ? "1px" : "none"}
          borderColor="gray.100"
          transition="all 0.3s ease-in-out"
        >
          <Heading
            size="md"
            color={scrolled ? "blue.600" : "blue.400"}
            ml={4}
            bgGradient="linear(to-r, blue.400, purple.500)"
            bgClip="text"
            transition="all 0.3s ease-in-out"
          >
            Game Center
          </Heading>
          <Flex gap={2} ml="auto" mr={2}>
            <Button
              variant="ghost"
              colorScheme="blue"
              rounded="full"
              size="sm"
              _hover={{ bg: "blue.50" }}
              transition="all 0.3s ease-in-out"
            >
              首页
            </Button>
            <Button
              variant="ghost"
              colorScheme="blue"
              rounded="full"
              size="sm"
              _hover={{ bg: "blue.50" }}
              transition="all 0.3s ease-in-out"
            >
              游戏
            </Button>
            <Button
              variant="solid"
              colorScheme="blue"
              rounded="full"
              size="sm"
              bgGradient="linear(to-r, blue.400, purple.500)"
              _hover={{
                bgGradient: "linear(to-r, blue.500, purple.600)"
              }}
              transition="all 0.3s ease-in-out"
            >
              开始游戏
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
