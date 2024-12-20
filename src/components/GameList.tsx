import { Container, SimpleGrid, Heading } from "@chakra-ui/react";
import { games } from "@/constants/games";
import GameCard from "@/components/GameCard";

export default function GameList() {
  return (
    <Container maxW="1200px" py={16}>
      <Heading mb={8} textAlign="center">
        热门游戏
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
        {games.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
