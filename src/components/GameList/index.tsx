"use client";

import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  Button
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { games } from "@/constants/games";

export default function GameList() {
  const router = useRouter();

  return (
    <Box py={16}>
      <Container maxW="container.lg">
        <Heading
          as="h2"
          size="2xl"
          mb={12}
          textAlign="center"
          bgGradient="linear(to-r, blue.400, purple.500)"
          bgClip="text"
        >
          热门游戏
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)"
          }}
          gap={8}
        >
          {games.map((game) => (
            <GridItem
              key={game.title}
              bg="white"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="md"
              transition="transform 0.3s, box-shadow 0.3s"
              _hover={{
                transform: "translateY(-8px)",
                boxShadow: "xl"
              }}
              cursor={game.isComingSoon ? "not-allowed" : "pointer"}
              onClick={() => !game.isComingSoon && router.push(game.gameUrl)}
            >
              <Box
                bgImage={`url(${game.imageUrl})`}
                bgSize="cover"
                bgPosition="center"
                h="200px"
              />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={2}>
                  {game.title}
                </Heading>
                <Text color="gray.600" mb={4}>
                  {game.description}
                </Text>
                <Button
                  colorScheme="blue"
                  isDisabled={game.isComingSoon}
                  width="full"
                >
                  {game.isComingSoon ? "即将推出" : "开始游戏"}
                </Button>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
