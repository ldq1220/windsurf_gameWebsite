"use client";

import { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import { GameEngine } from "../utils/gameEngine";

interface DinoGameProps {
  isPlaying: boolean;
  onGameOver: (score: number) => void;
  onScoreUpdate: (score: number) => void;
}

export default function DinoGame({
  isPlaying,
  onGameOver,
  onScoreUpdate
}: DinoGameProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameEngineRef = useRef<GameEngine | null>(null);

  // 初始化游戏引擎
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 设置画布大小为父容器的大小
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      // 设置实际像素大小
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;

      // 重新创建游戏引擎
      if (gameEngineRef.current) {
        gameEngineRef.current.destroy();
      }

      try {
        gameEngineRef.current = new GameEngine(canvas, {
          onGameOver,
          onScoreUpdate
        });
      } catch (error) {
        console.error("Failed to create game engine:", error);
      }
    };

    resizeCanvas();

    // 处理窗口大小改变
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (gameEngineRef.current) {
        gameEngineRef.current.destroy();
      }
    };
  }, [onGameOver, onScoreUpdate]);

  // 处理游戏状态变化
  useEffect(() => {
    const gameEngine = gameEngineRef.current;
    if (!gameEngine) return;

    if (isPlaying) {
      gameEngine.start();
    } else {
      gameEngine.stop();
    }
  }, [isPlaying]);

  return (
    <Box w="100%" h="100%" position="relative">
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          backgroundColor: "#F7FAFC"
        }}
      />
    </Box>
  );
}
