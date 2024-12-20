"use client";

import {
  Box,
  Container,
  Text,
  Button,
  VStack,
  useToast
} from "@chakra-ui/react";
import { useState, useCallback, useEffect } from "react";
import GameLayout from "@/components/GameLayout";
import GameBoard from "./components/GameBoard";
import GameScore from "./components/GameScore";
import { moveBoard, initializeBoard, canMove } from "./utils/gameLogic";

export type Direction = "up" | "down" | "left" | "right";
export type Board = number[][];

export default function Game2048() {
  const [board, setBoard] = useState<Board>(() => initializeBoard());
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const toast = useToast();

  // 处理键盘事件
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (gameOver) return;

      event.preventDefault(); // 阻止默认行为，比如页面滚动

      const keyMap: { [key: string]: Direction } = {
        ArrowUp: "up",
        ArrowDown: "down",
        ArrowLeft: "left",
        ArrowRight: "right",
        w: "up",
        s: "down",
        a: "left",
        d: "right"
      };

      const direction = keyMap[event.key];
      if (!direction) return;

      const { newBoard, points, merged } = moveBoard(board, direction);

      if (merged) {
        setBoard(newBoard);
        setScore((prev) => {
          const newScore = prev + points;
          if (newScore > bestScore) {
            setBestScore(newScore);
            localStorage.setItem("2048-best-score", newScore.toString());
          }
          return newScore;
        });

        // 检查游戏是否结束
        if (!canMove(newBoard)) {
          setGameOver(true);
          toast({
            title: "游戏结束！",
            description: `最终得分: ${score + points}`,
            status: "info",
            duration: 5000,
            isClosable: true
          });
        }
      }
    },
    [board, gameOver, score, bestScore, toast]
  );

  // 重新开始游戏
  const resetGame = useCallback(() => {
    setBoard(initializeBoard());
    setScore(0);
    setGameOver(false);
  }, []);

  // 加载最高分
  useEffect(() => {
    const savedBestScore = localStorage.getItem("2048-best-score");
    if (savedBestScore) {
      setBestScore(parseInt(savedBestScore));
    }
  }, []);

  // 添加键盘事件监听
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <GameLayout>
      <Container maxW="container.sm" py={8}>
        <VStack spacing={6}>
          <GameScore score={score} bestScore={bestScore} />
          <GameBoard board={board} gameOver={gameOver} />
          <Button
            colorScheme="blue"
            size="lg"
            onClick={resetGame}
            rounded="full"
            bgGradient="linear(to-r, blue.400, purple.500)"
            _hover={{
              bgGradient: "linear(to-r, blue.500, purple.600)",
              transform: "translateY(-2px)"
            }}
            transition="all 0.2s"
          >
            重新开始
          </Button>
          {gameOver && (
            <Text
              fontSize="xl"
              color="red.500"
              fontWeight="bold"
              textAlign="center"
            >
              游戏结束！最终得分: {score}
            </Text>
          )}
          <Text fontSize="sm" color="gray.500" textAlign="center">
            使用方向键或 WASD 控制方块移动
          </Text>
        </VStack>
      </Container>
    </GameLayout>
  );
}
