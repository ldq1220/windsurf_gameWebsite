"use client";

import { Box, Image, Heading, Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

interface GameCardProps {
  title: string;
  description: string;
  imageUrl: string;
  isComingSoon?: boolean;
  gameUrl?: string;
}

export default function GameCard({
  title,
  description,
  imageUrl,
  isComingSoon,
  gameUrl
}: GameCardProps) {
  const router = useRouter();

  const handleClick = () => {
    if (!isComingSoon && gameUrl) {
      router.push(gameUrl);
    }
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      transition="transform 0.2s"
      _hover={{ transform: "translateY(-4px)" }}
    >
      <Image
        src={imageUrl}
        alt={title}
        height="200px"
        width="100%"
        objectFit="cover"
      />

      <Box p={6}>
        <Heading size="md" mb={2}>
          {title}
        </Heading>
        <Text mb={4}>{description}</Text>
        <Button
          colorScheme={isComingSoon ? "gray" : "blue"}
          width="full"
          isDisabled={isComingSoon}
          onClick={handleClick}
        >
          {isComingSoon ? "即将推出" : "开始游戏"}
        </Button>
      </Box>
    </Box>
  );
}
