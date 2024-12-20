import { Box, IconButton, Tooltip } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { ArrowBackIcon } from "@chakra-ui/icons";

interface GameLayoutProps {
  children: React.ReactNode;
}

export default function GameLayout({ children }: GameLayoutProps) {
  const router = useRouter();

  return (
    <Box minH="100vh" bg="gray.50" position="relative">
      <Tooltip label="返回首页" placement="right">
        <IconButton
          aria-label="返回首页"
          icon={<ArrowBackIcon />}
          position="fixed"
          top={4}
          left={4}
          colorScheme="blue"
          rounded="full"
          size="lg"
          onClick={() => router.push("/")}
          zIndex={10}
          boxShadow="md"
          _hover={{
            transform: "scale(1.1)"
          }}
          transition="all 0.2s"
        />
      </Tooltip>
      <Box py={4}>{children}</Box>
    </Box>
  );
}
