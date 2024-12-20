"use client";

import { HStack, VStack, Text, Box } from "@chakra-ui/react";

interface GameScoreProps {
  score: number;
  bestScore: number;
}

export default function GameScore({ score, bestScore }: GameScoreProps) {
  return (
    <HStack spacing={4} w="100%" maxW="400px" justify="center">
      <ScoreBox title="分数" score={score} />
      <ScoreBox title="最高分" score={bestScore} />
    </HStack>
  );
}

function ScoreBox({ title, score }: { title: string; score: number }) {
  return (
    <VStack
      bg="gray.700"
      p={4}
      borderRadius="lg"
      spacing={1}
      flex={1}
      boxShadow="md"
      _hover={{ transform: "translateY(-2px)" }}
      transition="all 0.2s"
    >
      <Text color="gray.300" fontSize="sm">
        {title}
      </Text>
      <Text color="white" fontSize="2xl" fontWeight="bold">
        {score}
      </Text>
    </VStack>
  );
}
