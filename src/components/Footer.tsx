"use client";

import { Box, Container, Text, Flex, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="gray.50" py={10} mt={20}>
      <Container maxW="1200px">
        <Flex direction="column" align="center">
          <Text mb={2}>© 2024 Game Center. All rights reserved.</Text>
          <Flex gap={4}>
            <Link color="blue.500">隐私政策</Link>
            <Link color="blue.500">使用条款</Link>
            <Link color="blue.500">联系我们</Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
