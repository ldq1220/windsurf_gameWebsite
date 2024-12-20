"use client";

import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Board } from "../page";

const tileColors: { [key: number]: string } = {
  2: "#eee4da",
  4: "#ede0c8",
  8: "#f2b179",
  16: "#f59563",
  32: "#f67c5f",
  64: "#f65e3b",
  128: "#edcf72",
  256: "#edcc61",
  512: "#edc850",
  1024: "#edc53f",
  2048: "#edc22e",
};

const textColors: { [key: number]: string } = {
  2: "#776e65",
  4: "#776e65",
  8: "#f9f6f2",
  16: "#f9f6f2",
  32: "#f9f6f2",
  64: "#f9f6f2",
  128: "#f9f6f2",
  256: "#f9f6f2",
  512: "#f9f6f2",
  1024: "#f9f6f2",
  2048: "#f9f6f2",
};

interface GameBoardProps {
  board: Board;
  gameOver: boolean;
}

export default function GameBoard({ board, gameOver }: GameBoardProps) {
  return (
    <Box
      position="relative"
      bg="gray.200"
      p={4}
      borderRadius="lg"
      boxShadow="xl"
      w="100%"
      maxW="400px"
      aspectRatio="1"
    >
      <Grid
        templateColumns="repeat(4, 1fr)"
        templateRows="repeat(4, 1fr)"
        gap={2}
        h="100%"
      >
        {board.map((row, i) =>
          row.map((cell, j) => (
            <GridItem
              key={`${i}-${j}`}
              bg={cell ? tileColors[cell] || "#3c3a32" : "gray.300"}
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize={cell > 999 ? "2xl" : "3xl"}
              fontWeight="bold"
              color={cell ? textColors[cell] || "#f9f6f2" : "transparent"}
              borderRadius="md"
              transition="all 0.15s"
              transform={cell ? "scale(1)" : "scale(0.9)"}
              _hover={{
                transform: cell ? "scale(1.05)" : "scale(0.9)",
              }}
            >
              {cell || ""}
            </GridItem>
          ))
        )}
      </Grid>
      {gameOver && (
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.600"
          borderRadius="lg"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="white"
          fontSize="3xl"
          fontWeight="bold"
        >
          游戏结束
        </Box>
      )}
    </Box>
  );
}
