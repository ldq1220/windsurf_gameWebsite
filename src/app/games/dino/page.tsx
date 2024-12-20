"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Text,
  Button,
  VStack,
  useToast
} from "@chakra-ui/react";
import GameLayout from "@/components/GameLayout";
import DinoGame from "./components/DinoGame";
import GameScore from "./components/GameScore";

export default function DinoPage() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const toast = useToast();

  // 加载最高分
  useEffect(() => {
    const savedBestScore = localStorage.getItem("dino-best-score");
    if (savedBestScore) {
      setBestScore(parseInt(savedBestScore));
    }
  }, []);

  // 处理游戏结束
  const handleGameOver = (finalScore: number) => {
    setIsPlaying(false);
    if (finalScore > bestScore) {
      setBestScore(finalScore);
      localStorage.setItem("dino-best-score", finalScore.toString());
      toast({
        title: "新纪录！",
        description: `你创造了新的最高分：${finalScore}`,
        status: "success",
        duration: 3000,
        isClosable: true
      });
    }
  };

  // 更新分数
  const handleScoreUpdate = (newScore: number) => {
    setScore(newScore);
  };

  // 开始新游戏
  const startNewGame = () => {
    setScore(0);
    setIsPlaying(true);
  };

  return (
    <GameLayout>
      <Container maxW="container.lg" py={8}>
        <VStack spacing={6} align="center">
          <GameScore score={score} bestScore={bestScore} />
          <Box
            w="100%"
            maxW="800px"
            h="400px"
            bg="gray.100"
            borderRadius="lg"
            overflow="hidden"
            position="relative"
            boxShadow="xl"
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              zIndex={1}
            >
              <DinoGame
                isPlaying={isPlaying}
                onGameOver={handleGameOver}
                onScoreUpdate={handleScoreUpdate}
              />
            </Box>
            {!isPlaying && (
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="blackAlpha.50"
                backdropFilter="blur(2px)"
                zIndex={2}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Button
                  colorScheme="blue"
                  size="lg"
                  onClick={startNewGame}
                  mb={4}
                  rounded="full"
                  bgGradient="linear(to-r, blue.400, purple.500)"
                  _hover={{
                    bgGradient: "linear(to-r, blue.500, purple.600)",
                    transform: "translateY(-2px)"
                  }}
                  transition="all 0.2s"
                >
                  {score === 0 ? "开始游戏" : "重新开始"}
                </Button>
                <Text color="gray.600" fontSize="sm">
                  按空格键或点击跳跃
                </Text>
              </Box>
            )}
          </Box>
        </VStack>
      </Container>
    </GameLayout>
  );
}
