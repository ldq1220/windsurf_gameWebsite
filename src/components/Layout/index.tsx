"use client";

import { Box, Container, HStack, Link, Button } from "@chakra-ui/react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 获取 banner 的高度（400px）
      const bannerHeight = pathname === "/" ? 400 : 0;
      const offset = window.scrollY;
      setScrolled(offset > bannerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <Box minH="100vh" bg="gray.50">
      <Box
        as="header"
        bg={scrolled ? "rgba(255, 255, 255, 0.9)" : "white"}
        boxShadow={scrolled ? "lg" : "sm"}
        position="fixed"
        top={0}
        right={0}
        mx={scrolled ? 4 : 0}
        mt={scrolled ? 4 : 0}
        borderRadius={scrolled ? "full" : "none"}
        width={scrolled ? "80%" : "100%"}
        left={scrolled ? "10%" : "0"}
        zIndex={1000}
        transition="all 0.3s ease-in-out"
        backdropFilter={scrolled ? "blur(10px)" : "none"}
      >
        <Container maxW="container.lg" py={4}>
          <HStack justify="space-between">
            <Link
              href="/"
              fontSize="2xl"
              fontWeight="bold"
              color="blue.500"
              _hover={{ textDecoration: "none" }}
            >
              Game Center
            </Link>
            <HStack spacing={8}>
              <Link
                href="/"
                color={pathname === "/" ? "blue.500" : "gray.600"}
                fontWeight={pathname === "/" ? "bold" : "normal"}
                _hover={{ color: "blue.500" }}
              >
                首页
              </Link>
              <Link
                href="/games"
                color={pathname.startsWith("/games") ? "blue.500" : "gray.600"}
                fontWeight={pathname.startsWith("/games") ? "bold" : "normal"}
                _hover={{ color: "blue.500" }}
              >
                游戏
              </Link>
              <Button
                colorScheme="blue"
                size="sm"
                onClick={() => router.push("/games")}
              >
                开始游戏
              </Button>
            </HStack>
          </HStack>
        </Container>
      </Box>
      <Box as="main" pt={scrolled ? "72px" : "0px"}>
        <Box flex="1">{children}</Box>
        <Footer />
      </Box>
    </Box>
  );
}
