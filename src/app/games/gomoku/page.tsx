"use client";

import {
  Box,
  Container,
  Grid,
  Text,
  Button,
  Flex,
  useToast
} from "@chakra-ui/react";
import GameLayout from "@/components/GameLayout";
import { useState, useCallback } from "react";

type Player = "black" | "white";
type BoardState = (Player | null)[][];

export default function GomokuPage() {
  const [board, setBoard] = useState<BoardState>(() =>
    Array(15)
      .fill(null)
      .map(() => Array(15).fill(null))
  );
  const [currentPlayer, setCurrentPlayer] = useState<Player>("black");
  const [winner, setWinner] = useState<Player | null>(null);
  const toast = useToast();

  // 检查胜利条件
  const checkWin = useCallback(
    (row: number, col: number, player: Player, board: BoardState) => {
      const directions = [
        [1, 0], // 水平
        [0, 1], // 垂直
        [1, 1], // 对角线
        [1, -1] // 反对角线
      ];

      return directions.some(([dx, dy]) => {
        let count = 1;
        // 正向检查
        for (let i = 1; i < 5; i++) {
          const newRow = row + dx * i;
          const newCol = col + dy * i;
          if (
            newRow < 0 ||
            newRow >= 15 ||
            newCol < 0 ||
            newCol >= 15 ||
            board[newRow][newCol] !== player
          )
            break;
          count++;
        }
        // 反向检查
        for (let i = 1; i < 5; i++) {
          const newRow = row - dx * i;
          const newCol = col - dy * i;
          if (
            newRow < 0 ||
            newRow >= 15 ||
            newCol < 0 ||
            newCol >= 15 ||
            board[newRow][newCol] !== player
          )
            break;
          count++;
        }
        return count >= 5;
      });
    },
    []
  );

  // 处理落子
  const handleMove = useCallback(
    (row: number, col: number) => {
      if (winner || board[row][col]) return;

      const newBoard = board.map((row) => [...row]);
      newBoard[row][col] = currentPlayer;
      setBoard(newBoard);

      if (checkWin(row, col, currentPlayer, newBoard)) {
        setWinner(currentPlayer);
        toast({
          title: `${currentPlayer === "black" ? "黑棋" : "白棋"}获胜！`,
          status: "success",
          duration: 3000,
          isClosable: true
        });
        return;
      }

      setCurrentPlayer((prev) => (prev === "black" ? "white" : "black"));
    },
    [board, currentPlayer, winner, checkWin, toast]
  );

  // 重新开始游戏
  const resetGame = useCallback(() => {
    setBoard(
      Array(15)
        .fill(null)
        .map(() => Array(15).fill(null))
    );
    setCurrentPlayer("black");
    setWinner(null);
  }, []);

  return (
    <GameLayout>
      <Container maxW="1200px" py={8}>
        <Flex direction="column" align="center">
          <Text
            fontSize="2xl"
            mb={4}
            bgGradient="linear(to-r, blue.500, purple.500)"
            bgClip="text"
            fontWeight="bold"
          >
            {winner
              ? `${winner === "black" ? "黑棋" : "白棋"}获胜！`
              : `当前回合: ${currentPlayer === "black" ? "黑棋" : "白棋"}`}
          </Text>
          <Box
            bg="orange.100"
            p={2}
            borderRadius="lg"
            boxShadow="lg"
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: "lg",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0))"
            }}
          >
            <Grid
              templateColumns="repeat(15, 30px)"
              templateRows="repeat(15, 30px)"
              gap={0}
            >
              {board.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                  <Box
                    key={`${rowIndex}-${colIndex}`}
                    w="30px"
                    h="30px"
                    border="1px solid"
                    borderColor="orange.400"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    position="relative"
                    cursor={!winner && !cell ? "pointer" : "default"}
                    _hover={{
                      bg: !winner && !cell ? "orange.200" : undefined
                    }}
                    onClick={() => handleMove(rowIndex, colIndex)}
                  >
                    {cell && (
                      <Box
                        w="20px"
                        h="20px"
                        borderRadius="full"
                        bg={cell === "black" ? "black" : "white"}
                        border="2px solid"
                        borderColor={cell === "black" ? "gray.800" : "gray.300"}
                        transition="transform 0.2s"
                        _hover={{ transform: "scale(1.1)" }}
                      />
                    )}
                  </Box>
                ))
              )}
            </Grid>
          </Box>
          <Button
            mt={6}
            size="lg"
            colorScheme="blue"
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
        </Flex>
      </Container>
    </GameLayout>
  );
}
